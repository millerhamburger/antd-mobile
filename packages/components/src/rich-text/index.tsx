/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-28 14:50:12
 * @FilePath: /antd-mobile/packages/components/src/input/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC } from 'react'
import { connect, mapProps } from '@formily/react'
import { usePrefixCls } from '../__builtins__'
import cls from 'classnames'

export interface BaseRichTextProps {
  value?: string | null
  onChange: (value: string) => void
}

export const BaseRichText: FC<BaseRichTextProps> = (props) => {
  const prefix = usePrefixCls('rich-text')

  return (
    <div
      className={cls(prefix)}
      dangerouslySetInnerHTML={{ __html: props.value }}
    ></div>
  )
}

export const RichText: React.FC<BaseRichTextProps> = connect(
  BaseRichText,
  mapProps()
)

export default RichText
