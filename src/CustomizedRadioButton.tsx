import React, { FC } from 'react'

interface Params {
  name: string
  label: string
  value: any
  description?: string
  disabled?: boolean
  checked?: boolean
  onChange: Function
  icon?: JSX.Element
}

export const CustomizedRadioButton: FC<Params> = ({
  name,
  label,
  value,
  description,
  disabled = false,
  checked = false,
  onChange,
  icon,
}) => {
  const onInputChange = () => {
    onChange && onChange()
  }

  return (
    <>
      <legend className="sr-only">{value}</legend>
      <div className="relative flex items-start w-full max-w-[262px] lg:max-w-auto">
        <div className="flex items-center transition h-full w-full absolute top-0 left-0">
          <input
            disabled={disabled}
            checked={checked}
            value={value}
            onChange={onInputChange}
            id={name}
            name={name}
            type="radio"
            className={`transition ease-in-out duration-200 focus:ring-offset-0 focus:ring-0 h-full w-full rounded-none !bg-transparent ${
              checked
                ? '!bg-[#64748b1f] !bg-none'
                : 'hover:!bg-[#64748b1f] cursor-pointer'
            }`}
          />
        </div>

        <div className="w-full h-full min-h-[50px] px-3 py-1">
          <label htmlFor="comments" className="text-sm font-medium text-black">
            {label}
          </label>
          <p
            id="comments-description"
            className="text-xs text-gray-400 leading-loose"
          >
            {description}
          </p>

          {checked && (icon ?? <div>✓</div>)}
        </div>
      </div>
    </>
  )
}
