/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-21 19:14:50
 * @FilePath: /antd-mobile/packages/components/src/input/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Input as AntdInput, TextArea as AntdTextArea } from 'antd-mobile'
import { isValid } from '@formily/shared'
import { InputProps } from 'antd-mobile/es/components/input'
import { TextAreaProps } from 'antd-mobile/es/components/text-area'
import { PreviewText } from '../preview-text'

type ComposedInput = React.FC<InputProps> & {
  TextArea?: React.FC<TextAreaProps>
}

export const Input: ComposedInput = connect(
  AntdInput,
  mapProps((props: any) => {
    return {
      value: isValid(props.value) ? props.value : '',
      clearable: props.allowClear,
    }
  }),
  mapReadPretty(PreviewText.Input)
)

Input.TextArea = connect(
  AntdTextArea,
  mapProps((props) => {
    return {
      value: isValid(props.value) ? props.value : '',
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export default Input
