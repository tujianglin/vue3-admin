<script lang="tsx">
  import { defineComponent, Transition, KeepAlive } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';

  export default defineComponent({
    setup() {
      return () => (
        <div id="app">
          <ConfigProvider>
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
          </ConfigProvider>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
