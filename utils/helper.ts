import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { QueryPayload } from "./interface";

/* base url query */
export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

/* common method for mutation */
export const mutationQuery = (
  url: any,
  body: any,
  method: string
): QueryPayload => {
  const headers = {
    // "Content-type": "application/json; charset=UTF-8",
  };
  return {
    url,
    method,
    body,
    headers,
  };
};

/* dispatch and call bot */
const callAndPassResponse = (
  dispatch: any,
  setChatData: any,
  inputValue: any,
  callBotApi: any
) => {
  dispatch(
    setChatData({
      id: "user",
      message: inputValue,
      timeStamp: new Date().toLocaleTimeString(),
    })
  );
  callBotApi();
};

/* submit handler */
export const handleFormSubmit = async (
  e: any,
  inputValue: string,
  dispatch: any,
  setChatData: any,
  callBotApi: any,
  setInputValue: any
) => {
  e.preventDefault();
  if (!inputValue) return;
  const command = inputValue.slice(1);
  const [commandName, delay, ...message] = command.split(" ");
  if (commandName === "delay") {
    const newMessage = message.map((x) => x).join(" ");
    setTimeout(() => {
      callAndPassResponse(dispatch, setChatData, newMessage, callBotApi);
    }, +delay);
  } else {
    callAndPassResponse(dispatch, setChatData, inputValue, callBotApi);
  }
  setInputValue(() => "");
};
