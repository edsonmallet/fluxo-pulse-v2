import styles from './FeedbackTypes.module.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined'
import useTranslation from '@contexts/Intl'

const FeedbackTypes: React.FC = () => {
  const { text } = useTranslation()
  return (
    <>
      <div className={styles.boxTypeFeedback}>
        <small>Selecione o tipo do Feedback</small>
        <div className={styles.typeFeedback}>
          <input type="radio" name="type" value="elogio" id="elogio" required />
          <label htmlFor="elogio" className={styles.praise}>
            <span>
              <ThumbUpOutlinedIcon /> {text('feedbackTypePraise')}
            </span>
          </label>
          <input type="radio" name="type" value="critica" id="critica" />
          <label htmlFor="critica" className={styles.criticism}>
            <span>
              <ThumbDownOutlinedIcon /> {text('feedbackTypeCriticism')}
            </span>
          </label>
          <input type="radio" name="type" value="ideia" id="ideia" />
          <label htmlFor="ideia" className={styles.idea}>
            <span>
              <WbIncandescentOutlinedIcon /> {text('feedbackTypeIdea')}
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default FeedbackTypes
