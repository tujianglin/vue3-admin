<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import { localeList } from '/@/settings/localeSetting';
  import { useAppStore } from '/@/store/modules/app';
  import { useLocale } from '/@/locales/useLocale';
  import Icon from '../../Icon';
  export default defineComponent({
    name: 'AppLocalPicker',
    setup() {
      const appStore = useAppStore();
      const { changeLocale } = useLocale();
      const selected = ref([appStore.getAppConfig.locale]);
      const toggleLocale = async (locale) => {
        selected.value = [locale];
        appStore.setTheme({ locale });
        changeLocale(locale);
      };
      const overlayRender = () => {
        return (
          <Menu v-model:selectedKeys={selected.value} onClick={({ key }) => toggleLocale(key)}>
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
