import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card" style={{backgroundImage: "url(https://hips.hearstapps.com/hmg-prod/images/findtherightcreditcard-64356cd10e2c0.jpg?resize=2048:*)", "padding": "40px 20px 60px 20px", marginLeft: "20px"}}>
          <h4 className="card-header text-light p-2" style={{textAlign: "center", backgroundColor: "#f19a6e"}}>Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} style={{display: "flex", flexDirection: "column"}}>
                Username:
                <input
                  className="form-input"
                  placeholder="username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                /> Email:
                <input
                  className="form-input"
                  placeholder="email@gmail.com"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                /> Password:
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block"
                  style={{ cursor: 'pointer', backgroundColor: "black", marginTop: "20px", "color": "white"}}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
