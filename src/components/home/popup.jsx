import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Popup.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="warning" onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className="title-popup">
            יום עיון בנושא זכויות עובד
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className="text-popup">
            בישראל קיימים חוקי מגן, האמורים להבטיח לעובדים זכויות בסיסיות, אולם אכיפתם אינה מספקת. למרות החוק להגברת האכיפה שאימצה הכנסת בשנת 2011, ומאמציו של משרד הכלכלה להגברת האכיפה בשנים האחרונות, המצב עדיין בכי רע, ובפועל מאפשרת המדינה למעסיקים רבים להתחמק ממילוי חובתם למימוש כל זכויות עובדיהם. עובדות ועובדים רבים, גם במגזר הציבורי, מועסקים בתנאים ירודים ובביטחון תעסוקתי נמוך, ומתרחבת תופעת העובדים העניים – אנשים ששכר עבודתם אינו מספיק כדי לאפשר להם ולמשפחתם להתקיים בכבוד.  
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
