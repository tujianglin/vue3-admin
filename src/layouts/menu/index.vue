<script lang="tsx">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { Menu } from 'ant-design-vue';
  import { routes } from '/@/router';

  import MenuItem from './components/MenuItem.vue';
  export default defineComponent({
    setup() {
      const router = useRouter();
      const menuClick = (key) => {
        router.push(key);
      };
      return () => (
        <Menu mode={'inline'} onClick={({ key }) => menuClick(key)}>
          {routes.map((i) => (
            <MenuItem item={i}></MenuItem>
          ))}
        </Menu>
      );
    },
  });
</script>
<style lang="less" scoped></style>
