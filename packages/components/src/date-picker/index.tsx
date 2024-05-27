import React, { useMemo, useRef, useState } from 'react'
import cls from 'classnames'
import moment from 'moment'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { DatePicker as AntdDatePicker, VirtualInput } from 'antd-mobile'
import { DatePickerProps as AntdDatePickerProps } from 'antd-mobile/es/components/date-picker'
import { VirtualInputRef } from 'antd-mobile/es/components/virtual-input'
import { usePrefixCls } from '../__builtins__'
import { PreviewText } from '../preview-text'
import { CloseCircleFill } from 'antd-mobile-icons'

const FORMAT_MAP = new Map([
  ['year', 'YYYY'],
  ['month', 'YYYY-MM'],
  ['day', 'YYYY-MM-DD'],
  ['second', 'YYYY-MM-DD HH:mm:ss'],
])

export interface BaseDatePickerProps extends AntdDatePickerProps {
  clearable?: boolean
  placeholder?: string
  inputStyle?: React.CSSProperties
  disabled?: boolean
}

// 日期选择器
export const BaseDatePicker: React.FC<BaseDatePickerProps> = (props) => {
  const {
    clearable,
    placeholder = '请选择',
    inputStyle,
    disabled = false,
    ...pickerProps
  } = props

  const prefix = usePrefixCls('formily-date-picker')
  const inputRef = useRef<VirtualInputRef>()

  const [visible, setVisible] = useState(false)

  const inputValue = useMemo(() => {
    const { value, precision } = pickerProps
    if (value) {
      return moment(value).format(FORMAT_MAP.get(precision))
    }
    return ''
  }, [pickerProps.value, pickerProps.precision])

  const onConfirm = (value: Date) => {
    pickerProps.onConfirm(value)
    setVisible(false)
  }

  const onClose = () => {
    setVisible(false)
    inputRef.current.focus()
  }

  return (
    <div className={cls(prefix)}>
      <VirtualInput
        placeholder={placeholder}
        value={inputValue}
        ref={inputRef}
        onClick={() => {
          if (!disabled) {
            setVisible(true)
          }
        }}
        clearable={clearable}
        onClear={() => {
          pickerProps.onConfirm(null)
        }}
        style={inputStyle}
      />
      <AntdDatePicker
        {...pickerProps}
        visible={visible}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    </div>
  )
}

type ComposedDatePicker = React.FC<BaseDatePickerProps> & {
  RangePicker?: React.FC<AntdDatePickerProps & RangePickerProps>
}

export const DatePicker: ComposedDatePicker = connect(
  BaseDatePicker,
  mapProps((props: any) => {
    const { picker = 'date', showTime, onChange, value } = props
    const precision: AntdDatePickerProps['precision'] = useMemo(() => {
      if (picker === 'date' && showTime) return 'second'
      if (picker === 'date') return 'day'
      return picker
    }, [picker])

    const onConfirm = (value: Date) => {
      onChange(value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : null)
    }

    const pickerValue = useMemo(() => {
      return value ? new Date(value) : null
    }, [value])

    return {
      ...props,
      precision,
      value: pickerValue,
      onConfirm,
    }
  }),
  mapReadPretty(PreviewText.DatePicker)
)

export const BaseDatePicker2: React.FC<
  BaseDatePickerProps & { visible?: boolean }
> = (props) => {
  const {
    clearable,
    placeholder = '请选择',
    inputStyle,
    visible = false,
    ...pickerProps
  } = props

  const prefix = usePrefixCls('formily-date-picker')
  const inputRef = useRef<VirtualInputRef>()

  const inputValue = useMemo(() => {
    const { value, precision } = pickerProps
    if (value) {
      return moment(value).format(FORMAT_MAP.get(precision))
    }
    return ''
  }, [pickerProps.value, pickerProps.precision])

  const onConfirm = (value: Date) => {
    pickerProps.onConfirm(value)
  }

  return (
    <div className={cls(prefix)}>
      <VirtualInput
        placeholder={placeholder}
        value={inputValue}
        ref={inputRef}
        clearable={clearable}
        onClear={() => {
          pickerProps.onConfirm(null)
        }}
        style={inputStyle}
      />
      <AntdDatePicker
        {...pickerProps}
        visible={visible}
        onConfirm={onConfirm}
      />
    </div>
  )
}

export interface RangePickerProps {
  placeholder?: string[]
  clearable?: boolean
  value: Date[] | null[]
  onChange: (value: string[] | null) => void
  inputStyle?: React.CSSProperties[]
  disabled?: boolean
}

export const DateRangePicker: React.FC<AntdDatePickerProps & RangePickerProps> =
  (props) => {
    const {
      onChange,
      placeholder = ['开始日期', '结束日期'],
      value = null,
      clearable,
      inputStyle = [null, null],
      disabled = false,
      ...baseProps
    } = props

    const [startValue, setStartValue] = useState<Date | null>(null)

    const [startOpen, setStartOpen] = useState(false)
    const [endOpen, setEndOpen] = useState(false)

    const onStartConfirm = (selected: Date) => {
      setStartValue(selected)
      setStartOpen(false)
      setEndOpen(true)
    }

    const onEndConfirm = (selected: Date) => {
      onChange(
        [startValue, selected].map((item) =>
          moment(item).format('YYYY-MM-DD HH:mm:ss')
        )
      )
      setEndOpen(false)
    }

    const onCancel = () => {
      setStartValue(null)
      setStartOpen(false)
      setEndOpen(false)
    }

    const startProps: BaseDatePickerProps = {
      ...baseProps,
      placeholder: placeholder[0],
      title: placeholder[0],
      value: value ? value[0] : null,
      onConfirm: onStartConfirm,
      clearable: false,
      inputStyle: inputStyle[0],
      onCancel,
    }

    const endProps: BaseDatePickerProps = {
      ...baseProps,
      placeholder: placeholder[1],
      title: placeholder[1],
      value: value ? value[1] : null,
      onConfirm: onEndConfirm,
      clearable: false,
      inputStyle: inputStyle[1],
      onCancel,
    }
    return (
      <div className={cls(usePrefixCls('formily-date-range-picker'))}>
        <div
          className={cls(usePrefixCls('formily-date-range-picker-content'))}
          onClick={() => {
            if (!disabled) {
              setStartOpen(true)
            }
          }}
        >
          <BaseDatePicker2
            {...startProps}
            disabled
            visible={startOpen}
          ></BaseDatePicker2>
          <BaseDatePicker2
            {...endProps}
            disabled
            visible={endOpen}
          ></BaseDatePicker2>
        </div>
        {clearable && value && (
          <CloseCircleFill
            onClick={() => {
              onChange(null)
            }}
          />
        )}
      </div>
    )
  }

DatePicker.RangePicker = connect(
  DateRangePicker,
  mapProps((props: any) => {
    const { picker = 'date', showTime, value } = props
    const precision: AntdDatePickerProps['precision'] = useMemo(() => {
      if (picker === 'date' && showTime) return 'second'
      if (picker === 'date') return 'day'
      return picker
    }, [picker])

    const pickerValue = useMemo(() => {
      return value ? value.map((item) => new Date(item)) : null
    }, [value])

    return {
      ...props,
      precision,
      value: pickerValue,
    }
  }),
  mapReadPretty(PreviewText.DatePicker)
)

export default DatePicker
