import React from 'react'

import {
    Assignment,
    Create,
    Dvr,
    People,
    Streetview,
    Timeline,
    ViewList,
    DataUsage,
    AcUnit,
    AllOut
    
  } from "@material-ui/icons";

const menuItems = [
    {
      menuName: "Overview",
      menutype: "internal",
      menuIcon: <Streetview />,
      menuPath: "/overview",
      pageTitle: "Overview",
    },
    {
      menuName: "Tasks",
      menutype: "internal",
      menuIcon: <Assignment />,
      menuPath: "/tasks",
      pageTitle: "Tasks",
    },
    {
      menuName: "Items",
      menutype: "internal",
      menuIcon: <ViewList />,
      menuPath: "/items",
      pageTitle: "Items",
    },
    {
      menuName: "People",
      menutype: "internal",
      menuIcon: <People />,
      menuPath: "/people",
      pageTitle: "People",
    },
    
    {
      menuName: "Insights",
      menutype: "internal",
      menuIcon: <Timeline />,
      menuPath: "/insights",
      pageTitle: "Insights",
    },
    {
      menuName: "Task Creator",
      menutype: "internal",
      menuIcon: <Create />,
      menuPath: "/task-select",
      pageTitle: "Task Creator",
    },
    {
      menuName: "Entity Creator",
      menutype: "internal",
      menuIcon: <DataUsage />,
      menuPath: "/entity-create",
      pageTitle: "Entity Creator",
    },
    // dixit solanki  update links on 27042021
    {
      menuName: "Quest",
      menutype: "external",
      menuIcon: <AcUnit />,
      menuPath: "https://quest.boxerproperty.com/NewForm.aspx",
      pageTitle: "Quest",
    },
    {
      menuName: "Standards",
      menutype: "external",
      menuIcon: <AllOut />,
      menuPath: "https://standards.boxerproperty.com/",
      pageTitle: "Standards",
    },
  ];

  export default menuItems