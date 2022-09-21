<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Scrollbar } from '/@/components/Scrollbar';
  import Menu from '../menu/index.vue';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-sider');

      return () => (
        <Layout.Sider class={prefixCls}>
          <div class="app-login"></div>
          {
            // <Scrollbar
            //   style={{ height: '300px' }}
            //   v-slots={{
            //     default: () => (
            //       <Menu mode={'inline'} onClick={({ key }) => menuClick(key)}>
            //         {routes.map((i) =>
            //           i.meta?.hideChildrenInMenu ? (
            //             <Menu.Item key={i.path}>{i.name}</Menu.Item>
            //           ) : (
            //             <Menu.SubMenu title={i.name}>
            //               {i.children?.map((j) => (
            //                 <Menu.Item key={j.path}>{j.name}</Menu.Item>
            //               ))}
            //             </Menu.SubMenu>
            //           ),
            //         )}
            //       </Menu>
            //     ),
            //   }}
            // ></Scrollbar>
          }
          <Scrollbar
            style={{ height: '300px' }}
            v-slots={{
              default: () => <Menu></Menu>,
            }}
          ></Scrollbar>
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
