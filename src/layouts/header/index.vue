<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { AppLocalPicker } from '/@/components/Application';
  import MenuUnfold from './components/MenuUnfold.vue';
  import Setting from '../setting/index.vue';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-header');
      return () => (
        <Layout.Header class={prefixCls}>
          <MenuUnfold></MenuUnfold>
          <Setting></Setting>
          <AppLocalPicker></AppLocalPicker>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped>
  @prefixCls: ~'@{namespace}-layout-header';

  .@{prefixCls} {
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0;
  }
</style>
