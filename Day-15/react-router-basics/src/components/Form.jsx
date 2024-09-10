import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("sdfas");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!password || password.length === 0) {
      alert("Password field is required");
      return;
    }

    if (password !== ConPassword) {
      alert("Password do not Match");
      return;
    }

    console.log("Form Submited.");
  };

  return (
    <>
      <h1>From Basics</h1>

      <form className="basic-form" onSubmit={handleFormSubmit}>
        {/* Name  */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          minLength={3}
          maxLength={6}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PhoneNumber */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          // required
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-Enter your password"
          required
          value={ConPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
