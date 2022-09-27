<script lang="tsx">
  import { defineComponent, onMounted } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';
  import { useLocale } from '/@/locales/useLocale';
  import { getMock } from '/@/api';

  export default defineComponent({
    setup() {
      const { getAntdLocale } = useLocale();
      onMounted(() => {
        getMock().then((res) => {
          console.log(res);
        });
      });

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
