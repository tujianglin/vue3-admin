<script lang="tsx">
  import { defineComponent } from 'vue';
  import Icon from '/@/components/Icon';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const { setTheme, getAppConfig } = useAppStore();
      /* 侧边栏展开合并 */
      const handleOutlined = () => {
        setTheme({ collapsed: !getAppConfig.collapsed });
      };
      return () => (
        <span
          class="cursor-pointer h-[100%] flex items-center px-2"
          onClick={() => handleOutlined()}
        >
          {getAppConfig.collapsed ? (
            <Icon icon={'ant-design:menu-unfold-outlined'} size="20"></Icon>
          ) : (
            <Icon icon={'ant-design:menu-fold-outlined'} size="20"></Icon>
          )}
        </span>
      );
    },
  });
</script>
<style lang="less" scoped></style>
