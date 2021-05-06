
import React from "react";
import "./login.css";
import { Link } from "@reach/router";
export default function Login(props) {
  return (
    <div className="page" id="login">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 bg-login-image">
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div className="bcard card card-input-form">
              <div className="card-header bg-transparent">
                Education
                </div>
              <div className=" card-body">
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="UserName" />
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                </div>
                <div className="card-footer bg-transparent mb-5">
                  <div className="pull-right">
                    <button type="button" class="btn btn-primary">Login</button>
                  </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                          <Link to="/forgot_password">
                          Forgot password ?
                          </Link>
                      </div>
                      <div className="col-sm-12 text-center">
                      <Link to="/signup">
                      Create an account
                          </Link>
                      </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
