import { faChartLine, faCopyright, faGem, faHeart, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";

interface Props {}

const AdminContainer: React.FunctionComponent<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <ProSidebar className="h-screen" collapsed={width > 768 ? false : true}>
      <SidebarHeader>
        <div className="text-center p-2 text-sm">
          {width > 768 ? "Admin Menu" : <FontAwesomeIcon icon={faUserCog} />}
        </div>
        {/**
         *  You can add a header for the sidebar ex: logo
         */}
      </SidebarHeader>
      <SidebarContent>
        {/**
         *  You can add the content of the sidebar ex: menu, profile details, ...
         */}
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faChartLine} />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart} />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-center p-2 text-xs">{width > 768 ? "©️ 2020 | We0mmm" : <FontAwesomeIcon icon={faCopyright} />}</div>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default AdminContainer;
