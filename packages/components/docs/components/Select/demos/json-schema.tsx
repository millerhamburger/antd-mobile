/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-29 14:21:29
 * @FilePath: /antd-mobile/packages/components/docs/components/Select/demos/json-schema.tsx
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
  Select,
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
    Select,
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
            bb3skq8mwg6y: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'bb3skq8mwg6y',
              'x-component-props': {},
              type: 'void',
              'x-index': 0,
              properties: {
                ubuc01m21x9a: {
                  'x-component': 'Select',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'ubuc01m21x9a',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    placeholder: '请选择',
                    allowClear: true,
                    notFoundContent: '暂无数据',
                  },
                  enum: [
                    {
                      children: [],
                      label: '选项 1',
                      value: 'buq2js9n69e',
                    },
                    {
                      children: [],
                      label: '选项 2',
                      value: 'hc4iyg9qxzl',
                    },
                    {
                      children: [],
                      label: '选项 3',
                      value: 'or3hpopi9of',
                    },
                    {
                      children: [],
                      label: '选项 4',
                      value: '76fjxi369t5',
                    },
                    {
                      children: [],
                      label: '选项 5',
                      value: 'bjcoy566ps2',
                    },
                    {
                      children: [],
                      label: '选项 6',
                      value: '95nj7t4q9vt',
                    },
                    {
                      children: [],
                      label: '选项 7',
                      value: 'b9rwdrks7bk',
                    },
                    {
                      children: [],
                      label: '选项 8',
                      value: '5v8zl5pa7l9',
                    },
                    {
                      children: [],
                      label: '选项 9',
                      value: 'n6sk2l2tfxe',
                    },
                  ],
                  title: '选择框',
                  'x-index': 0,
                },
              },
            },
            lleo50j9sn5v: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'lleo50j9sn5v',
              'x-component-props': {},
              type: 'void',
              'x-index': 1,
              properties: {
                g9qt5uyap0n1: {
                  'x-component': 'Select',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'g9qt5uyap0n1',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {
                    mode: 'multiple',
                    placeholder: '请选择',
                    notFoundContent: '暂无数据',
                  },
                  default: ['buq2js9n69e', 'hc4iyg9qxzl'],
                  enum: [
                    {
                      children: [],
                      label: '选项 1',
                      value: 'buq2js9n69e',
                    },
                    {
                      children: [],
                      label: '选项 2',
                      value: 'hc4iyg9qxzl',
                    },
                    {
                      children: [],
                      label: '选项 3',
                      value: 'or3hpopi9of',
                    },
                    {
                      children: [],
                      label: '选项 4',
                      value: '76fjxi369t5',
                    },
                    {
                      children: [],
                      label: '选项 5',
                      value: 'bjcoy566ps2',
                    },
                    {
                      children: [],
                      label: '选项 6',
                      value: '95nj7t4q9vt',
                    },
                    {
                      children: [],
                      label: '选项 7',
                      value: 'b9rwdrks7bk',
                    },
                    {
                      children: [],
                      label: '选项 8',
                      value: '5v8zl5pa7l9',
                    },
                    {
                      children: [],
                      label: '选项 9',
                      value: 'n6sk2l2tfxe',
                    },
                  ],
                  title: '选择框',
                  'x-index': 0,
                },
              },
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
