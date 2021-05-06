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
import React, {useState } from "react";
import "./login.css";
import { navigate } from "@reach/router";
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
  // I'm produce state using useState.
  // The second parameter that will keep the first parameter value will change the value.
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);



  //When the form is submitted it will run
  const onSubmit = (props, e) => {

    e.preventDefault(); //blocks the postback event of the page

    navigate("dashboard", {
  
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
                        {/* When the userName field is changed, setUserName will run and assign the e-mail to the value in the input. */}
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
                        {/* When the password field is changed, setPassword will run and assign the password to the value in the input. */}
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
