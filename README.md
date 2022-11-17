# Customized-radio-button

## Params

| **Param**    | **Type**            | **Desctiption**                              |
| ------------ | ------------------- | -------------------------------------------- |
| name         | string (required)   | Input name                                   |
| label        | string (required)   | Input label                                  |
| value        | any (required)      | Input value                                  |
| description? | string              | Description text that is showing under label |
| disabled?    | boolean             | Input disabled (default value is false)      |
| checked?     | boolean             | Input checked (default value is false)       |
| onChange     | Function (required) | onChange function                            |
| icon?        | JSX.Element         | Checked icon                                 |

## How to use

```tsx
<CustomizedRadioButton
  id={'NAME'}
  name={'NAME'}
  value={'VALUE'}
  label={'LABEL'}
  description={'DESCRIPTION'}
  disabled={true | false}
  checked={true | false}
  onChange={Function()}
  icon={JSX.Element}
/>
```

## Example

![image](https://user-images.githubusercontent.com/26706369/202345076-aee99ceb-aa0a-453d-b368-98e6277bce2d.png)

## Style Based on TailwindCSS

[Tailwind css](https://tailwindcss.com/)

## Contact

me@aaaram.com
