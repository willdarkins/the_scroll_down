import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import denied from '../images/denied.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--dark-card)',
  border: 'none',
  boxShadow: 24,
  p: 4,
  color: 'var(--font-dark)',
};

function LoginDeniedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >
        <Fade in={open}>
          <Box sx={style}>
              <img src={denied} alt='Sign In icon' style={{display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            <Typography id="transition-modal-title" sx={{ mt: 2 }} variant="h4" component="h2" style={{textAlign:'center'}}>
              Sign In Failed!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }} style={{textAlign:'center'}}>
              Make sure your email and passwork combination is correct
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LoginDeniedModal