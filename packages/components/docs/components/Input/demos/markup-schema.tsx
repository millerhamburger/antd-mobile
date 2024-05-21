/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-21 19:28:20
 * @FilePath: /antd-mobile/packages/components/docs/components/Input/demos/markup-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
// @ts-ignore
import {
  Input,
  FormLayout,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily/antd-mobile'
import { Dialog } from 'antd-mobile'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

export default () => {
  const onSubmit = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <FormProvider form={form}>
      <FormLayout>
        <SchemaField>
          <SchemaField.String
            name="name"
            title="姓名"
            x-decorator="FormItem"
            x-decorator-props={{
              feedbackLayout: 'popover',
              tooltip: <span>请输入真实姓名</span>,
            }}
            x-validator={[{ required: true, message: '姓名不能为空' }]}
            x-component="Input"
            x-component-props={{
              placeholder: '请输入姓名',
              allowClear: true,
              maxLength: 2,
            }}
          />
          <SchemaField.String
            name="address"
            title="地址"
            x-decorator="FormItem"
            x-decorator-props={{
              feedbackLayout: 'terse',
            }}
            x-component="Input.TextArea"
            x-component-props={{
              placeholder: '请输入地址',
              maxLength: 1000,
              showCount: true,
              autoSize: true,
            }}
          />
        </SchemaField>
      </FormLayout>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
