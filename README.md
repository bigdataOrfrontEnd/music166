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

# 使用 styled-components

使用第三方库的话他的类型

1. typescript内置DOM
2. 库内部已经有了类型声明
3. 自己写类型声明

# 对于公共样式可以使用混入的方式去做

1. 创建一个公用的theme

```
const theme={
  mixin:{
    wrapV1:{

    }
  }
}
```

2. 在app中引入
   import {ThemeProvider} from 'styled-components'
   <ThemeProvider theme={theme}
3. 使用
   ${props=>props.theme.mixin.wrapv1}

# 具体可见ambarb项目

useEffect(() => {
axios
.get('http://localhost:8080/workbetn')
.then((response) => {
setCardList(response.data.list)
console.log(response.data)
})
.catch((error) => {
console.error(error)
})
}, [])
