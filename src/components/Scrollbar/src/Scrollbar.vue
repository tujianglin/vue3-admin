<script lang="tsx">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'ScrollBar',
    emits: ['scroll'],
    setup(_, { slots, emit }) {
      const wrapRef = ref<HTMLDivElement | null>(null);

      const handleScroll = () => {
        emit('scroll', {
          scrollTop: wrapRef.value?.scrollTop,
        });
      };
      return () => (
        <div class="scrollbar">
          <div ref={wrapRef} class="scrollbar__wrap" onScroll={() => handleScroll()}>
            {slots?.default?.()}
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less">
  .scrollbar {
    overflow: hidden;
    position: relative;
    height: 100%;

    &__wrap {
      height: 100%;
      overflow: auto;
    }
  }
</style>
