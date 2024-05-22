/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 15:09:34
 * @FilePath: /antd-mobile/packages/components/docs/components/FormGrid/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
// @ts-ignore
import { FormItem, Input, FormGrid, Card } from '@formily/antd-mobile'
import { FormProvider, createSchemaField } from '@formily/react'
import { createForm } from '@formily/core'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    FormGrid,
    Card,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    h8mhtis24ak1: {
      type: 'void',
      'x-component': 'Card',
      'x-component-props': {
        title: 'JSON Schema 模式',
        extra: '111',
      },
      'x-designable-id': 'h8mhtis24ak1',
      'x-index': 0,
      properties: {
        a0mn32qv1442: {
          type: 'void',
          'x-component': 'FormGrid',
          'x-component-props': {
            columnGap: 24,
          },
          'x-designable-id': 'a0mn32qv1442',
          'x-index': 0,
          properties: {
            tvvq1pgj3pju: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'tvvq1pgj3pju',
              'x-index': 0,
              properties: {
                fpmq35q1vvzh: {
                  type: 'string',
                  title: '姓名',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    placeholder: '请输入',
                    maxLength: 2,
                    allowClear: true,
                  },
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'fpmq35q1vvzh',
                  'x-index': 0,
                },
              },
            },
            g8jxwy2bpj9f: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'g8jxwy2bpj9f',
              'x-index': 1,
              properties: {
                fpmq35q1vvzh: {
                  type: 'string',
                  title: '地址',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input.TextArea',
                  'x-component-props': {
                    placeholder: '请输入',
                    allowClear: true,
                  },
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'fpmq35q1vvzh',
                  'x-index': 0,
                },
              },
            },
            d22mwrrz7rra: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'd22mwrrz7rra',
              'x-index': 2,
            },
            jcsf6savxrgv: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'jcsf6savxrgv',
              'x-index': 3,
            },
          },
        },
      },
    },
  },
}

export default () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
  )
}
