<script lang="tsx">
  import { defineComponent } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';
  import { useLocale } from '/@/locales/useLocale';

  export default defineComponent({
    setup() {
      const { getAntdLocale } = useLocale();

      return () => (
        <div id="app">
          <ConfigProvider locale={getAntdLocale.value}>
            <RouterView></RouterView>
          </ConfigProvider>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
