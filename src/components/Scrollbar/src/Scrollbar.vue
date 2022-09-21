<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'ScrollBar',
    emits: ['scroll'],
    setup(_, { slots, attrs, emit }) {
      const { prefixCls } = useDesign('scrollbar');
      const wrapRef = ref<HTMLDivElement | null>(null);

      const handleScroll = () => {
        emit('scroll', {
          scrollTop: wrapRef.value?.scrollTop,
        });
      };
      return () => (
        <div class={prefixCls}>
          <div
            ref={wrapRef}
            class={[`${prefixCls}__wrap`]}
            {...attrs}
            onScroll={() => handleScroll()}
          >
            {slots?.default?.()}
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less">
  @prefixCls: ~'@{namespace}-scrollbar';

  .@{prefixCls} {
    overflow: hidden;
    position: relative;
    height: 100%;

    &__wrap {
      overflow: auto;
    }
  }
</style>
