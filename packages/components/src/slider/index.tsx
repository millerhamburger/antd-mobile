/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-23 16:49:45
 * @FilePath: /antd-mobile/packages/components/src/input/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Slider as AntdSlider } from 'antd-mobile'
import { isValid } from '@formily/shared'
import { SliderProps } from 'antd-mobile/es/components/slider'
import { PreviewText } from '../preview-text'

export const Slider: React.FC<SliderProps> = connect(
  AntdSlider,
  mapProps((props) => {
    return {
      value: isValid(props.value) ? props.value : 0,
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export default Slider
