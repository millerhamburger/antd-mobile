/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 18:59:51
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-24 09:57:37
 * @FilePath: /antd-mobile/packages/components/docs/components/TimeRangePicker/demos/markup-schema.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  TimeRangePicker,
  FormButtonGroup,
  FormItem,
  Submit,
  Card,
  FormGrid,
  // @ts-ignore
} from '@formily/antd-mobile'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import { Dialog } from 'antd-mobile'
import React from 'react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    TimeRangePicker,
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
    <FormProvider form={form}>
      <SchemaField>
        {/* @ts-ignore */}
        <SchemaField.Void
          x-component="Card"
          x-component-props={{ title: 'Markup Schema 模式' }}
          x-index={0}
          name="v906rxnxwqt1"
        >
          {/* @ts-ignore */}
          <SchemaField.Void
            x-component="FormGrid"
            x-component-props={{ columnGap: 24 }}
            x-index={0}
            name="bx5duxrv09ci"
          >
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={0}
              name="v5byionkfdtt"
            >
              {/* @ts-ignore */}
              <SchemaField.String
                title="年"
                x-decorator="FormItem"
                x-component="TimeRangePicker"
                x-validator={[]}
                x-component-props={{
                  picker: 'year',
                  showNow: true,
                  showTime: true,
                }}
                name="year"
                x-index={0}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={1}
              name="x614mcg99as3"
            >
              {/* @ts-ignore */}
              <SchemaField.String
                title="月"
                x-decorator="FormItem"
                x-component="TimeRangePicker"
                x-validator={[]}
                x-component-props={{
                  picker: 'month',
                  showNow: true,
                  showTime: true,
                }}
                name="month"
                x-index={0}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={2}
              name="dkfx355h1uam"
            >
              {/* @ts-ignore */}
              <SchemaField.String
                title="日"
                x-decorator="FormItem"
                x-component="TimeRangePicker"
                x-validator={[]}
                x-component-props={{ showNow: true, showTime: false }}
                name="date"
                x-index={0}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="FormGrid.GridColumn"
              x-index={3}
              name="ig61ozbe71ma"
            >
              {/* @ts-ignore */}
              <SchemaField.String
                title="时间"
                x-decorator="FormItem"
                x-component="TimeRangePicker"
                x-validator={[]}
                x-component-props={{ showNow: true, showTime: true }}
                name="datetime"
                x-index={0}
              />
            </SchemaField.Void>
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
