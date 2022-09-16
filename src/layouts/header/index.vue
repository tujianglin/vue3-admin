<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import Setting from '../setting/index.vue';
  export default defineComponent({
    setup() {
      return () => (
        <Layout.Header>
          <Setting></Setting>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped></style>
