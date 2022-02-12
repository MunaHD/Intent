import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Typography } from "@mui/material";
import "./home.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Tasks = (props) => {
  const handleClose = () => {
    return props.exitTasks();
  };

  return (
    <section className='modal'>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} id='task-holder'>
          <div className='modal-list'>
            <div className='task'>
              <input type='checkbox' className='task-checkbox' />

              <Typography>This is an item</Typography>
            </div>
            <Divider />
            <div className='task'>
              <input type='checkbox' className='task-checkbox' />
              <Typography>This is an item</Typography>
            </div>
            <Divider />
            <div className='task'>
              <input type='checkbox' className='task-checkbox' />
              <Typography>This is an item</Typography>
            </div>
            <Divider />
            <div className='task'>
              <input type='checkbox' className='task-checkbox' />
              <Typography>This is an item</Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Tasks;
