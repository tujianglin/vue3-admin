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
        <div>
          <Icon
            class="cursor-pointer"
            icon={'ant-design:setting-outlined'}
            onClick={() => openDrawer()}
          ></Icon>
          <SettingDrawer v-model:visible={visible.value}></SettingDrawer>
        </div>
      );
    },
  });
</script>
