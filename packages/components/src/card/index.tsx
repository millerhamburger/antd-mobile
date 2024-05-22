/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-22 09:34:32
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 13:35:10
 * @FilePath: /antd-mobile/packages/components/src/card/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import AntdCard from 'antd-mobile/es/components/card'
import { CardProps as AntdCardProps } from 'antd-mobile/es/components/card'
import { usePrefixCls } from '../__builtins__'
import cls from 'classnames'

export const Card: React.FC<AntdCardProps> = (props) => {
  const prefix = usePrefixCls('formily-card')
  return (
    <AntdCard
      {...props}
      title={<Title value={props.title}></Title>}
      className={cls(prefix, props.className)}
    ></AntdCard>
  )
}

interface TitleProps {
  value?: React.ReactNode
}
const Title: React.FC<TitleProps> = (props) => {
  const prefix = usePrefixCls('formily-card-title')
  return (
    <>
      <span className={cls(prefix + '-tag')}></span>
      {props.value}
    </>
  )
}

export default Card
