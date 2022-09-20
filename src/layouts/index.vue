<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useAppStore } from '/@/store/modules/app';
  import { useDesign } from '/@/hooks/web/useDesign';
  import LayoutContent from './content/index.vue';
  import LayoutSider from './sider/index.vue';
  import LayoutHeader from './header/index.vue';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout');
      const {} = useAppStore();
      return () => (
        <Layout class={prefixCls}>
          <LayoutSider></LayoutSider>
          <Layout>
            <LayoutHeader></LayoutHeader>
            <LayoutContent></LayoutContent>
          </Layout>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout';

  .@{prefix-cls} {
    height: 100vh;
  }
</style>
