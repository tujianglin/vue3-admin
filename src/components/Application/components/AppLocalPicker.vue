<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import Icon from '../../Icon';
  export default defineComponent({
    name: 'AppLocalPicker',
    setup() {
      const overlayRender = () => {
        return (
          <Menu>
            <Menu.Item>简体中文</Menu.Item>
            <Menu.Item>English</Menu.Item>
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
