import React from 'react'
import JsonSchema from './json-schema'
import MarkupSchema from './markup-schema'
import { List } from 'antd-mobile'

function Index(props) {
  return (
    <>
      <MarkupSchema />

      <JsonSchema />
    </>
  )
}

export default Index
