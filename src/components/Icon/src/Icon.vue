<script lang="tsx">
  import { computed, defineComponent, unref } from 'vue';
  import { Icon, disableCache } from '@iconify/vue';
  import { isString } from 'lodash-es';
  export default defineComponent({
    name: 'Icon',
    props: {
      /* icon 名称 */
      icon: String,
      /* icon 颜色 */
      color: String,
      /* icon 尺寸 */
      size: {
        type: [String, Number],
        default: 16,
      },
    },
    setup(props) {
      /* 禁用缓存 */
      disableCache('all');
      const getSize = computed(() => {
        const { size } = props;
        let s = size;
        if (isString(size)) {
          s = parseInt(size, 10);
        }
        return s;
      });
      return () => (
        <span class="anticon">
          <Icon icon={props.icon} color={props.color} height={unref(getSize)}></Icon>
        </span>
      );
    },
  });
</script>
<style lang="less" scoped></style>
