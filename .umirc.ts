import { defineConfig } from 'umi';
import * as path from "path";

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:'./',
  outputPath:'output',
  hash:true,
  history:{
    type:"hash"
  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
  copy:[
    {
      from:'static',
      to:'static',
    },
  ],
  alias:{
    "@static":path.resolve(__dirname,'static'),
  },
  routes: [
    { path: '/', component: '@/pages/index',title:'首页' },
    { path: '/users', component: '@/pages/users/index.js',title:'用户' },
    { component:'@/pages/404'}
  ],
  fastRefresh: {},
});
