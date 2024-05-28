/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-27 16:26:32
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-28 10:01:31
 * @FilePath: /antd-mobile/packages/components/src/time-picker/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useMemo, useRef, useState } from 'react'
import cls from 'classnames'
import {
  Picker as AntdPicker,
  VirtualInput as AntdVirtualInput,
} from 'antd-mobile'
import { VirtualInputRef } from 'antd-mobile/es/components/virtual-input'
import { usePrefixCls } from '../__builtins__'
import baseColumns from './baseColumns'
import { getNow } from './util'

export interface TimePickerProps {
  value?: string
  onChange: (value: string | null) => void
  allowClear?: boolean
  placeholder?: string
  disabled?: boolean
  visible?: boolean
  onShow?: () => void
  onCancel?: () => void
}

export const TimePicker: FC<TimePickerProps> = (props) => {
  const {
    placeholder,
    allowClear,
    disabled,
    value,
    onChange,
    visible,
    onShow,
    onCancel,
  } = props

  const prefix = usePrefixCls('formily-time-picker')

  const inputRef = useRef<VirtualInputRef>()

  const [now, setNow] = useState<string[]>()

  const onClose = () => {
    inputRef.current.focus()
    onCancel()
  }

  const onConfirm = (value: string[]) => {
    onChange(value.join(':'))
    onCancel()
  }

  const pickerValue = useMemo(() => {
    if (!value) return now
    return value.split(':')
  }, [value, now])

  return (
    <>
      <div className={cls(prefix)}>
        <AntdVirtualInput
          placeholder={placeholder}
          value={value}
          ref={inputRef}
          onClick={() => {
            if (!disabled) {
              setNow(getNow())
              onShow()
            }
          }}
          clearable={allowClear}
          onClear={() => {
            onChange(null)
          }}
        />
        <AntdPicker
          visible={visible}
          columns={baseColumns}
          onConfirm={onConfirm}
          onClose={onClose}
          value={pickerValue}
          title={placeholder}
        />
      </div>
    </>
  )
}
