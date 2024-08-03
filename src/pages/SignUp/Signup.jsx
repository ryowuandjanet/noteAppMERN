import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper"; // Adjust the path according to your project structure

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validations
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    // Clear the error and attempt to sign up
    setError("");

    try {
      // Simulate a sign-up request
      // Replace this with your actual sign-up logic
      // await api.signUp({ name, email, password });

      // Reset the form on successful sign-up
      setName("");
      setEmail("");
      setPassword("");

      // Optionally, redirect or show a success message
      // For example: history.push("/welcome");
    } catch (err) {
      setError("An error occurred during sign-up. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <h4 className="text-2xl mb-7">Sign Up</h4>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="input-box w-full px-3 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="input-box w-full px-3 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <PasswordInput
                placeholder="Password"
                className="w-full px-3 py-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button
              type="submit"
              className="btn-primary w-full py-2 bg-blue-500 text-white rounded"
            >
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
