import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import success from '../images/success.png'

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

function Popup() {
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
        BackdropProps={{
        timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <img src={success} alt='Sign In icon' style={{display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            <Typography id="transition-modal-title" variant="h4" component="h2" style={{textAlign:'center'}}>
              You are Signed In!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{textAlign:'center'}}>
              Click the "Save" button to read articles later
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Popup