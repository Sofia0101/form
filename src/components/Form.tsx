import { useState } from "react"

const Form = () => {
 
        const [inputValues, setInputValues] = useState({
            nickname: "",
            subMonths: 0,
            avatar: "",
            description:""
        })

    
    const handleSubmit = () => {}

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={inputValues.nickname} type="text" name="nickname" placeholder="nickname"/>
            <input value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths"/>
            <input value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
            <input value={inputValues.description} type="text" name="description" placeholder="description"/>


<button>Save new sub!</button>
        </form>
    </div>
    )
}

export default Form