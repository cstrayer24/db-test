import React, { useState } from "react";
import { FormEvent } from "react";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const req = await fetch("api/userAdd", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pass">password</label>
      <input
        type="password"
        name="pass"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
}

export default Signup;
