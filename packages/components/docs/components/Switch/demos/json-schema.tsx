/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 16:18:24
 * @FilePath: /antd-mobile/packages/components/docs/components/Switch/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  Switch,
  FormItem,
  FormButtonGroup,
  Submit,
  Form,
  Card,
  FormGrid,
  // @ts-ignore
} from '@formily/antd-mobile'
import { Dialog } from 'antd-mobile'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Switch,
    FormItem,
    Card,
    FormGrid,
  },
})

const form = createForm()
const schema = {
  type: 'object',
  properties: {
    h8mhtis24ak1: {
      'x-component': 'Card',
      'x-designable-id': 'h8mhtis24ak1',
      'x-component-props': {
        extra: '111',
        title: 'JSON Schema 模式',
      },
      type: 'void',
      'x-index': 0,
      properties: {
        a0mn32qv1442: {
          'x-component': 'FormGrid',
          'x-designable-id': 'a0mn32qv1442',
          'x-component-props': {
            columnGap: 24,
          },
          type: 'void',
          'x-index': 0,
          properties: {
            switch1: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'tvvq1pgj3pju',
              type: 'void',
              'x-index': 0,
              'x-component-props': {},
              properties: {
                switch1: {
                  type: 'boolean',
                  title: '开关',
                  'x-decorator': 'FormItem',
                  'x-component': 'Switch',
                  default: false,
                  'x-validator': [],
                  'x-component-props': {},
                  'x-decorator-props': {},
                  'x-designable-id': 'j9inhemmta64',
                  'x-index': 0,
                },
              },
            },
            switch2: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'g8jxwy2bpj9f',
              type: 'void',
              'x-index': 1,
              properties: {
                switch2: {
                  type: 'boolean',
                  title: '开关2',
                  'x-decorator': 'FormItem',
                  'x-component': 'Switch',
                  default: false,
                  'x-validator': [],
                  'x-component-props': {},
                  'x-decorator-props': {},
                  'x-designable-id': 'wscmug9326q9',
                  'x-index': 0,
                },
              },
            },
            d22mwrrz7rra: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'd22mwrrz7rra',
              type: 'void',
              'x-index': 2,
            },
            jcsf6savxrgv: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'jcsf6savxrgv',
              type: 'void',
              'x-index': 3,
            },
          },
        },
      },
    },
  },
}

export default () => {
  const onSubmit = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <Form form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </Form>
  )
}
