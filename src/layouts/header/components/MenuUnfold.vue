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
        <span class="cursor-pointer" onClick={() => handleOutlined()}>
          {getAppConfig.collapsed ? (
            <Icon icon={'ant-design:menu-unfold-outlined'}></Icon>
          ) : (
            <Icon icon={'ant-design:menu-fold-outlined'}></Icon>
          )}
        </span>
      );
    },
  });
</script>
<style lang="less" scoped></style>
