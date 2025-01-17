import React, { createContext, useState } from "react";
import runChat from "../config/gemini.js";

export const AppContext = createContext();

const Context = (props) => {

    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[prevPrompts, setPrevPrompt] = useState([]);
    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    const response = await runChat(input);
    setShowResult(true)
    setLoading(false);
    setResultData(response);
    setInput("")
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    resultData,
    loading,
    showResult,
    input,
    setInput,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
