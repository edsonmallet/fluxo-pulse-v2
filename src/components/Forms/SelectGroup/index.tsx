import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select
} from '@material-ui/core'
import useStyles from './styles'

interface IGroups {
  id: number | string
  name: string
  departments: Array<IDepartments>
}

interface IDepartments {
  id: number | string
  name: string
}

interface SelectGroupProps {
  id: string
  label: string | object
  options: Array<IGroups>
  onChange: (event: any) => void
}

const renderSelectGroup = (group: IGroups) => {
  const items = group.departments.map(depto => {
    return (
      <MenuItem key={depto.id} value={depto.id}>
        {depto.name}
      </MenuItem>
    )
  })
  return [<ListSubheader>{group.name}</ListSubheader>, items]
}
const SelectGroup: React.FC<SelectGroupProps> = ({
  id,
  label,
  options,
  onChange
}: SelectGroupProps) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        defaultValue=""
        id={id}
        name={id}
        onChange={onChange}
        className={classes.selectField}
      >
        {options?.map(group => renderSelectGroup(group))}
      </Select>
    </FormControl>
  )
}

export { SelectGroup }
