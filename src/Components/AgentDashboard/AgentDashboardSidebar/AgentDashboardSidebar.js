import { Icon } from "@iconify/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import agent from "../../../Assets/images/dashboard/agent_demo.jpg";

const AgentDashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const activeClass =
    "flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white translation-color duration-500";
  const normalClass =
    "flex items-center gap-2 rounded-lg px-4 py-3 text-gray-700 hover:text-white bg-gray-100 translation-color duration-500 hover:bg-primary";
  return (
    <div className="flex flex-col w-full justify-between border-r bg-white">
      <div className="px-4 py-6">
        <div className="w-28 h-28 border-2 shadow-lg border-primary rounded-full overflow-hidden">
          <img
            className="w-28 scale-150 mt-5 rounded-full"
            src={agent}
            alt=""
          />
        </div>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-2">
          <Link
            to="/agent-dashboard"
            className={
              currentPath === "/agent-dashboard" ? activeClass : normalClass
            }
          >
            <Icon
              className="text-lg"
              icon="material-symbols:dashboard-rounded"
            />

            <span className="text-sm font-medium"> Dashboard </span>
          </Link>
          <Link
            to="edit-agent"
            className={
              currentPath === "/agent-dashboard/edit-agent"
                ? activeClass
                : normalClass
            }
          >
            <Icon className="text-lg" icon="material-symbols:edit-square" />

            <span className="text-sm font-medium"> Edit Agent </span>
          </Link>
          <Link
            to="view-agent"
            className={
              currentPath === "/agent-dashboard/view-agent"
                ? activeClass
                : normalClass
            }
          >
            <Icon className="text-lg" icon="ic:baseline-remove-red-eye" />

            <span className="text-sm font-medium"> View Agent </span>
          </Link>

          <Link
            to="add-property"
            className={
              currentPath === "/agent-dashboard/add-property"
                ? activeClass
                : normalClass
            }
          >
            <Icon className="text-lg" icon="material-symbols:add-circle" />

            <span className="text-sm font-medium"> Add Property </span>
          </Link>
          <Link
            to="manage-property"
            className={
              currentPath === "/agent-dashboard/manage-property"
                ? activeClass
                : normalClass
            }
          >
            <Icon
              className="text-lg"
              icon="eos-icons:content-lifecycle-management"
            />

            <span className="text-sm font-medium"> Manage Property </span>
          </Link>
          <Link
            to="wishlist"
            className={
              currentPath === "/agent-dashboard/wishlist"
                ? activeClass
                : normalClass
            }
          >
            <Icon
              className="text-lg"
              icon="material-symbols:favorite-rounded"
            />

            <span className="text-sm font-medium"> Wishlist</span>
          </Link>
          <Link
            to="change-password"
            className={
              currentPath === "/agent-dashboard/change-password"
                ? activeClass
                : normalClass
            }
          >
            <Icon className="text-lg" icon="heroicons:key-solid" />

            <span className="text-sm font-medium"> Change Password</span>
          </Link>
          <Link
            to="delete-account"
            className={
              currentPath === "/agent-dashboard/delete-account"
                ? activeClass
                : normalClass
            }
          >
            <Icon className="text-lg" icon="ic:baseline-delete" />

            <span className="text-sm font-medium"> Delete Account</span>
          </Link>
          <li
            className={`cursor-pointer ${normalClass} hover:bg-primary hover:text-white hover:translation-color hover:duration-500`}
          >
            <Icon className="text-lg" icon="basil:logout-solid" />

            <span className="text-sm font-medium">Logout</span>
          </li>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src={agent}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AgentDashboardSidebar;
