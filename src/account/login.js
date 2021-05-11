import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

import "./login.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as notification from "../component/toast";

const useStyles = makeStyles(
  (theme) => ({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3
        }px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  }),
  { index: 1 }
);

export default function Login(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);



  const onSubmit = (props, e) => {
    setIsLoggedIn(false);
    e.preventDefault();
    var data = ({ username: userName, password: password });

    var config = {
      method: "post",
      url: "https://reqres.in/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {

        let token = response?.data?.token;

        props.onLogin(
          token,
          userData?.Username,
          userData?.DisplayName,
          userData?.Email
        );

        if (response.data) {
          var userData = jwt_decode(token);
          // props.onLogin(
          //   token,
          //   userData?.Username,
          //   userData?.DisplayName,
          //   userData?.Email
          // );
        } else {
          notification.toast.warning(response?.data?.error);
        }
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        setIsLoggedIn(true);
      });
  };


  return (
    <div className="page" id="login">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 bg-login-image">
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div className="bcard card card-input-form">
              <main className={classes.main}>
                <Paper className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Sign in
                   </Typography>
                  <form
                    className={classes.form}
                    onSubmit={(event) => {
                      onSubmit(props, event);
                    }}
                  >
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">User Name</InputLabel>
                   
                      <Input
                        id="userName"
                        name="userName"
                        autoComplete="off"
                        autoFocus
                        value={userName}
                        onInput={(e) => setUserName(e.target.value)}
                      />
                    </FormControl>
                    {!isLoggedIn ? (
                      <div className="circular-progress">
                        <CircularProgress />
                      </div>
                    ) : (
                      ""
                    )}
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign in
              </Button>
              use eve.holt@reqres.in and pass : cityslicka
                  </form>
                </Paper>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
