/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-27 13:36:00
 * @FilePath: /antd-mobile/packages/components/docs/components/DateRangePicker/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  Input,
  DatePicker,
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
    DatePicker,
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
                year: {
                  'x-component': 'DatePicker.RangePicker',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'oztqxktp4lqx',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    showNow: true,
                    showTime: true,
                    picker: 'year',
                    placeholder: ['开始年', '结束年'],
                    clearable: true,
                  },
                  type: 'string',
                  title: '年',
                  'x-index': 0,
                  name: 'year',
                },
              },
            },
            pm0z5ua75x6p: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'pm0z5ua75x6p',
              type: 'void',
              'x-index': 1,
              properties: {
                month: {
                  'x-component': 'DatePicker.RangePicker',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'qja7jqdi8gq4',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    showNow: true,
                    showTime: true,
                    picker: 'month',
                    placeholder: '请选择月',
                  },
                  type: 'string',
                  title: '月',
                  'x-index': 0,
                  name: 'month',
                },
              },
            },
            ra4z5gbushos: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'ra4z5gbushos',
              type: 'void',
              'x-index': 2,
              properties: {
                date: {
                  'x-component': 'DatePicker.RangePicker',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'jbcqj23so6d7',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    showNow: true,
                    showTime: false,
                    placeholder: '请选择日',
                  },
                  type: 'string',
                  title: '日',
                  'x-index': 0,
                  name: 'date',
                },
              },
            },
            b3jim3jv6gjx: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'b3jim3jv6gjx',
              type: 'void',
              'x-index': 3,
              properties: {
                datetime: {
                  'x-component': 'DatePicker.RangePicker',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 't5airqach747',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    showTime: true,
                    placeholder: '请选择时间',
                  },
                  type: 'string',
                  title: '时间',
                  'x-index': 0,
                  name: 'datetime',
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
