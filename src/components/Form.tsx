import { useReducer, useState } from "react";
import { Subs } from "../types";

interface FormState{
    inputValues: Subs
}

interface FormProps{
  onNewSub: (newSub: Subs) => void
}


const INITIAL_STATE = {
  nickname: "",
  subMonths: 2,
  avatar: "",
  description: "",
}

type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  }
} | { 
    type: "clear"
  }


const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
  switch (action.type){
    case "change_value":
    const {inputName, inputValue} = action.payload
    return {
      ...state,
      [inputName]: inputValue
    }
    case "clear":
    return INITIAL_STATE 
  } 
}

const useNewSubForm = ()  => {
  return useReducer(formReducer, INITIAL_STATE)
}

const Form = ({onNewSub}: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
    handleClear()
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    const {name, value} = e.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  };

  // (target.name hace referencia a la key "name" de cada input, no al nickname)

  const handleClear = () => {
    dispatch({
      type: "clear",
     })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nickname}
          type="text"
          name="nickname"
          placeholder="nickname"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />

        <button type="submit">Save new sub!</button>
        <button onClick={handleClear} type="button">Clear the form</button>
      </form>
    </div>
  );
};

export default Form;
