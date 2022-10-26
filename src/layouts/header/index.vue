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
          <div class="flex items-center">
            {/* 侧边栏展开&关闭 */}
            <MenuUnfold></MenuUnfold>
          </div>
          <div class="h-[100%] flex items-center">
            {/* 多语言 */}
            <AppLocalPicker></AppLocalPicker>
            {/* 设置 */}
            <Setting></Setting>
          </div>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped>
  @prefixCls: ~'@{namespace}-layout-header';

  .@{prefixCls} {
    height: @header-height;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    min-width: 300px;
  }
</style>
