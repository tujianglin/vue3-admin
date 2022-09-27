<script lang="tsx">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Scrollbar } from '/@/components/Scrollbar';
  export default defineComponent({
    setup(_, { slots, attrs }) {
      const scrollbarRef = ref<HTMLDivElement | null>(null);
      onMounted(() => {
        console.log(scrollbarRef.value);
      });
      return () => (
        <Scrollbar ref={scrollbarRef} class="scroll-container" {...attrs}>
          {slots?.default?.()}
        </Scrollbar>
      );
    },
  });
</script>
<style lang="less" scoped>
  .scroll-container {
    width: 100%;
    height: 100%;
  }
</style>
