import styles from './FeedbackTypes.module.css'

const FeedbackTypes: React.FC = () => {
  return (
    <>
      <div className={styles.boxTypeFeedback}>
        <small>Tipo do Feedback</small>
        <div className={styles.typeFeedback}>
          <input type="radio" name="type" value="elogio" id="elogio" required />
          <label htmlFor="elogio" className={styles.praise}>
            <span>
              <i className="fas fa-thumbs-up"></i> ELOGIO
            </span>
          </label>

          <input type="radio" name="type" value="critica" id="critica" />
          <label htmlFor="critica" className={styles.criticism}>
            <span>
              <i className="fas fa-thumbs-down"></i> CRÍTICA
            </span>
          </label>

          <input type="radio" name="type" value="ideia" id="ideia" />
          <label htmlFor="ideia" className={styles.idea}>
            <span>
              <i className="fas fa-lightbulb"></i> IDEIA
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default FeedbackTypes
