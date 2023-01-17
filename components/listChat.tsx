import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentChat } from "@/redux/home/homeSlice";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

import styles from "@/styles/Home.module.css";

const ListChat: React.FC = () => {
  // selector
  const currentChat = useSelector(selectCurrentChat);

  React.useEffect(() => {
    const scroll = document.getElementById("scroll");
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  }, [currentChat]);
  return (
    <List className={styles.messageArea} id="scroll">
      {currentChat?.length > 0 ? (
        currentChat?.map((data: any, index: number) => (
          <ListItem key={data?.message + index}>
            <Grid
              container
              className={
                data?.id === "a" ? styles.rightPanel : styles.leftPanel
              }
            >
              <Grid item xs={12}>
                <ListItemText
                  sx={{ textAlign: "left" }}
                  primary={data?.message}
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  className={styles.chatUser}
                  sx={{ textAlign: data?.id === "a" ? "right" : "left" }}
                  primary={data?.timeStamp}
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        ))
      ) : (
        <Typography ml={2}>No Chat Found</Typography>
      )}
    </List>
  );
};

export default ListChat;
