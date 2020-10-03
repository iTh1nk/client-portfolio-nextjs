import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faChartLine,
  faComment,
  faCopyright,
  faGem,
  faHeart,
  faHome,
  faMinus,
  faPlus,
  faRss,
  faTasks,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div className="flex flex-row justify-start">
      <ProSidebar className="h-screen" collapsed={collapse}>
        <SidebarHeader>
          <div className="text-center p-2 text-sm">
            {!collapse ? (
              <span
                onClick={() => setCollapse(!collapse)}
                className="cursor-pointer"
              >
                Menu <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setCollapse(!collapse)}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </span>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faChartLine} />}>
              Home
            </MenuItem>
            <SubMenu title="Post" icon={<FontAwesomeIcon icon={faRss} />}>
              <MenuItem>
                <Link href="/admin/post">
                  <a>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/admin/post/add">
                  <a>
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/admin/post/delete">
                  <a>
                    <FontAwesomeIcon icon={faMinus} />
                  </a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Project" icon={<FontAwesomeIcon icon={faTasks} />}>
              <MenuItem>
                <Link href="/admin/project">
                  <a>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <FontAwesomeIcon icon={faPlus} />
              </MenuItem>
              <MenuItem>
                <FontAwesomeIcon icon={faMinus} />
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Message"
              icon={<FontAwesomeIcon icon={faComment} />}
            >
              <MenuItem>
                <Link href="/admin/message">
                  <a>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <FontAwesomeIcon icon={faPlus} />
              </MenuItem>
              <MenuItem>
                <FontAwesomeIcon icon={faMinus} />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="text-center p-2 text-xs">
            {!collapse ? (
              "©️ 2020 | We0mmm"
            ) : (
              <FontAwesomeIcon icon={faCopyright} />
            )}
          </div>
        </SidebarFooter>
      </ProSidebar>
      <div
        className={
          (collapse ? "duration-700 opacity-100 " : " duration-75 opacity-0 ") +
          "p-3 md:p-6"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default AdminContainer;
