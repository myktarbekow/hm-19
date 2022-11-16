import { useState } from "react";
import { useRef } from "react";

const BasicForm = (props) => {
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameInputRef = useRef();
  const [name, setName] = useState();
  const [isTouc, setIsTouc] = useState(true);

  const formSumitHAndler = (e) => {
    e.preventDefault();
  };

  const onBlurHandler = () => {
    const enreNAme = nameInputRef.current.value;

    setNameIsValid(true);
    setIsTouc(true);

    if (enreNAme.trim().length < 5) {
      setNameIsValid(false);
      setIsTouc(false);
      return;
    }
  };

  const onChageHandler = (e) => {
    setName(e.target.value);
    setNameIsValid(true);
    setIsTouc(false);
    const enreNAme = nameInputRef.current.value;

    if (enreNAme.trim().length < 5) {
      setNameIsValid(false);
      setIsTouc(false);
      return;
    }
  };
  const nameInput = nameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onChange={formSumitHAndler}>
      <div className="control-group">
        <div className={nameInput}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onBlur={onBlurHandler}
            onChange={onChageHandler}
          />
        </div>
        <div className={nameInput}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onBlur={onBlurHandler}
            onChange={onChageHandler}
          />
        </div>
      </div>
      <div className={nameInput}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChageHandler}
        />
      </div>
      {!nameIsValid && <p className="error-text">INPUT NOT</p>}
      <div className="form-actions">
        <button disabled={!isTouc}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
