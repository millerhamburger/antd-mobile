/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-21 17:18:09
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-22 15:31:45
 * @FilePath: /antd-mobile/packages/components/src/form-grid/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { observer } from '@formily/react'
import { IGridOptions } from '@formily/grid'

export interface IFormGridProps extends IGridOptions {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
}

export interface IGridColumnProps {
  gridSpan?: number
  style?: React.CSSProperties
}

type ComposedFormGrid = React.FC<IFormGridProps> & {
  GridColumn?: React.FC<IGridColumnProps>
}

export const FormGrid: ComposedFormGrid = observer(({ children }) => {
  return <>{children}</>
})

export const GridColumn: React.FC<IGridColumnProps> = observer(
  ({ children }) => {
    return <>{children}</>
  }
)

GridColumn.defaultProps = {
  gridSpan: 1,
}

FormGrid.GridColumn = GridColumn

export default FormGrid
