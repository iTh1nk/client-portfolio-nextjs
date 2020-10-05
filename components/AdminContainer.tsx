import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faChartLine,
  faComment,
  faCopyright,
  faHome,
  faEdit,
  faRss,
  faSignOutAlt,
  faTasks,
  faFile,
  faIdCard,
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
import useLoggedIn from "./hook/useLoggedIn";
import IsLoading from "./IsLoading";
import LoginModal from "./LoginModal";
import IsError from "./IsError";
import { useRouter } from "next/router";

interface Props {
  topNotify?: string;
  topNotifyBool?: boolean;
}

const AdminContainer: React.FunctionComponent<Props> = ({
  children,
  topNotify,
  topNotifyBool = undefined,
}) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const { isAuthenticated, isLoading, error, userLoggedIn } = useLoggedIn();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/");
  };

  if (isLoading) return <IsLoading />;
  // if (error) return <IsError />;

  return (
    <>
      <div
        className={
          (topNotifyBool === undefined ? " hidden " : " ") +
          (topNotifyBool ? " bg-blue-600 " : " bg-red-600 ") +
          "absolute top-0 w-full z-10 text-center p-2 text-white font-semibold"
        }
      >
        {topNotifyBool ? "Successfully Completed!" : "Error, try again later."}
      </div>
      <div className="flex flex-row justify-start">
        <div>
          <ProSidebar className="h-full min-h-screen z-0" collapsed={collapse}>
            <SidebarHeader>
              <div className="text-center p-2 text-sm">
                {!collapse ? (
                  <span
                    onClick={() => setCollapse(!collapse)}
                    className="cursor-pointer text-green-500"
                  >
                    Hi, {userLoggedIn.username.toUpperCase()}{" "}
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
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
              <Menu iconShape="circle">
                <MenuItem icon={<FontAwesomeIcon icon={faChartLine} />}>
                  Home
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faIdCard} />}>
                  <Link href="/admin/intro">
                    <a>Intro</a>
                  </Link>
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
                        <FontAwesomeIcon icon={faFile} className="mr-2 w-5" /> New
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/admin/post/edit">
                      <a>
                        <FontAwesomeIcon icon={faEdit} className="mr-2 w-5" /> Edit
                      </a>
                    </Link>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  title="Project"
                  icon={<FontAwesomeIcon icon={faTasks} />}
                >
                  <MenuItem>
                    <Link href="/admin/project">
                      <a>
                        <FontAwesomeIcon icon={faHome} />
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/admin/project/add">
                      <a>
                        <FontAwesomeIcon icon={faFile} className="mr-2 w-5" /> New
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/admin/project/edit">
                      <a>
                        <FontAwesomeIcon icon={faEdit} className="mr-2 w-5" /> Edit
                      </a>
                    </Link>
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
                    <Link href="/admin/message/add">
                      <a>
                        <FontAwesomeIcon icon={faFile} className="mr-2 w-5" /> New
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/admin/message/edit">
                      <a>
                        <FontAwesomeIcon icon={faEdit} className="mr-2 w-5" /> Edit
                      </a>
                    </Link>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </SidebarContent>
            <div
              onClick={() => router.push("/")}
              className="text-center m-2 text-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div
              onClick={() => handleLogout()}
              className="text-center m-2 text-red-500 text-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
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
        </div>
        <div
          className={
            (collapse
              ? "duration-700 opacity-100 "
              : " duration-75 opacity-0 ") + "p-3 md:p-8 w-full"
          }
        >
          {children}
        </div>
      </div>
      {isAuthenticated ? null : <LoginModal />}
    </>
  );
};

export default AdminContainer;
