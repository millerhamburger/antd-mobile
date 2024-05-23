/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-23 16:03:50
 * @FilePath: /antd-mobile/packages/components/docs/components/Rate/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  FormButtonGroup,
  Submit,
  FormItem,
  Card,
  FormGrid,
  Form,
  Rate,
  // @ts-ignore
} from '@formily/antd-mobile'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Dialog } from 'antd-mobile'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Card,
    FormGrid,
    Rate,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    mkzd8vfs1k02: {
      type: 'void',
      'x-component': 'Card',
      'x-component-props': {
        title: 'JSON Schema 模式',
      },
      'x-designable-id': 'mkzd8vfs1k02',
      properties: {
        r7k6gfi7pgda: {
          type: 'void',
          'x-component': 'FormGrid',
          'x-component-props': {
            columnGap: 24,
          },
          'x-designable-id': 'r7k6gfi7pgda',
          properties: {
            stf0g7ijhled: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'stf0g7ijhled',
              properties: {
                j03wgi2bg4jj: {
                  type: 'number',
                  title: '评分器',
                  'x-decorator': 'FormItem',
                  'x-component': 'Rate',
                  'x-component-props': {
                    allowHalf: true,
                    count: 5,
                    allowClear: true,
                  },
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'j03wgi2bg4jj',
                  default: 20,
                  'x-index': 0,
                },
              },
              'x-index': 0,
            },
            pm0z5ua75x6p: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'pm0z5ua75x6p',
              'x-index': 1,
            },
            ra4z5gbushos: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'ra4z5gbushos',
              'x-index': 2,
            },
            b3jim3jv6gjx: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'b3jim3jv6gjx',
              'x-index': 3,
            },
          },
          'x-index': 0,
        },
      },
      'x-index': 0,
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
