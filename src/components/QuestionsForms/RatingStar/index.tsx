import React from 'react'
import styles from './RatingStar.module.css'

interface RatingStarProps {
  options: Array<any>
  onChange: (event: any) => void
}

const RatingStar: React.FC<RatingStarProps> = ({
  options,
  onChange
}: RatingStarProps) => {
  return (
    <div className={styles.boxRating}>
      <div className={styles.ratingStar}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="stars"
              id={(item.id as unknown) as string}
              value={item.note}
              required
              onClick={onChange}
            />
            <label htmlFor={(item.id as unknown) as string} key={item.id} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default RatingStar
