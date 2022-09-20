<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { SettingOutlined } from '@ant-design/icons-vue';
  import SettingDrawer from './SettingDrawer';
  export default defineComponent({
    setup() {
      const visible = ref(false);
      const openDrawer = () => {
        visible.value = true;
      };
      return () => (
        <div>
          <SettingOutlined onClick={() => openDrawer()}></SettingOutlined>
          <SettingDrawer v-model:visible={visible.value}></SettingDrawer>
        </div>
      );
    },
  });
</script>
<style lang="less"></style>
