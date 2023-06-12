## react 18 external with cdn url

```ts
// 安装依赖
y add vite-plugin-externals -D

// 配置
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
  ],
});

// 在 index.html 中引入自己的cdn umd js (react.min.js / react-dom.min.js)
<script src="https://fh-static.bycsi.com/react.18.2.0.min-860f1d37ec17b010c94069b99a49ae7b.js"></script>
```
