<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  export default defineComponent({
    setup() {
      const { t } = useI18n();
      return () => (
        <Button type={'primary'}>
          {'哈哈'}
          {t('layout.header.home')}
        </Button>
      );
    },
  });
</script>
<style lang="less" scoped></style>
