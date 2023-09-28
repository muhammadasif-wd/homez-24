import { Icon } from "@iconify/react";
import React from "react";
import demoAgent from "../../../Assets/images/dashboard/agent_demo.jpg";

const ViewAgent = () => {
  const demoAgentInfo = {
    address: "Chitoshi bazar",
    city: "Kachua",
    country: "Bangladesh",
    description: "Nothing to write there",
    email: "muhammadasif@gmail.com",
    facebookUrl: "https://facebook.com",
    firstName: "Muhammad",
    img: "C:\\fakepath\\119947785_375525220274811_7411659004415204056_n.jpg",
    instagramUrl: "https://instagram.com",
    lastName: "Asif",
    phone: "01704070091",
    positions: "Agent",
    postCode: "3623",
    region: "Chandpur",
    role: "agent",
    twitterUrl: "https://twitter.com",
  };
  return (
    <div className="lg:w-11/12 lg:px-10 p-5  mx-auto">
      <div className="w-fit mb-10">
        <h2 className="text-left text-2xl font-bold">View Agent</h2>
        <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
      </div>
      {/* agent details info here */}
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left text-gray-900 font-semibold">
                Value
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {demoAgentInfo?.firstName && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Agent Name :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.firstName} {demoAgentInfo?.lastName}
                </td>
              </tr>
            )}
            {demoAgentInfo?.email && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.email}
                </td>
              </tr>
            )}
            {demoAgentInfo?.phone && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Phone :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.phone}
                </td>
              </tr>
            )}
            {demoAgentInfo?.position && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Position :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.position}
                </td>
              </tr>
            )}
            {demoAgentInfo?.address && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Address :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.address}
                </td>
              </tr>
            )}
            {demoAgentInfo?.positions && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Positions :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.positions}
                </td>
              </tr>
            )}
            {demoAgentInfo?.country && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Country :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.country}
                </td>
              </tr>
            )}
            {demoAgentInfo?.city && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  City :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.city}
                </td>
              </tr>
            )}
            {demoAgentInfo?.postCode && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  PostCode :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.postCode}
                </td>
              </tr>
            )}
            {demoAgentInfo?.region && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Region :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.region}
                </td>
              </tr>
            )}
            {demoAgentInfo?.img && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Agent Image :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <div className="h-20 w-20 overflow-hidden border-2 border-primary  rounded-full">
                    <img
                      className="scale-150 mt-5 rounded-full"
                      src={demoAgent}
                      alt="This is agent img"
                    />
                  </div>
                </td>
              </tr>
            )}
            {demoAgentInfo?.description && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Description :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {demoAgentInfo?.description}
                </td>
              </tr>
            )}
            {(demoAgentInfo?.facebookUrl || demoAgentInfo?.instagramUrl) && (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Social Media :-
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-white">
                  <div className="flex gap-5">
                    <a
                      href={demoAgentInfo?.facebookUrl}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <Icon
                        className="w-10 h-10 hover:text-blue-500 duration-200 ease-in border border-whtie rounded-full bg-primary p-1"
                        icon="ic:outline-facebook"
                      />
                    </a>
                    <a
                      href={demoAgentInfo?.instagramUrl}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <Icon
                        className="w-10 h-10 hover:text-red-800 duration-200 ease-in border border-whtie rounded-full bg-primary p-1"
                        icon="mdi:instagram"
                      />
                    </a>
                    <a
                      href={demoAgentInfo?.twitterUrl}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <Icon
                        className="w-10 h-10 hover:text-blue-500 duration-200 ease-in border border-whtie rounded-full bg-primary p-1"
                        icon="jam:twitter-square"
                      />
                    </a>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAgent;
