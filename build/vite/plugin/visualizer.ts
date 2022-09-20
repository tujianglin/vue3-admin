import visualizer from 'rollup-plugin-visualizer';
import { PluginOption } from 'vite';

export function configVisualizerPlugin() {
  if (process.env.REPORT === 'true') {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption;
  }
}
