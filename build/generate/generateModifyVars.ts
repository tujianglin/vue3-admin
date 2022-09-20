import { getThemeVariables } from 'ant-design-vue/dist/theme';
import { resolve } from 'path';
import { primaryColor, generateAntColors } from '../config/themeConfig';

export function generateModifyVars() {
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];
  const primaryColorObj: Record<string, string> = {};
  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index];
  }
  const modifyVars = getThemeVariables();
  return {
    ...modifyVars,
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}";`,
    'primary-color': primary,
    ...primaryColorObj,
  };
}
