<script lang="tsx">
  import { defineComponent } from 'vue';
  import Icon from '/@/components/Icon';
  export default defineComponent({
    setup() {
      return () => (
        <span>
          <Icon icon={'ant-design:menu-fold-outlined'}></Icon>
        </span>
      );
    },
  });
</script>
<style lang="less" scoped></style>
