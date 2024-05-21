# Radio

> 单选框

## 基础用法

<code src="./demos/index.tsx"/>

## API

### Radio

| 属性名      | 类型                         | 描述               | 默认值     |
| ----------- | ---------------------------- | ------------------ | ---------- |
| layout      | `'vertical' \| 'horizontal'` | 布局方式           | `vertical` |
| layoutBlock | `boolean`                    | 是否渲染为块级元素 | `false`    |

其它参数参考：[https://mobile.ant.design/zh/components/Radio#Radio](https://mobile.ant.design/zh/components/Radio#Radio)

### Radio.Group

| 属性名      | 类型                         | 描述               | 默认值     |
| ----------- | ---------------------------- | ------------------ | ---------- |
| options     | `string[] \| IRadioOption[]` | 指定可选项         | -          |
| layout      | `'vertical' \| 'horizontal'` | 布局方式           | `vertical` |
| layoutBlock | `boolean`                    | 是否渲染为块级元素 | `false`    |

其它参数参考：[https://mobile.ant.design/zh/components/Radio#Radiogroup](https://mobile.ant.design/zh/components/Radio#Radiogroup)

### IRadioOption

```ts
export interface IRadioOption {
  label: string
  value: string
  disabled?: boolean
}
```
