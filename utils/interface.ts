// homepage reducer
export interface HomepageInitialState {
  chatData: string[];
}

// homepage apiCalls
export interface QueryPayload {
  url: any;
  body: any;
  method: string;
  headers: any;
}

// headtag
export interface HeadTagProps {
  headTitle: string;
}

// heading title
export interface HeadingProps {
  title: string;
}

// homepage form
export interface ChatFormProps {
  handleSubmit: any;
  inputValue: any;
  setInputValue: any;
}
