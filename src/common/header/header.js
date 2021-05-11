// styles
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { useTheme } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight, Menu } from "@material-ui/icons";
import { Link, navigate } from "@reach/router";
import classnames from "classnames";
import clsx from "clsx";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoginPage } from "../../account/account_action";

import rootRoute from "../../system/route";
import HeaderRight from "../header/header_right";
import menuItems from "../header/menu_items";
import Login from "../../account/login";
import useStyles from "./header_styles";

export default function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [isLogin, setIsLogin] = React.useState(false);
  const reducerState = useSelector((state) => state);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      dispatch(isLoginPage(true));
      setIsLogin(true);
      navigate('login', {});
    }
    else {
      navigate('dashboard', {});
    }


  }, [
    reducerState.account.isLoginPage,
  ]);
  const isLoggedIn = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onLogin = (token, userName = "", displayName = "", email = "") => {
    dispatch(isLoginPage(false));
    localStorage.setItem("token", token);
    navigate('/dashboard', {});
    setIsLogin(false);
  };

  return (
    <>
      {isLogin ? (
        <Login path="/login" onLogin={onLogin} />
      ) : (
        <div className={classes.root}>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <Menu />
              </IconButton>
              <Typography>
                <Link
                  to={"/dahboard"}
                  target="_seft"
                  style={{ color: "black" }}
                >
                  SMS
                      </Link>
              </Typography>
              <HeaderRight />
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            className={'sidebar-nav ' + clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar + " side-click"}>
              <h2>Navigation</h2>
              <div></div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            </div>
            <List className="sidebar-navigation-block">
              {menuItems.map((item, index) => (
                <>
                  {
                    (item.menutype !== undefined && item.menutype !== " " && item.menutype !== "internal" && item.menutype === "external")
                      ?
                      <a
                        href={item.menuPath}
                        target="_blank"
                        style={{ color: "black" }}
                        key={index}
                      >
                        <ListItem
                          onClick={() => {
                            setCurrentPage(item.pageTitle);
                          }}
                        >
                          <ListItemIcon>{item.menuIcon}</ListItemIcon>
                          <ListItemText>{item.menuName}</ListItemText>
                        </ListItem>
                      </a>
                      :
                      <Link
                        to={item.menuPath}
                        target="_seft"
                        style={{ color: "black" }}
                        key={index}
                      >
                        <ListItem
                          onClick={() => {
                            setCurrentPage(item.pageTitle);
                          }}
                        >
                          <ListItemIcon>{item.menuIcon}</ListItemIcon>
                          <ListItemText>{item.menuName}</ListItemText>
                        </ListItem>
                      </Link>
                  }
                </>
              ))}
            </List>
          </Drawer>
          <div className={classnames(classes.content)}>
            <div className={classes.fakeToolbar} />
            {rootRoute}
          </div>
        </div>
      )}
    </>
  );
}
