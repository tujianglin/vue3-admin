<script lang="tsx">
  import { defineComponent } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';
  import { primaryColor } from '/@/settings/designSetting';

  export default defineComponent({
    setup() {
      ConfigProvider.config({
        theme: {
          primaryColor,
        },
      });
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
