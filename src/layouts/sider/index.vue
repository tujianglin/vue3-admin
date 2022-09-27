<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Scrollbar } from '/@/components/Scrollbar';
  import Menu from '../menu/index.vue';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-sider');
      const {} = useAppStore();
      const collapsed = ref(false);
      return () => (
        <Layout.Sider class={prefixCls} v-model:collapsed={collapsed.value}>
          <div class="app-login"></div>
          <Scrollbar style={{ height: '300px' }}>
            <Menu></Menu>
          </Scrollbar>
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less">
  @prefixCls: ~'@{namespace}-layout-sider';

  .@{prefixCls} {
  }
</style>
