<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { Drawer } from 'ant-design-vue';
  export default defineComponent({
    setup() {
      const visible = ref(true);
      const openDrawer = () => {
        visible.value = true;
      };
      return () => (
        <div>
          <SettingOutlined onClick={() => openDrawer()}></SettingOutlined>
          <Drawer v-model:visible={visible.value} closable={false}></Drawer>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
