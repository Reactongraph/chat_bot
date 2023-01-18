import React from "react";
import { ChatFormProps } from "@/utils/interface";
import { TextField, Fab, Grid } from "@mui/material";

import styles from "@/styles/Home.module.css";

const ChatForm: React.FC<ChatFormProps> = (props) => {
  const { handleSubmit, inputValue, setInputValue } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic"
            label="Type a message"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={1} pl={1}>
          <Fab
            sx={{
              background: "#232e4c",
              color: "#fff",
              "&:hover": {
                background: "#232e4c",
                color: "#fff",
              },
            }}
            aria-label="add"
            type="submit"
          >
            Send
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
};

export default ChatForm;
