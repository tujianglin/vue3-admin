<script lang="tsx">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { listenerRouteChange } from '/@/router/logics';
  import { useGo } from '/@/hooks/web/usePage';
  import { initAffixTabs } from './useTab';
  export default defineComponent({
    setup() {
      initAffixTabs();

      const { prefixCls } = useDesign('layout-tabs');
      const tabStore = useMultipleTabStore();
      const activeKey = ref();
      const go = useGo();
      const router = useRouter();

      const getTabsState = computed(() => {
        return tabStore.tabList;
      });

      const unClose = computed(() => unref(getTabsState).length === 1);

      listenerRouteChange((route) => {
        if (!route) return;
        const { fullPath, path } = route;
        const p = fullPath || path;
        if (activeKey.value !== p) {
          activeKey.value = p;
        }
        tabStore.addTab(unref(route));
      });

      const onChange = (key) => {
        activeKey.value = key;
        go(key);
      };

      const onEdit = (targetKey: string) => {
        if (unref(unClose)) return;
        tabStore.closeTabByKey(targetKey, router);
      };

      return () => (
        <div class={prefixCls}>
          <Tabs
            v-model:activeKey={activeKey.value}
            type={'editable-card'}
            size={'small'}
            hideAdd
            tabBarGutter={3}
            animated={false}
            onChange={onChange}
            onEdit={onEdit}
          >
            {unref(getTabsState).map((i) => (
              // 当前路由是否和选中路由一致,并且tab不止一条数据
              <TabPane key={i.path} tab={i.meta.title} closable={!(i && i.meta?.affix)}></TabPane>
            ))}
          </Tabs>
        </div>
      );
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-layout-tabs';

  .@{prefix-cls} {
    background: #fff;
    box-shadow: 1px -1px rgba(0, 0, 0, 0.2);
    padding: 2px 10px;

    .ant-tabs-small {
      .ant-tabs-nav {
        margin-bottom: 0px;
        &::before {
          display: none;
        }
      }

      .ant-tabs-tab {
        height: calc(@multiple-height - 2px);
        padding: 6px 10px !important;

        .ant-tabs-tab-remove {
          margin: 0;
          padding: 0;
          padding-left: 6px;
        }

        &-active {
          background: var(--ant-primary-color);

          .ant-tabs-tab-remove {
            color: #fff;
          }
        }

        &-active .ant-tabs-tab-btn {
          color: #fff;
        }
      }
    }
  }
</style>
