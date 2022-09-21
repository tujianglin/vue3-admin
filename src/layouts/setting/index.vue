<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import SettingDrawer from './SettingDrawer';
  import Icon from '/@/components/Icon';
  import { useDesign } from '/@/hooks/web/useDesign';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('setting');
      const visible = ref(false);
      const openDrawer = () => {
        visible.value = true;
      };
      return () => (
        <div class={prefixCls}>
          <Icon
            class={`${prefixCls}-icon`}
            icon={'ant-design:setting-outlined'}
            onClick={() => openDrawer()}
          ></Icon>
          <SettingDrawer v-model:visible={visible.value}></SettingDrawer>
        </div>
      );
    },
  });
</script>
<style lang="less">
  @prefixCls: ~'@{namespace}-setting';
  .@{prefixCls} {
    &-icon {
      cursor: pointer;
    }
  }
</style>
