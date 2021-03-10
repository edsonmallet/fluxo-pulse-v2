import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

interface IOptions {
  value: string
  label: string
}

interface SelectFieldProps {
  id: string
  label: string | object
  options: Array<IOptions>
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  onChange
}: SelectFieldProps) => {
  const classes = useStyles()
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          defaultValue=""
          id={id}
          name={id}
          onChange={onChange}
          className={classes.selectField}
        >
          {options.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export { SelectField }
