import { typeEmojis } from '@config/emojis'
import { Tooltip } from '@material-ui/core'
import React from 'react'
import styles from './Emoji.module.css'

interface EmojiProps {
  onChange: (event: any) => void
  humor?: string
}

const Emoji: React.FC<EmojiProps> = ({ onChange, humor }: EmojiProps) => {
  return (
    <div className={styles.container}>
      <p>Como se sente ao enviar o feedback?</p>
      <div className={styles.emojis}>
        {typeEmojis.map((item, index) => (
          <Tooltip title={item.value} key={index} arrow enterTouchDelay={0}>
            <span>
              <input
                type="radio"
                name="user_humor"
                id={`emoji-${index}`}
                value={item.value}
                onChange={onChange}
                checked={humor === item.value ? true : false}
              />
              <label htmlFor={`emoji-${index}`}>
                <p>{item.codeEmoji}</p>
              </label>
            </span>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Emoji
