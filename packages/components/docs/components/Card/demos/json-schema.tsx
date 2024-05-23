/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 17:51:04
 * @FilePath: /antd-mobile/packages/components/docs/components/Radio/demos/json-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  FormItem,
  FormButtonGroup,
  Submit,
  Radio,
  Card,
  Form,
  Input,
  Checkbox,
  FormGrid,
  Switch,
  // @ts-ignore
} from '@formily/antd-mobile'
import { Dialog } from 'antd-mobile'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Radio,
    Card,
    Input,
    Checkbox,
    FormGrid,
    Switch,
  },
})

const ItemList = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
  {
    label: '选项四',
    value: '4',
  },
]

const form = createForm()
const schema = {
  type: 'object',
  properties: {
    h8mhtis24ak1: {
      'x-component': 'Card',
      'x-designable-id': 'h8mhtis24ak1',
      'x-component-props': {
        extra: '111',
        title: '基本信息',
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
            tvvq1pgj3pju: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'tvvq1pgj3pju',
              'x-component-props': {},
              type: 'void',
              'x-index': 0,
              'x-validator': [],
              properties: {
                seahhplccrp2: {
                  type: 'string',
                  title: '输入框',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    placeholder: '请输入',
                  },
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'seahhplccrp2',
                  'x-index': 0,
                },
              },
            },
            g8jxwy2bpj9f: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'g8jxwy2bpj9f',
              type: 'void',
              'x-index': 1,
              properties: {
                wscmug9326q9: {
                  default: false,
                  'x-component': 'Switch',
                  'x-decorator': 'FormItem',
                  'x-designable-id': 'wscmug9326q9',
                  'x-decorator-props': {},
                  'x-validator': [],
                  'x-component-props': {},
                  type: 'boolean',
                  title: '开关2',
                  'x-index': 0,
                },
              },
            },
            d22mwrrz7rra: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'd22mwrrz7rra',
              type: 'void',
              'x-index': 2,
              properties: {
                bjg7dhguuycr: {
                  type: 'string',
                  title: '多行输入',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input.TextArea',
                  'x-component-props': {
                    placeholder: '请输入',
                    maxLength: 1000,
                    showCount: true,
                  },
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'bjg7dhguuycr',
                  'x-index': 0,
                },
              },
            },
            jcsf6savxrgv: {
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'jcsf6savxrgv',
              type: 'void',
              'x-index': 3,
            },
          },
        },
        dhumdwcqvrnb: {
          type: 'void',
          'x-component': 'FormGrid',
          'x-component-props': {
            columnGap: 24,
          },
          'x-validator': [],
          'x-designable-id': 'dhumdwcqvrnb',
          properties: {
            wdvh1y943bxj: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'wdvh1y943bxj',
              properties: {
                yvmj50rk2ehc: {
                  type: 'Array<string | number>',
                  title: '复选框组',
                  'x-decorator': 'FormItem',
                  'x-component': 'Checkbox.Group',
                  enum: [
                    {
                      label: '选项1',
                      value: 1,
                    },
                    {
                      label: '选项2',
                      value: 2,
                    },
                  ],
                  'x-validator': [],
                  'x-decorator-props': {},
                  'x-designable-id': 'yvmj50rk2ehc',
                  'x-index': 0,
                },
              },
              'x-index': 0,
            },
            bia9w88ltljo: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'bia9w88ltljo',
              properties: {
                s2ayqfdzzu8b: {
                  type: 'string | number',
                  title: '单选框组',
                  'x-decorator': 'FormItem',
                  'x-component': 'Radio.Group',
                  enum: [
                    {
                      label: '选项1',
                      value: 1,
                    },
                    {
                      label: '选项2',
                      value: 2,
                    },
                  ],
                  'x-validator': [],
                  'x-component-props': {},
                  'x-decorator-props': {},
                  'x-designable-id': 's2ayqfdzzu8b',
                  'x-index': 0,
                },
              },
              'x-index': 1,
            },
            ktaau5i6jvrs: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'ktaau5i6jvrs',
              'x-index': 2,
            },
            j2gt3jsuorcp: {
              type: 'void',
              'x-component': 'FormGrid.GridColumn',
              'x-designable-id': 'j2gt3jsuorcp',
              'x-index': 3,
            },
          },
          'x-index': 1,
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
