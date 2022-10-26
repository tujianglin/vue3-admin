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
          <div class="app-login">
            <img />
          </div>
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
      height: @header-height;
      padding: 10px 20px;

      img {
        width: 100%;
        height: 100%;
        background: skyblue;
      }
    }
    .scrollbar {
      height: calc(100vh - @header-height);
    }
  }
</style>
