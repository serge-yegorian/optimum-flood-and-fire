import { useState } from "react";
import "./Form.scss";
function Form() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const checkEmptyFields = () => {
    const inputs = document.querySelectorAll(".form__input");
    let isEmpty = false;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
      }
    });

    setIsSubmitDisabled(isEmpty);
  };
  return (
    <section className="form">
      <h2 className="form__heading">🛠️ Let exprets help you:</h2>
      <form className="form__form">
        <div className="form__fields">
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="name"
              name="name"
              className="form__input"
              type="text"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Name</label>
          </div>
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="email"
              name="email"
              className="form__input"
              type="email"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Email</label>
          </div>
          <div className="form__div">
            <input
              onChange={checkEmptyFields}
              id="phone"
              name="phone"
              className="form__input"
              type="phone"
              required
            />
            <div className="form__underline"></div>
            <label className="form__label">Phone</label>
          </div>
        </div>
        <div className="form__submit-div">
          <button disabled={isSubmitDisabled} className="form__submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
