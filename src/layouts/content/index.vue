<script lang="tsx">
  import { defineComponent, Transition, KeepAlive } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { RouterView } from 'vue-router';
  import { useDesign } from '/@/hooks/web/useDesign';
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('layout-content');
      return () => (
        <Layout.Content class={prefixCls}>
          <RouterView>
            {({ Component, route }) =>
              Component && (
                <Transition name={'fade'} mode={'out-in'} appear>
                  {route.meta.keepAlive ? (
                    <KeepAlive>
                      <Component></Component>
                    </KeepAlive>
                  ) : (
                    <Component></Component>
                  )}
                </Transition>
              )
            }
          </RouterView>
        </Layout.Content>
      );
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls} {
    margin: 8px;
    padding: 8px;
    background: #fff;
  }
</style>
