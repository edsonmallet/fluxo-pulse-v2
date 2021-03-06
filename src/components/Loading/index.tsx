import useTranslation from '@contexts/Intl'
import { Typography } from '@material-ui/core'
import Image from 'next/image'
import useStyles from './styles'

const Loading: React.FC = () => {
  const classes = useStyles()
  const { text } = useTranslation()
  return (
    <div className={classes.container}>
      <Image width={32} height={32} src="/loading.svg" />
      <Typography className={classes.text}>{text('loading')}</Typography>
    </div>
  )
}

export { Loading }
