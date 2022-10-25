<script lang="tsx">
  import { defineComponent, ref, watchEffect } from 'vue';
  import { Breadcrumb } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useRouter } from 'vue-router';
  import { routes } from '/@/router';
  import { AppRouteRecordRaw } from '/#/router';

  const fn = (tree, cb: Fn) => {
    const visitedSet = new Set();
    const list = [...tree];
    const path: any = [];
    while (list.length) {
      const node = list[0];
      if (visitedSet.has(node)) {
      } else {
        visitedSet.add(node);
        node.childern && list.unshift(...node.children);
        path.push(node);
        if (cb(node)) {
          return path;
        }
      }
    }
    return null;
  };

  const loop = (menus: AppRouteRecordRaw[], parent: string) => {
    const metched: any[] = [];
    menus.forEach((i) => {
      if (parent.includes(i.path)) {
        metched.push({
          ...i,
          name: i.meta?.title || i.name,
        });
      }
      if (i.children?.length) {
        metched.push(...loop(i.children, parent));
      }
    });
    return metched;
  };
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-breadcrumb');
      const { currentRoute } = useRouter();
      const routerList = ref<any>([]);

      watchEffect(async () => {
        const { matched, path } = currentRoute.value;
        const menuList = fn(matched, (n) => n.path === path || n.redirect === path);
        const parent = menuList.map((i) => i.path);
        const filterMenus = routes.filter((i) => i.path === parent[0]);
        const aaa = loop(filterMenus, parent);
        routerList.value = aaa;
      });
      return () => (
        <Breadcrumb
          class={prefixCls}
          routes={routerList.value}
          v-slots={{
            itemRender: ({ route }) => <span>{route.name}</span>,
          }}
        ></Breadcrumb>
      );
    },
  });
</script>
<style lang="less">
  @prefixCls: ~'@{namespace}-layout-breadcrumb';

  .@{prefixCls} {
    height: 100%;
    padding: 0 8px;
    display: flex;
  }
</style>
