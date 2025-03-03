"use client";
import React from 'react'
import { NavGroup } from "./navGroup";

import { data } from "@/data";

const AppNavBar = () => {


  return (
    <>
    {data && data.navGroups ? (
        data.navGroups.map((props) => (
            <NavGroup key={props.title} {...props} />
        ))
    ) : (
        <div className="p-4  text-muted-foreground">Navigation not available</div>
    )}
    </>
  )
}

export default AppNavBar;