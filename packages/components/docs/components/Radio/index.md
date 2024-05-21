<!--
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-21 20:03:53
 * @FilePath: /antd-mobile/packages/components/docs/components/Radio/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Radio

> 单选框

## Basic

<code src="./demos/index.tsx" />

## API

### Radio

| Property name | Type                         | Description        | Default    |
| ------------- | ---------------------------- | ------------------ | ---------- |
| layout        | `'vertical' \| 'horizontal'` | 布局方式           | `vertical` |
| layoutBlock   | `boolean`                    | 是否渲染为块级元素 | `false`    |

其它参数参考：https://mobile.ant.design/components/Radio#Radio

### Radio.Group

| Property name | Type                         | Description        | Default    |
| ------------- | ---------------------------- | ------------------ | ---------- |
| options       | `string[] \| IRadioOption[]` | 指定可选项         | -          |
| layout        | `'vertical' \| 'horizontal'` | 布局方式           | `vertical` |
| layoutBlock   | `boolean`                    | 是否渲染为块级元素 | `false`    |

其它参数参考：https://mobile.ant.design/components/Radio#Radiogroup

### IRadioOption

```ts
export interface IRadioOption {
  label: string
  value: string
  disabled?: boolean
}
```
