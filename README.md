# nanotube

### 项目安装依赖
```
npm install
```

### 开发环境
```
npm run serve
```

### 生产构建
```
npm run build
```

## 开发说明

#### 代理

> 文件位置：`build/webpack.dev.js`

```js
proxy: {
    '/api': {
      target: proxyUrl,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
},
// mock服务 模拟server数据
after: require('../mock/mock-server')
```

#### mock

> mock模板数据存放位置： `mock/templates/`下

#### api

> 项目所有api文件存放位置： `src/api`

#### components

> 存放公共 组件

#### views

> 存放页面级别的组件

#### utils

> 实用性工具存放位置

### 命名规则

- 组件命名必须驼峰
- js文件命名全小写（可以蛇形：get_str.js）
