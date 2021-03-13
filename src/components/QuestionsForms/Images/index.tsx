import { Typography } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import styles from './Imageslist.module.css'

interface ImagesListProps {
  options: Array<any>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ImagesList: React.FC<ImagesListProps> = ({
  options,
  onChange
}: ImagesListProps) => {
  const divRef = useRef(null)

  const fatorScroll = options.length == 4 ? 1.4 : 0.7

  useEffect(() => {
    const scrollto =
      divRef.current.getBoundingClientRect().left +
      divRef.current.getBoundingClientRect().width / options.length

    divRef.current.scrollLeft = scrollto / fatorScroll
  }, [])

  return (
    <div className={styles.boxRating}>
      <div className={styles.ImagesList} ref={divRef}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="images"
              id={(item.id as unknown) as string}
              value={item.note}
              required
              onChange={onChange}
            />
            <label htmlFor={(item.id as unknown) as string} key={item.id}>
              <img src={item.value} alt={item.description} />
              {!!item.description && (
                <Typography>{item.description || '&nbsp;'}</Typography>
              )}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ImagesList
