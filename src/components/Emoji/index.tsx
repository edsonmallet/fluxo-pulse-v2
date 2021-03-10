import styles from './Emoji.module.css'

const Emoji: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Como se sente ao enviar o feedback?</p>
      <div className={styles.emojis}>
        <input type="radio" name="user_humor" id="i1" value="FELIZ" />
        <label htmlFor="i1">
          <p data-toggle="tooltip" data-placement="bottom" title="FELIZ">
            {'\u{1F601}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i2" value="CONFIANTE" />
        <label htmlFor="i2">
          <p data-toggle="tooltip" data-placement="bottom" title="CONFIANTE">
            {'\u{1F60E}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i3" value="ANIMADO" />
        <label htmlFor="i3">
          <p data-toggle="tooltip" data-placement="bottom" title="ANIMADO">
            {'\u{1F602}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i4" value="CONFUSO" />
        <label htmlFor="i4">
          <p data-toggle="tooltip" data-placement="bottom" title="CONFUSO">
            {'\u{1F615}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i5" value="PREOCUPADO" />
        <label htmlFor="i5">
          <p data-toggle="tooltip" data-placement="bottom" title="PREOCUPADO">
            {'\u{1F630}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i6" value="CHATEADO" />
        <label htmlFor="i6">
          <p data-toggle="tooltip" data-placement="bottom" title="CHATEADO">
            {'\u{1F624}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i7" value="TRISTE" />
        <label htmlFor="i7">
          <p data-toggle="tooltip" data-placement="bottom" title="TRISTE">
            {'\u{1F614}'}
          </p>
        </label>

        <input type="radio" name="user_humor" id="i8" value="NERVOSO" />
        <label htmlFor="i8">
          <p data-toggle="tooltip" data-placement="bottom" title="NERVOSO">
            {'\u{1F621}'}
          </p>
        </label>
      </div>
    </div>
  )
}

export default Emoji
