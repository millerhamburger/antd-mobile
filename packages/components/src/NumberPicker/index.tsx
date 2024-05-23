/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-23 15:13:18
 * @FilePath: /antd-mobile/packages/components/src/NumberPicker/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Stepper as AntdStepper } from 'antd-mobile'
import { StepperProps } from 'antd-mobile/es/components/stepper'
import { PreviewText } from '../preview-text'

export const NumberPicker: React.FC<StepperProps> = connect(
  AntdStepper,
  mapProps({}, (props, field) => {
    return props
  }),
  mapReadPretty(PreviewText.Input)
)

export default NumberPicker
