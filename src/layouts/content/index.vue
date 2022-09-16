<script lang="tsx">
  import { defineComponent, Transition, KeepAlive } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { RouterView } from 'vue-router';
  export default defineComponent({
    setup() {
      return () => (
        <Layout.Content>
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
<style lang="less" scoped></style>
