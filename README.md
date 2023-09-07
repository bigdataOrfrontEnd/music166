# 项目搭建

/// <reference types="react-scripts" /> 做了一个引用

# 项目配置:

- 配置项目的 icon
- 配置项目的标题
- 配置项目别名
- 配置 tsconfig.json---这是项目引入的时候会报错

# 项目搭建规范

- 集成 editcoconfig 配置----不同编辑器同一个风格
- 使用 prettier 工具---不同人写的代码风格一样
- 使用 ESLint 检测

# 路由配置

- discover

# 函数式组件在ts中的定义过程

```tsx
import React from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
  name?: string
}
const Discover: React.FC<IProps> = () => {
  return <div>Discover</div>
}
export default Discover
```

第二种写法

```tsx
import React from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
  name?: string
}
const Discover = (props: IProps) => {
  return <div>{props.name}</div>
}
export default Discover
```
