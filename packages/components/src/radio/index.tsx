import { DataField } from '@formily/core'
import { connect, mapProps, observer, useField } from '@formily/react'
import React, { FunctionComponent } from 'react'
import { Radio as AntdRadio, Space } from 'antd-mobile'
import { RadioProps, RadioGroupProps } from 'antd-mobile/es/components/radio'
import { useFormLayout } from '../form-layout'

export interface IRadioOption {
  label: string
  value: string
  disabled?: boolean
}

interface Props {
  options?: string[] | IRadioOption[]
  layout?: 'vertical' | 'horizontal'
  layoutBlock?: boolean
}

export interface IRadioProps extends Props, RadioProps {}

export interface IRadioGroupProps extends Props, RadioGroupProps {}

type ComposedRadio = React.FC<IRadioProps> & {
  Group?: React.FC<IRadioGroupProps>
  __ANTD_MOBILE_Radio?: boolean
}

const isRadio = (node: any) => {
  return (
    React.isValidElement(node) &&
    (node.type as FunctionComponent).displayName.indexOf('Radio') > -1
  )
}

export const BaseRadio: React.FC<IRadioProps> = ({
  children,
  options,
  ...props
}) => {
  const layout = useFormLayout()
  const field = useField<DataField>()

  const dataSource = field?.dataSource?.length
    ? field.dataSource
    : options?.length
    ? options
    : []

  if (children) {
    //线jsx模式
    if (Array.isArray(children)) {
      return <>{children}</>
    }
    return !isRadio(children) ? (
      <AntdRadio {...props}>{children}</AntdRadio>
    ) : (
      (children as any)
    )
  }

  if (dataSource.length === 0) {
    return <AntdRadio {...props}>{field?.title || props.value}</AntdRadio>
  }

  return (
    <Space
      // direction={props.layout ?? layout.layout ?? 'vertical'}
      // block={props.layoutBlock}
      wrap={true}
    >
      {dataSource.map((item) => {
        const option =
          typeof item === 'string' ? { label: item, value: item } : item
        return (
          <AntdRadio
            {...props}
            disabled={option.disabled}
            value={option.value}
            key={option.value}
          >
            {option.label}
          </AntdRadio>
        )
      })}
    </Space>
  )
}

BaseRadio.defaultProps = {
  block: true,
}

export const RadioGroup: React.FC<IRadioGroupProps> = observer(
  ({ value, defaultValue, disabled, onChange, ...props }) => {
    return (
      <AntdRadio.Group
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
      >
        <BaseRadio {...props} />
      </AntdRadio.Group>
    )
  }
)
export const Radio: ComposedRadio = connect(BaseRadio, mapProps({}))

Radio.displayName = 'Radio'
Radio.__ANTD_MOBILE_Radio = true
Radio.Group = RadioGroup
Radio.Group.displayName = 'Radio.Group'

export default Radio
