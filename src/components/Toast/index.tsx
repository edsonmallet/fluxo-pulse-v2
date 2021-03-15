import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

interface ToastProps {
  message: string
  status: boolean
  onClose: (event: any) => void
}
const Toast: React.FC<ToastProps> = ({
  message,
  status,
  onClose
}: ToastProps) => {
  return (
    <>
      <Snackbar
        open={status}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={onClose} severity={status ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export { Toast }
