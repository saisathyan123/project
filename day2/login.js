import "../css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setUsername("");
    setPassword("");
  };

  return (
    <center>
      <table className="login">
        <div className="login-page">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <center>
                  {" "}
                  <h1 className="text-center">Login </h1>
                </center>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <center>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                      <button
                        onClick={() => {
                          navigate("/register");
                        }}
                        type="register"
                        className="btn btn-primary"
                      >
                        Sign up
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </table>
    </center>
  );
}

export default Login;
