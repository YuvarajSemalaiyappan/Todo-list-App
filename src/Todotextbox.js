import { useState } from "react"
import { Input, InputGroup, Button } from "reactstrap"


export default function TodoTextbox({addTodoInTodoList}){
    const [inputText, setInputText] = useState("")

    const handleChange =(e) => {
        setInputText(e.target.value);
    }

    return (
    <InputGroup>
    <Input value={inputText} onChange={handleChange}/>
    <Button onClick={()=>{addTodoInTodoList(inputText); setInputText("")}} color="info">
      Add Todo
    </Button>
  </InputGroup>)

}