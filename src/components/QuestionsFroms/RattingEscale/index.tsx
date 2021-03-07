import React from 'react'
import styles from './RatingEscale.module.css'

interface RatingEscaleProps {
  options: Array<any>
  onChange: (event: any) => void
}

const RatingEscale: React.FC<RatingEscaleProps> = ({
  options,
  onChange
}: RatingEscaleProps) => {
  return (
    <div className={styles.boxRating}>
      <div className={styles.ratingEscale}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="enps"
              id={(item.id as unknown) as string}
              value={item.value}
              required
              onClick={onChange}
            />
            <label htmlFor={(item.id as unknown) as string} key={item.id}>
              {item.value}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.descriptions}>
        <span className="initial">{options[0].description}</span>
        <span className="final">{options[10].description}</span>
      </div>
    </div>
  )
}

export default RatingEscale
