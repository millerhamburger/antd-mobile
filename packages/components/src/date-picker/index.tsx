import React, { useMemo, useRef, useState } from 'react'
import cls from 'classnames'
import union from 'lodash/union'
import moment from 'moment'
import { connect, mapReadPretty } from '@formily/react'
import { DatePicker as AntdDatePicker, VirtualInput } from 'antd-mobile'
import { CloseCircleFill } from 'antd-mobile-icons'
import { DatePickerProps as AntdDatePickerProps } from 'antd-mobile/es/components/date-picker'

import QuarterDatePicker from './quarter-picker'
import { VirtualInputRef } from 'antd-mobile/es/components/virtual-input'
import { formatMomentValue, momentable, usePrefixCls } from '../__builtins__'
import { PreviewText } from '../preview-text'
type PickerMode = 'date' | 'year' | 'month'

export type IDatePickerProps = {
  placeholder?: string
  clearable?: boolean
  picker?: PickerMode
  showTime?: boolean
  showNoe?: boolean
  value: string | null
  onChange: (value: string | null) => void
  style?: React.CSSProperties
}

export type RangePickerProps = {}

type ComposedDatePicker = React.FC<IDatePickerProps> & {
  RangePicker?: React.FC<RangePickerProps>
}

// const mapDateFormat = function <T>() {
//   const getDefaultFormat = (props: IDatePickerProps<T>) => {
//     const picker = props.picker
//     if (picker === 'month') {
//       return 'YYYY-MM'
//     } else if (picker === 'year') {
//       return 'YYYY'
//     }
//     return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
//   }
//   return (props: any): IDatePickerProps<T> => {
//     const format = props['format'] || getDefaultFormat(props)
//     const onChange = props.onChange
//     return {
//       ...props,
//       format: format,
//       value: momentable(props.value, format === 'gggg-wo' ? 'gggg-ww' : format),
//       onChange: (value: Date) => {
//         if (onChange) {
//           onChange(formatMomentValue(value, format))
//         }
//       },
//     } as IDatePickerProps<T>
//   }
// }

const map = new Map([
  ['year', 'YYYY'],
  ['month', 'YYYY-MM'],
  ['date', 'YYYY-MM-DD'],
])

// 日期选择器
export const BaseDatePicker: React.FC<IDatePickerProps> = (props) => {
  const prefix = usePrefixCls('formily-date-picker')
  const {
    onChange,
    placeholder,
    value,
    clearable,
    style,
    picker = 'date',
    showTime,
  } = props
  const inputRef = useRef<VirtualInputRef>()

  const [visible, setVisible] = useState(false)

  const renderDatePicker = () => {
    const pickerValue = value ? new Date(value) : null

    const precision: AntdDatePickerProps['precision'] = useMemo(() => {
      if (picker === 'date' && showTime) return 'second'
      if (picker === 'date') return 'day'
      return picker
    }, [picker])

    const onConfirm = (value: Date) => {
      onChange(value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : null)
    }

    const props = {
      precision,
      visible,
      value: pickerValue,
      onClose: () => {
        setVisible(false)
        inputRef.current.focus()
      },
      onConfirm: onConfirm,
    }

    return <AntdDatePicker {...props} />
  }

  const inputValue = useMemo(() => {
    return value
      ? moment(value).format(map.get(picker) || 'YYYY-MM-DD HH:mm:ss')
      : ''
  }, [value])

  return (
    <div className={cls(prefix)}>
      <VirtualInput
        placeholder={placeholder}
        value={inputValue}
        ref={inputRef}
        onClick={() => {
          setVisible(true)
        }}
        clearable={clearable}
        onClear={() => {
          onChange(null)
        }}
        style={style}
      />
      {renderDatePicker()}
    </div>
  )
}

export const DatePicker: ComposedDatePicker = connect(
  BaseDatePicker,
  mapReadPretty(PreviewText.DatePicker)
)

//  DatePicker.RangePicker = connect(
//   AntdDatePicker.RangePicker,
//   mapProps(mapDateFormat()),
//   mapReadPretty(PreviewText.DateRangePicker)
//  )

export default DatePicker
