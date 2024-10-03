import { useState } from "react";
import { Subs } from "../types";

interface FormState{
    nickname: string;
    subMonths: number;
    avatar: string;
    description?: string;
}

interface FormProps{
  onNewSub: (newSub: Subs) => void
}

const Form = ({onNewSub}: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState>({
    nickname: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  // (target.name hace referencia a la key "name" de cada input, no al nickname)

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

        <button>Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;
