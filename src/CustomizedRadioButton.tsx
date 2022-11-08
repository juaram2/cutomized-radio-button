import React, { FC } from 'react'
import '../styles/globals.css'

interface Params {
  label?: string
  description?: string
  disabled?: boolean
  onChange?: Function
  value?: any
  checked?: boolean
  name?: string
}

const CustomizedRadioButton: FC<Params> = ({
  label,
  description,
  disabled = false,
  onChange,
  value,
  checked = false,
  name,
}) => {
  const onInputChange = () => {
    onChange
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

          {/* {checked && (
            <CheckIcon
              color={COLOR_PRIMARY}
              width={16}
              height={16}
              className="absolute top-1/2 right-[16px] -translate-y-1/2"
            />
          )} */}
        </div>
      </div>
    </>
  )
}

export default CustomizedRadioButton
