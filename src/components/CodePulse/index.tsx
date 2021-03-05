/* eslint-disable react/no-array-index-key */
import useTranslation from '@contexts/Intl'
import { Typography } from '@material-ui/core'
import { useRef, useState } from 'react'
import { Loading } from '../Loading'
import useStyles from './styles'

interface CodePulseProps {
  length: number
  loading?: boolean
  valid?: boolean
  onComplete: (code: any) => void
  onChange: (code: any) => void
}

const CodePulse: React.FC<CodePulseProps> = ({
  length,
  valid,
  loading,
  onComplete,
  onChange
}: CodePulseProps) => {
  const classes = useStyles()
  const [code, setCode] = useState<Array<string>>(
    [...Array(length)].map(() => '')
  )
  const inputs = useRef<(HTMLInputElement | null)[]>([])
  const { text } = useTranslation()

  const processInput = (event: any, slot: number) => {
    const num = event.target.value
    if (/[^a-zA-Z0-9]/.test(num)) return
    const newCode = [...code]
    newCode[slot] = num
    setCode(newCode)
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus()
    }
    if (newCode.every(number => number !== '')) {
      onComplete(newCode.join(''))
    } else {
      onChange(newCode.join(''))
    }
  }

  const onKeyUp = (event: any, slot: number) => {
    if (event.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code]
      newCode[slot - 1] = ''
      setCode(newCode)
      inputs.current[slot - 1].focus()
    }
  }

  const handleValidation = () =>
    loading ? (
      <Loading />
    ) : Object.values(code).some(item => item.length === 0) ? (
      ''
    ) : valid ? (
      <Typography className={classes.valid}>{text('valid')}</Typography>
    ) : (
      <Typography className={classes.invalid}>{text('invalid')}</Typography>
    )

  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        {code.map((number, index) => {
          return (
            <input
              className={classes.input}
              key={index}
              type="text"
              inputMode="text"
              maxLength={1}
              value={number}
              readOnly={loading}
              onChange={event => processInput(event, index)}
              onKeyUp={event => onKeyUp(event, index)}
              ref={ref => inputs.current.push(ref)}
            />
          )
        })}
      </div>
      <div className={classes.validations}>{handleValidation()}</div>
    </div>
  )
}

export { CodePulse }
