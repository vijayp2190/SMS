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
import rootRoute from "../../system/route";
import HeaderRight from "./header_right";
import Login from "../../account/login";
import menuItems from "./menu_items";
import useStyles from "./header_styles";

export default function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [isLogin, setIsLogin] = React.useState(false);
  const [basePath, setBasePath] = useState(process.env.REACT_APP_BASE_PATH);
  const reducerState = useSelector((state) => state);
  const [appId, setAppId] = React.useState(0);


  React.useEffect(() => {
    setIsLogin(true);
  },);


 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
      {isLogin ? (
       <Login/>
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
                <Avatar>
                  <img
                    src="http://home.boxerproperty.com/Assets/CommonFiles/New_Images/Main_logo.png"
                    style={{ maxWidth: "100%" }}
                    className="header-logo"
                    alt="stemmons-logo"
                  ></img>
                </Avatar>
              </Typography>

             
{/* 
              <HeaderRight /> */}
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
                    (item.menutype !== undefined && item.menutype !== " " && item.menutype !== "internal"  && item.menutype === "external")
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
                        to={basePath + appId + item.menuPath}
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
