<script lang="tsx">
  import { defineComponent, reactive } from 'vue';
  import { Menu } from 'ant-design-vue';
  import { routes } from '/@/router';
  import { useGo } from '/@/hooks/web/usePage';
  import { listenerRouteChange } from '/@/router/logics';
  import MenuItem from './components/MenuItem.vue';

  interface MenuState {
    // 当前选中的菜单项 key 数组
    selectedKeys: string[];
  }

  export default defineComponent({
    setup() {
      const menuState = reactive<MenuState>({
        selectedKeys: [],
      });
      listenerRouteChange((route) => {
        console.log(route);
        menuState.selectedKeys = [route.path];
      });
      const go = useGo();
      const menuClick = (key) => {
        go(key);
      };
      return () => (
        <Menu
          mode={'inline'}
          onClick={({ key }) => menuClick(key)}
          v-model:selectedKeys={menuState.selectedKeys}
        >
          {routes.map((i) => (
            <MenuItem item={i}></MenuItem>
          ))}
        </Menu>
      );
    },
  });
</script>
<style lang="less" scoped></style>
