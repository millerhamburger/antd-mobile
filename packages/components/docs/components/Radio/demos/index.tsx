/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-21 19:53:16
 * @FilePath: /antd-mobile/packages/components/docs/components/Radio/demos/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import JsonSchema from './json-schema'
import MarkupSchema from './markup-schema'
import { List } from 'antd-mobile'

function Index(props) {
  return (
    <>
      <List header="Markup Schema 模式">
        <MarkupSchema />
      </List>

      <List header="JSON Schema 模式">
        <JsonSchema />
      </List>
    </>
  )
}

export default Index
