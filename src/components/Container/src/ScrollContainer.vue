<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Scrollbar } from '/@/components/Scrollbar';
  export default defineComponent({
    setup(_, { slots, attrs }) {
      return () => (
        <Scrollbar class="scroll-container" {...attrs}>
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
