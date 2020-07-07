import React,{useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;



const NoteForm = props => {

    const [value,setValue] = useState({content:props.content || ''})

    const submitForm = (e)=>{
        e.preventDefault()
        props.action({
            variables: {
                ...value
            }
        })
        
    }
    console.log(value)
    return (

            <Wrapper className="ui form">
                <Form onSubmit={submitForm}>
                    <div className="field">
                        <label>Note</label>
                        <TextArea
                        required
                        type="text"
                        name="content"
                        placeholder="Note content"
                        value={value.content}
                        onChange = {(e)=>setValue({...value,[e.target.name]:e.target.value})}>
                            {value}
                        </TextArea>
                    </div>
                    <button className="ui positive button" type="submit">Save</button>
                </Form>
            </Wrapper>
    )

}


export default NoteForm;