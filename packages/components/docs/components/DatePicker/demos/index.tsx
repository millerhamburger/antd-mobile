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

      <JsonSchema />
    </>
  )
}

export default Index
