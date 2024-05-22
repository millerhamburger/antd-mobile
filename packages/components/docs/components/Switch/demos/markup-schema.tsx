/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 16:16:56
 * @FilePath: /antd-mobile/packages/components/docs/components/Switch/demos/markup-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  Switch,
  FormItem,
  FormButtonGroup,
  Submit,
  Card,
  Form,
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

export default () => {
  const onSubmit = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <Form form={form}>
      <SchemaField>
        {/* @ts-ignore */}
        <SchemaField.Void
          x-component="Card"
          x-component-props={{
            extra: '111',
            title: '基本信息',
          }}
          x-index={0}
          name="h8mhtis24ak1"
        >
          {/* @ts-ignore */}
          <SchemaField.Void
            x-component="FormGrid"
            x-component-props={{ columnGap: 24 }}
            x-index={0}
            name="a0mn32qv1442"
          >
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={0}
              name="tvvq1pgj3pju"
            >
              <SchemaField.Boolean
                default={false}
                x-component="Switch"
                x-decorator="FormItem"
                x-validator={[]}
                title="开关"
                x-index={0}
                name="j9inhemmta64"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={1}
              name="g8jxwy2bpj9f"
            >
              <SchemaField.Boolean
                default={false}
                x-component="Switch"
                x-decorator="FormItem"
                x-validator={[]}
                title="开关2"
                x-index={0}
                name="wscmug9326q9"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={2}
              name="d22mwrrz7rra"
            />
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={3}
              name="jcsf6savxrgv"
            />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </Form>
  )
}
