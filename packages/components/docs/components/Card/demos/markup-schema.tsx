/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 13:51:25
 * @FilePath: /antd-mobile/packages/components/docs/components/Radio/demos/markup-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
// @ts-ignore
import {
  FormItem,
  FormButtonGroup,
  Submit,
  Radio,
  Card,
} from '@formily/antd-mobile'
import { Dialog } from 'antd-mobile'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Radio,
    Card,
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
    disabled: true,
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

export default () => {
  const onSubmit = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <FormProvider form={form}>
      <SchemaField>
        {/* @ts-ignore */}
        <SchemaField.Void
          x-component="Card"
          x-component-props={{
            title: 'Markup Schema 模式',
            extra: '111',
          }}
          x-index={0}
          name="h8mhtis24ak1"
        >
          <SchemaField.String
            name="items"
            title="单选框"
            x-decorator="FormItem"
            x-component="Radio.Group"
            enum={ItemList}
          />
        </SchemaField.Void>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
