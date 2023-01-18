import React from "react";
import { useDispatch } from "react-redux";
import { setChatData } from "@/redux/home/homeSlice";
import { Grid, Divider, Container, Paper } from "@mui/material";

import Heading from "@/components/header";
import HeadTag from "@/components/headTag";
import ChatForm from "@/components/chatForm";
import ListChat from "@/components/listChat";
import useBotResponse from "@/hooks/useBotResponse";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { callBotApi } = useBotResponse();
  const [inputValue, setInputValue] = React.useState<string | "">("");

  // handle submit
  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue) return;
      const command = inputValue.slice(1);
      const [commandName, delay, ...message] = command.split(" ");
      switch (commandName) {
        case "delay":
          setTimeout(() => {
            dispatch(
              setChatData({
                id: "user",
                message: message.map((x) => x).join(" "),
                timeStamp: new Date().toLocaleTimeString(),
              })
            );
            callBotApi();
          }, +delay);
          break;
        default:
          dispatch(
            setChatData({
              id: "user",
              message: inputValue,
              timeStamp: new Date().toLocaleTimeString(),
            })
          );
          callBotApi();
      }
      setInputValue(() => "");
    },
    [inputValue, dispatch, callBotApi]
  );
  return (
    <>
      <HeadTag headTitle="Chat with Bot" />
      <Container>
        <Heading title="Chat with Bot" />
        <Grid container component={Paper}>
          <Grid item xs={12}>
            <ListChat />
            <Divider />
            <ChatForm {...{ handleSubmit, inputValue, setInputValue }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
