import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameInputRef = useRef();
  const [name ,setName]=useState()
  const [isTouc,setIsTouc]=useState(true)

  const formSumitHAndler = (e) => {
    e.preventDefault();
    // const enreNAme = nameInputRef.current.value;
    // setNameIsValid(true);
    // if (enreNAme.trim().langth <5 ) {
    //   setNameIsValid(false);
    //   return;
    // }
    // nameInputRef.current.value = "";
  };

  const onBlurHandler = () => {
    const enreNAme = nameInputRef.current.value;

    setNameIsValid(true);
    setIsTouc(true)

    if (enreNAme.trim().length <5) {
      setNameIsValid(false);
      setIsTouc(false)
      return;
    }
  };

  const onChageHandler=(e)=>{
    setName(e.target.value)
    setNameIsValid (true)
    setIsTouc(false)
    const enreNAme = nameInputRef.current.value;
    
    if (enreNAme.trim().length <5) {
      setNameIsValid(false);
      setIsTouc(false)
      return;
    }
  }

  const nameInput = nameIsValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSumitHAndler}>
      <div className={nameInput}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} onBlur={onBlurHandler} onChange={onChageHandler}/>
        {!nameIsValid && <p className="error-text">INPUT NOT</p>}
      </div>
      <div className="form-actions">
        <button disabled={! isTouc}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;