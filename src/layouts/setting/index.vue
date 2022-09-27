<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import SettingDrawer from './SettingDrawer';
  import Icon from '/@/components/Icon';
  export default defineComponent({
    setup() {
      const visible = ref(false);
      const openDrawer = () => {
        visible.value = true;
      };
      return () => (
        <>
          <Icon
            class="cursor-pointer h-[100%] px-2"
            icon={'ant-design:setting-outlined'}
            onClick={() => openDrawer()}
          ></Icon>
          <SettingDrawer v-model:visible={visible.value}></SettingDrawer>
        </>
      );
    },
  });
</script>
