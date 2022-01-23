import * as React from "react";
import { Button, Fab, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import './style.css'

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

export default function ModalCard({ addCard }) {
  const [Card, setCard] = useState({
    image: "",
    rating: 0,
    name: "",
    date: "",
    type: "",
    description: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setCard({ ...Card, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addCard(Card);
  };
  return (
    <div>
      <Fab color="primary" aria-label="add" className="addbtn">
        <AddIcon onClick={handleOpen} />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Add A Movi</h1>
          </Typography>
          <h3>Name</h3>
          <TextField
            label="name"
            onChange={handleChange}
            id="outlined-basic"
            name="name"
            variant="outlined"
          />
          <h3>Image</h3>
          <TextField
            label="URL"
            id="outlined-basic"
            onChange={handleChange}
            name="image"
            variant="outlined"
          />
          <h3>Date</h3>
          <TextField
            label="date"
            id="outlined-basic"
            onChange={handleChange}
            name="date"
            variant="outlined"
          />
          <h3>Type</h3>
          <TextField
            label="type"
            id="outlined-basic"
            onChange={handleChange}
            name="type"
            variant="outlined"
          />
          <h3>Description</h3>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={handleChange}
            name="description"
          />
          <h3>Rating</h3>
          <Box>
            <Rating name="rating" onChange={handleChange} />
          </Box>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
