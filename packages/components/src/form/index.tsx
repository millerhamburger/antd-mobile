/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 15:54:34
 * @FilePath: /antd-mobile/packages/components/src/form/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { FormProvider, observer } from '@formily/react'
import { usePrefixCls } from '../__builtins__'
import cls from 'classnames'

interface FormProps {
  children: React.ReactNode
  form: any
}

export const Form: React.FC<FormProps> = observer(({ children, ...props }) => {
  const prefix = usePrefixCls('formily-form')

  return (
    <div className={cls(prefix)}>
      <FormProvider {...props}>{children}</FormProvider>
    </div>
  )
})

export default Form
