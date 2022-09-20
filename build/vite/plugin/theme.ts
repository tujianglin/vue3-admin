import { PluginOption } from 'vite';

import { viteThemePlugin, mixDarken, mixLighten, tinycolor } from 'vite-plugin-theme';
import { getThemeColors, generateColors } from '../../config/themeConfig';

export function configThemePlugin() {
  const colors = generateColors({
    mixDarken,
    mixLighten,
    tinycolor,
  });
  return [
    viteThemePlugin({
      colorVariables: [...getThemeColors(), ...colors],
    }),
  ] as PluginOption[];
}
