import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './Imageslist.module.css'

interface ImagesListProps {
  options: Array<any>
  onChange: (event: any) => void
}

const ImagesList: React.FC<ImagesListProps> = ({
  options,
  onChange
}: ImagesListProps) => {
  return (
    <div className={styles.boxRating}>
      <div className={styles.ImagesList}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="images"
              id={(item.id as unknown) as string}
              value={item.note}
              required
              onClick={onChange}
            />
            <label htmlFor={(item.id as unknown) as string} key={item.id}>
              <img src={item.value} alt={item.description} />
              {!!item.description && (
                <Typography variant="caption">{item.description}</Typography>
              )}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ImagesList
