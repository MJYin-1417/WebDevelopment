import React , {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name: inputName, value: newValue} = event.target;
    setNote(
      (prevValue) => {
        return {
          ...prevValue,
          [inputName]: newValue
        };
      }
    );
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={(event)=>{
          props.onAdd(note);
          setNote({
            title:"",
            content:""
          });
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
