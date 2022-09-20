import { defineComponent, ref, watch } from 'vue';
import { ThemeColorPicker } from './components';
import { Drawer, Divider } from 'ant-design-vue';

export default defineComponent({
  props: {
    visible: Boolean,
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const visibleRef = ref(false);
    watch(
      () => props.visible,
      (nVal, oVal) => {
        if (nVal !== oVal) visibleRef.value = nVal;
      },
      {
        immediate: true,
        deep: true,
      },
    );
    watch(visibleRef, (val) => {
      emit('update:visible', val);
    });
    return () => (
      <Drawer v-model:visible={visibleRef.value} closable={false}>
        <Divider>主题颜色</Divider>
        <ThemeColorPicker></ThemeColorPicker>
      </Drawer>
    );
  },
});
