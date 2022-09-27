<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { ScrollContainer } from '/@/components/Container';
  import Menu from '../menu/index.vue';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-sider');
      const { getAppConfig } = useAppStore();
      return () => (
        <Layout.Sider class={prefixCls} v-model:collapsed={getAppConfig.collapsed}>
          <div class="app-login"></div>
          <ScrollContainer>
            <Menu></Menu>
          </ScrollContainer>
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less">
  @prefixCls: ~'@{namespace}-layout-sider';

  .@{prefixCls} {
    .app-login {
      height: 100px;
    }
    .scrollbar {
      height: calc(100vh - 100px);
    }
  }
</style>
