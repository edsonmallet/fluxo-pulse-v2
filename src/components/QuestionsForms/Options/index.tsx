import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './Options.module.css'

interface OptionsProps {
  options: Array<any>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const OptionsList: React.FC<OptionsProps> = ({
  options,
  onChange
}: OptionsProps) => {
  return (
    <div className={styles.boxRating}>
      <div className={styles.optionsList}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="options"
              id={(item.id as unknown) as string}
              value={item.note}
              required
              onChange={onChange}
            />
            <label htmlFor={(item.id as unknown) as string} key={item.id}>
              {!!item.value && <Typography>{item.value}</Typography>}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default OptionsList
