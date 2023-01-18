import React from "react";
import { useDispatch } from "react-redux";
import { setChatData } from "@/redux/home/homeSlice";
import { useGetBotResponseMutation } from "@/redux/home/apiCalls";

const useBotResponse = () => {
  const dispatch = useDispatch();
  // rtk query
  const [getBotResponse] = useGetBotResponseMutation();
  // api call
  const callBotApi = React.useCallback(async () => {
    const response: any = await getBotResponse(undefined);
    dispatch(
      setChatData({
        id: "bot",
        message: response?.data?.[0],
        timeStamp: new Date().toLocaleTimeString(),
      })
    );
  }, [dispatch, getBotResponse]);

  return { callBotApi };
};

export default useBotResponse;
