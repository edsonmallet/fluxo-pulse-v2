import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useState } from 'react'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

interface ToastProps {
  message: string
  status?: boolean
}
const Toast: React.FC<ToastProps> = ({ message, status }: ToastProps) => {
  const [openToast, setOpenToast] = useState<boolean>(true)

  return (
    <>
      <Snackbar
        open={openToast}
        autoHideDuration={2000}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenToast(false)}
          severity={status ? 'success' : 'error'}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export { Toast }
