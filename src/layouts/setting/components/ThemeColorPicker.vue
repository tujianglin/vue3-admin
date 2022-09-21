<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { APP_PRESET_COLOR_LIST, primaryColor } from '/@/settings/designSetting';
  import { CheckOutlined } from '@ant-design/icons-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useAppStore } from '/@/store/modules/app';

  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      const { prefixCls } = useDesign('theme-color-picker');

      const def = ref(appStore.appConfig.primaryColor || primaryColor);

      const handleClick = async (color) => {
        def.value = color;
        appStore.setThemeColor(color);
      };

      return () => (
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
      );
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-theme-color-picker';

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
