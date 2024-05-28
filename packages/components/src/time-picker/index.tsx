/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-27 16:26:32
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-28 10:34:17
 * @FilePath: /antd-mobile/packages/components/src/time-picker/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useMemo, useState } from 'react'
import cls from 'classnames'
import { connect, mapProps } from '@formily/react'
import { usePrefixCls } from '../__builtins__'
import { CloseCircleFill } from 'antd-mobile-icons'
import { TimePicker as CustomTimePicker } from './base'

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

const baseTimePicker: FC<TimePickerProps> = (props) => {
  const [visible, setVisible] = useState(false)

  const onShow = () => {
    setVisible(true)
  }

  const onCancel = () => {
    setVisible(false)
  }

  return (
    <CustomTimePicker
      {...props}
      visible={visible}
      onShow={onShow}
      onCancel={onCancel}
    ></CustomTimePicker>
  )
}

export interface TimeRangePickerProps {
  value?: string[] | null
  onChange: (value: string[] | null) => void
  allowClear?: boolean
  placeholder: string[] | null
  disabled?: boolean
}

const baseTimeRangePicker: FC<TimeRangePickerProps> = (props) => {
  const prefix = usePrefixCls('formily-time-range-picker')
  const { value, placeholder, onChange, allowClear, disabled } = props

  const onShow = () => {
    setVisibleStart(true)
  }

  // 开始时间
  const [visibleStart, setVisibleStart] = useState(false)
  const [startValue, setStartValue] = useState('')

  const onStartCancel = () => {
    setVisibleStart(false)
  }

  const onStartChange = (value: string | null) => {
    setStartValue(value)
    setVisibleEnd(true)
  }

  const startProps = useMemo(() => {
    return {
      value: value ? value[0] : null,
      placeholder: placeholder ? placeholder[0] : null,
      disabled,
      allowClear: false,
    }
  }, [props])

  // 结束时间
  const [visibleEnd, setVisibleEnd] = useState(false)

  const onEndCancel = () => {
    setVisibleEnd(false)
  }

  const onEndChange = (value: string | null) => {
    setVisibleEnd(false)
    onChange([startValue, value])
  }

  const endProps = useMemo(() => {
    return {
      value: value ? value[1] : null,
      placeholder: placeholder ? placeholder[1] : null,
      disabled,
      allowClear: false,
    }
  }, [props])

  return (
    <div className={cls(prefix)}>
      <div className={cls(prefix + '-content')}>
        <CustomTimePicker
          {...startProps}
          visible={visibleStart}
          onChange={onStartChange}
          onShow={onShow}
          onCancel={onStartCancel}
        ></CustomTimePicker>
        <CustomTimePicker
          {...endProps}
          visible={visibleEnd}
          onChange={onEndChange}
          onShow={onShow}
          onCancel={onEndCancel}
        ></CustomTimePicker>
      </div>
      {value && allowClear && (
        <CloseCircleFill
          className={cls(prefix + '-clear')}
          onClick={() => {
            onChange(null)
          }}
        />
      )}
    </div>
  )
}

type ComposedTimePicker = React.FC<TimePickerProps> & {
  RangePicker?: React.FC<TimeRangePickerProps>
}

export const TimePicker: ComposedTimePicker = connect(
  baseTimePicker,
  mapProps({})
)

TimePicker.RangePicker = connect(baseTimeRangePicker, mapProps({}))

export default TimePicker
