/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-23 16:17:19
 * @FilePath: /antd-mobile/packages/components/src/input/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Rate as AntdRate } from 'antd-mobile'
import { isValid } from '@formily/shared'
import { RateProps } from 'antd-mobile/es/components/rate'
import { PreviewText } from '../preview-text'

export const Rate: React.FC<RateProps> = connect(
  AntdRate,
  mapProps((props) => {
    return {
      value: isValid(props.value) ? props.value : 0,
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export default Rate
