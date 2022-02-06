import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
const Success = (props) => {
  const handleClose = () => {
    return props.exitShow();
  };

  return (
    <section className='modal'>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} id='modal-show'>
          <div className='modal-content'>
            <h4>Great Job!</h4>
            <p>
              You've completed this goal. Take a moment to pat yourself on the
              shoulder you deserve it
            </p>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Success;
