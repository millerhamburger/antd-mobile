/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-23 15:09:23
 * @FilePath: /antd-mobile/packages/components/docs/components/NumberPicker/demos/markup-schema.tsx
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
  NumberPicker,
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
    NumberPicker,
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
          x-component-props={{ title: 'Markup Schema 模式' }}
          x-index={0}
          name="mkzd8vfs1k02"
        >
          {/* @ts-ignore */}
          <SchemaField.Void
            x-component="FormGrid"
            x-component-props={{ columnGap: 24 }}
            x-index={0}
            name="r7k6gfi7pgda"
          >
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={0}
              name="stf0g7ijhled"
            >
              {/* @ts-ignore */}
              <SchemaField.Number
                title="数字输入"
                x-decorator="FormItem"
                x-component="NumberPicker"
                x-component-props={{
                  placeholder: '请输入数字',
                  max: 100,
                  min: 10,
                  step: 10,
                }}
                x-validator={[]}
                x-index={0}
                name="j03wgi2bg4jj"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={1}
              name="pm0z5ua75x6p"
            />
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={2}
              name="ra4z5gbushos"
            />
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={3}
              name="b3jim3jv6gjx"
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
