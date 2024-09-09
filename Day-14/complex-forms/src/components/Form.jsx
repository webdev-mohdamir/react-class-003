import { useState } from "react";

const Form = () => {
  const intialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(intialFormData);
  const [errorData, setErrorData] = useState(intialFormData);

  const hanldeInputChange = (event) => {
    const { name: formField, value } = event.target;

    if (!formField) {
      return;
    }

    setFormData({
      ...formData,
      [formField]: value,
    });
  };

  // VAlidation
  const validateFields = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "This email is invalid.";

    if (formData.password.length < 8)
      newErrors.password = "Password should be 8 characters long";

    return newErrors;
  };

  // Form Submit function
  const handlSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length !== 0) {
      // If you use this then the previous erros will be saved and not update
      // setErrorData({
      //   ...errorData,
      //   ...validationErrors,
      // });
      setErrorData(validationErrors);
    } else {
      setErrorData({});
      alert("Form submited.");
    }
  };

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handlSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={hanldeInputChange}
          />
          {errorData.username && <span>{errorData.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={hanldeInputChange}
          />
          {errorData.email && <span>{errorData.email}</span>}
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={hanldeInputChange}
          />
          {errorData.password && <span>{errorData.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
