<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { SettingOutlined, CheckOutlined } from '@ant-design/icons-vue';
  import { Drawer, Divider } from 'ant-design-vue';
  import { APP_PRESET_COLOR_LIST } from '/@/settings/designSetting';
  export default defineComponent({
    setup() {
      const prefixCls = 't-theme-color-picker';
      const visible = ref(false);
      const def = ref('red');
      const openDrawer = () => {
        visible.value = true;
      };
      const handleClick = (color) => {
        def.value = color;
      };
      return () => (
        <div>
          <SettingOutlined onClick={() => openDrawer()}></SettingOutlined>
          <Drawer v-model:visible={visible.value} closable={false}>
            <Divider>主题颜色</Divider>
            <div class={prefixCls}>
              {APP_PRESET_COLOR_LIST.map((color) => (
                <span
                  onClick={() => handleClick(color)}
                  class={[
                    `${prefixCls}__item`,
                    {
                      [`${prefixCls}__item--active`]: def.value === color,
                    },
                  ]}
                  style={{ background: color }}
                >
                  <CheckOutlined></CheckOutlined>
                </span>
              ))}
            </div>
          </Drawer>
        </div>
      );
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'t-theme-color-picker';

  .@{prefix-cls} {
    display: flex;
    justify-content: space-around;

    &__item {
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 2px;

      svg {
        display: none;
      }
      &--active {

        svg {
          display: inline-block;
          font-size: 12px;
          margin-bottom: 3px;
          fill: white;
        }
      }
    }
  }
</style>
