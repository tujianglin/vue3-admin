<script lang="tsx">
  import { defineComponent } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';

  export default defineComponent({
    setup() {
      return () => (
        <div id="app">
          <ConfigProvider>
            <RouterView></RouterView>
          </ConfigProvider>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
