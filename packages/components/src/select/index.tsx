/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-27 16:26:32
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-29 14:27:52
 * @FilePath: /antd-mobile/packages/components/src/select/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import cls from 'classnames'
import {
  Popup as AntdPopup,
  CheckList as AntdCheckList,
  VirtualInput as AntdVirtualInput,
  ErrorBlock as AntdErrorBlock,
} from 'antd-mobile'
import { PopupProps as AntdPopupProps } from 'antd-mobile/es/components/popup'
import { VirtualInputRef } from 'antd-mobile/es/components/virtual-input'
import { usePrefixCls } from '../__builtins__'
import { connect, mapProps } from '@formily/react'

export interface SelectProps {
  value?: string[] | null
  onChange: (value: string[] | null) => void
  allowClear?: boolean
  placeholder?: string
  disabled?: boolean
  options?: { label: string; value: any }[]
  notFoundContent?: string
  mode?: 'multiple' | 'tags' | true
}

export const BaseSelect: FC<SelectProps> = (props) => {
  const {
    placeholder = '请选择',
    allowClear = false,
    disabled = false,
    value = null,
    onChange,
    options = [],
    notFoundContent = '暂无数据',
    mode,
  } = props

  const prefix = usePrefixCls('formily-select')

  const inputRef = useRef<VirtualInputRef>()

  const [visible, setVisible] = useState<boolean>(false)

  const onCancel = () => {
    inputRef.current.focus()
    setVisible(false)
  }

  const onConfirm = (value: string[] | null) => {
    onChange(value)
    setVisible(false)
  }

  const onShow = () => {
    setVisible(true)
  }

  const inputValue = useMemo(() => {
    if (!value) return ''
    const labels = []
    value.forEach((item) => {
      const result = options.find((option) => option.value === item)
      if (result) {
        labels.push(result.label)
      }
    })

    return labels.join(',')
  }, [value])

  const multiple = useMemo(() => {
    return ['multiple', 'tags'].findIndex((item) => item === mode) !== -1
  }, [mode])

  return (
    <>
      <div className={cls(prefix)}>
        <AntdVirtualInput
          placeholder={placeholder}
          value={inputValue}
          ref={inputRef}
          onClick={onShow}
          clearable={allowClear}
          disabled={disabled}
          onClear={() => {
            onChange(null)
          }}
        />
        <BasePopup
          visible={visible}
          value={value}
          placeholder={placeholder}
          options={options}
          onCancel={onCancel}
          onConfirm={onConfirm}
          notFoundContent={notFoundContent}
          multiple={multiple}
        ></BasePopup>
      </div>
    </>
  )
}

interface BasePopupProps extends AntdPopupProps {
  value: string[] | null
  placeholder: string
  options: { label: string; value: any }[]
  onCancel: () => void
  onConfirm: (value: string[] | null) => void
  notFoundContent?: string
  multiple?: boolean
}
const BasePopup: FC<BasePopupProps> = (props) => {
  const {
    visible,
    onConfirm,
    onCancel,
    placeholder,
    value,
    options,
    notFoundContent,
    multiple,
  } = props
  const prefix = usePrefixCls('picker')

  const [innerValue, setInnerValue] = useState<string[]>()

  useEffect(() => {
    setInnerValue(value ? [...value] : [])
  }, [value])

  const onOK = () => {
    onConfirm(innerValue.length === 0 ? null : [...innerValue])
  }

  const onChange = (value: string[]) => {
    setInnerValue(value)
  }

  return (
    <AntdPopup
      visible={visible}
      position="bottom"
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        height: '300px',
      }}
    >
      <div className={cls(prefix)}>
        <div className={cls(prefix + '-header')}>
          <a
            className={cls(prefix + '-header-button')}
            role="button"
            onClick={() => {
              onCancel()
              setInnerValue([...value])
            }}
          >
            取消
          </a>
          <div className={cls(prefix + '-header-title')}>{placeholder}</div>
          <a
            className={cls(prefix + '-header-button')}
            role="button"
            onClick={onOK}
          >
            确定
          </a>
        </div>
        <div className={cls(prefix + '-body')} style={{ overflowY: 'scroll' }}>
          {options.length === 0 ? (
            <AntdErrorBlock description={notFoundContent} status="empty" />
          ) : (
            <AntdCheckList
              value={innerValue}
              onChange={onChange}
              multiple={multiple}
            >
              {options.map((option) => (
                <AntdCheckList.Item key={option.value} value={option.value}>
                  {option.label}
                </AntdCheckList.Item>
              ))}
            </AntdCheckList>
          )}
        </div>
      </div>
    </AntdPopup>
  )
}

export const Select: FC<SelectProps> = connect(
  BaseSelect,
  mapProps({ dataSource: 'options' })
)

export default Select
