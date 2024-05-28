/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-28 10:27:16
 * @FilePath: /antd-mobile/packages/components/docs/components/TimeRangePicker/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  Input,
  TimePicker,
  FormItem,
  FormButtonGroup,
  Submit,
  Card,
  FormGrid,
  // @ts-ignore
} from '@formily/antd-mobile'
import { Dialog } from 'antd-mobile'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    TimePicker,
    Card,
    FormGrid,
  },
})

const form = createForm()
const schema = {
  type: 'object',
  properties: {
    mkzd8vfs1k02: {
      'x-component': 'Card',
      'x-designable-id': 'mkzd8vfs1k02',
      'x-component-props': {
        title: 'JSON Schema 模式',
      },
      type: 'void',
      'x-index': 0,
      properties: {
        r7k6gfi7pgda: {
          'x-component': 'FormGrid',
          'x-designable-id': 'r7k6gfi7pgda',
          'x-component-props': {
            columnGap: 24,
          },
          type: 'void',
          'x-index': 0,
          properties: {
            stf0g7ijhled: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'stf0g7ijhled',
              'x-component-props': {},
              type: 'void',
              'x-index': 0,
              properties: {
                time: {
                  'x-component': 'TimePicker.RangePicker',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'oztqxktp4lqx',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    placeholder: ['开始时间', '结束时间'],
                    allowClear: true,
                  },
                  default: ['01:02:03', '05:02:03'],
                  type: 'string',
                  title: '时间',
                  'x-index': 0,
                  name: 'time',
                },
              },
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
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
