<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import { localeList } from '/@/settings/localeSetting';
  import { useAppStore } from '/@/store/modules/app';
  import Icon from '../../Icon';
  export default defineComponent({
    name: 'AppLocalPicker',
    setup() {
      const appStore = useAppStore();
      const selected = ref(['zh_CN']);
      const handleClick = (key) => {
        selected.value = [key];
        appStore.setTheme({ locale: key });
      };
      const overlayRender = () => {
        return (
          <Menu v-model:selectedKeys={selected.value} onClick={({ key }) => handleClick(key)}>
            {localeList.map((i) => (
              <Menu.Item key={i.key}>{i.value}</Menu.Item>
            ))}
          </Menu>
        );
      };
      return () => (
        <Dropdown
          placement={'bottomRight'}
          trigger={'click'}
          v-slots={{
            overlay: () => overlayRender(),
          }}
        >
          <Icon icon={'ion:language-outline'} class="cursor-pointer"></Icon>
        </Dropdown>
      );
    },
  });
</script>
<style lang="less" scoped></style>
