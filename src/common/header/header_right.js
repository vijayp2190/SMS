import {
  Badge,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Avatar
} from "@material-ui/core";
import {
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon
} from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { navigate } from "@reach/router";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { isLoginPage } from "../../account/account_action";

import useStyles from "./header_styles";
const notifications = [
  {
    id: 0,
    variant: "warning",
    name: "Dixit",
    notification: "New Task",
    time: "9:32",
  },
];

export default function HeaderRight() {
  var classes = useStyles();
  const dispatch = useDispatch();

  var [isNotification, setNotificationMenu] = useState(null);
  var [isNotificationUnread, setNotificationUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(isLoginPage(true));
    navigate("login");
  };

  return (
    <>
      <div className={classes.grow} />
      <div
        className={classNames(classes.search, {
          [classes.searchFocused]: isSearchOpen,
        })}
      >
        <div
          className={
            "header-icon-search_" +
            classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })
          }
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          <IconButton className={classes.headerMenuButton}>
            <SearchIcon className={classes.headerIcon} />
          </IconButton>
        </div>
        <div style={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={''}
            getOptionLabel={(option) => option.FullName}
            renderOption={(option) => {
              return (
                <Link
                  component="button"
                  variant="body2"

                >
                  {option.FullName}
                </Link>
              );
            }}
            renderInput={(params) => (
              <TextField
                style={{ marginTop: "6px" }}
                {...params}
                fullWidth={true}
                loading={"true"}
                loadingText={"Loading"}
                blurOnSelect={true}

                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  disableUnderline: true,
                }}
              />
            )}
          />
        </div>
      </div>
      <IconButton
        onClick={(e) => {
          setNotificationMenu(e.currentTarget);
          setNotificationUnread(false);
        }}
        className={classes.headerMenuButton}
      >
        <Badge
          badgeContent={isNotificationUnread ? notifications.length : null}
          color={"secondary"}
        >
          <NotificationsIcon className={classes.headerIcon} />
        </Badge>
      </IconButton>

      <IconButton
        color="inherit"
        className={classes.headerMenuButton}
        onClick={(e) => setProfileMenu(e.currentTarget)}
      >
        <Avatar
          alt="Test"
        />
      </IconButton>
      <Menu
        id="notifiation-list"
        open={isNotification}
        anchorEl={isNotification}
        onClose={() => setNotificationMenu(null)}
        className={classes.headerMenu}
      >
        <div className={classes.profileMenuUser}>
          <Typography variant="h5" weight="medium">
            New Notification
          </Typography>
          <Typography
            className={classes.profileMenuLink}
            component="a"
            color={"secondary"}
          >
            {notifications.length} New Notifications
          </Typography>
        </div>
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
            <div>
              <Typography weight="medium" color="primary">
                {notification.name}
              </Typography>
              <Typography color="text" colorBrightness="secondary">
                {notification.notification}
              </Typography>
            </div>
          </MenuItem>
        ))}
      </Menu>
      <Menu
        id="profile-menu"
        open={profileMenu}
        anchorEl={profileMenu}
        onClose={() => setProfileMenu(null)}
        className={classes.headerMenu}
      >
        <div className={classes.profileMenuUser}>
          <Typography variant="h6" weight="medium">
            {displayName ? displayName : "User"}
          </Typography>
        </div>
        <MenuItem
          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        >
          <AccountIcon className={classes.profileMenuIcon} /> Profile
        </MenuItem>
        <MenuItem

          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        >
          <AccountIcon className={classes.profileMenuIcon} /> Tasks
        </MenuItem>
        <MenuItem
          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        ></MenuItem>
        <div className={classes.profileMenuUser}>
          <Typography className={classes.profileMenuLink} color="primary">
            <Button onClick={signOut}>Sign Out</Button>
          </Typography>
        </div>
      </Menu>
    </>
  );
}
