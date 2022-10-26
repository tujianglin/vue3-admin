<script lang="tsx">
  import { defineComponent, PropType } from 'vue';
  import { Menu } from 'ant-design-vue';
  import { AppRouteRecordRaw } from '/#/router';
  import Icon from '/@/components/Icon';
  const MenuItem = defineComponent({
    name: 'MenuItem',
    props: {
      item: {
        type: Object as PropType<AppRouteRecordRaw>,
        default: () => {},
      },
    },
    setup(props) {
      // 菜单是否有子菜单
      const menuHasChildren = (): boolean => {
        return (
          !props.item.meta?.hideChildrenInMenu &&
          Reflect.has(props.item, 'children') &&
          !!props.item.children &&
          props.item.children.length > 0
        );
      };
      return () => {
        const { item } = props;
        return (
          <>
            {menuHasChildren() ? (
              <Menu.SubMenu
                title={item.meta?.title}
                v-slots={{
                  icon: () => <Icon icon={item.meta?.icon}></Icon>,
                }}
              >
                {item.children?.map((i) => (
                  <MenuItem item={i}></MenuItem>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.path}
                v-slots={{
                  icon: () => <Icon icon={item.meta?.icon}></Icon>,
                }}
              >
                {item.meta?.title}
              </Menu.Item>
            )}
          </>
        );
      };
    },
  });
  export default MenuItem;
</script>
