
import { useState } from "react";
import { handleUserLoginApi } from "../service/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tokendata } from "../utils/user";


function Login() {
  const naviget = useNavigate();
 
  const [email, setEmail] = useState("user@gmail.com");           //admin@gmail.com
  const [password, setPassword] = useState("12345678");     //12345678

  console.log("Login", email, password);

  const handleUserLogin = async (event) => {
    event.preventDefault();
    const body = { email, password };
    console.log(body, "----body");

    try {
      const data = await handleUserLoginApi(body);
      console.log(data, "----data");
      if (data.success) {
        naviget("/");
        toast(data?.message);
      } else {
        toast(data?.data?.message);
        naviget("/login");
      };

    } catch (error) {
      toast(error?.response?.message);
      naviget("/login");
    };

  }

  return (
    <section className="p-0 d-flex align-items-center position-relative overflow-hidden">

      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
            <div className="p-3 p-lg-5">

              <div className="text-center">
                <h2 className="fw-bold">Welcome to the Largest Movie Community!</h2>
                <p className="mb-0 h6 fw-light">Let's dive into the world of cinema and discover something new today!</p>
              </div>

              <img src="assets/images/element/02.svg" className="mt-5" alt="" />

              <div className="d-sm-flex mt-5 align-items-center justify-content-center">

                <ul className="avatar-group mb-2 mb-sm-0">
                  <li className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                  </li>
                </ul>

                <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 m-auto">
            <div className="row my-5">
              <div className="col-sm-10 col-xl-8 m-auto">

                <span className="mb-0 fs-1">👋</span>
                <h1 className="fs-2">Login into Eduport!</h1>
                <p className="lead mb-4">Nice to see you! Please log in with your account.</p>


                <form onSubmit={handleUserLogin}>
                  <div className="mb-4">
                    <label for="exampleInputEmail1" className="form-label">Email address *</label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                      <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label for="inputPassword5" className="form-label">Password *</label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                      <input type="password"
                        className="form-control border-0 bg-light rounded-end ps-1"
                        placeholder="password" id="inputPassword5" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div id="passwordHelpBlock" className="form-text">
                      Your password must be 8 characters at least
                    </div>
                  </div>

                  <div className="mb-4 d-flex justify-content-between mb-4">
                    <div className="text-primary-hover">
                      <a href="forgot-password.html" className="text-secondary">
                        <u>Forgot password?</u>
                      </a>
                    </div>
                  </div>

                  <div className="align-items-center mt-0">
                    <div className="d-grid">
                      <button className="btn btn-primary mb-0" type="submit">Login</button>
                    </div>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <span>Don't have an account? <a href="/sign-up">Signup here</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Login;
