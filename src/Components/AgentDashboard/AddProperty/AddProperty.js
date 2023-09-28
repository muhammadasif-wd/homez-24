import React, { useState } from "react";
import PostHook from "../../../Hooks/PostHook";
import primaryApiUrl from "../../../Hooks/primaryApiUrl";

const AddProperty = () => {
  // user state
  const [addProperty, setAddProperty] = useState({
    propertyName: "",
    primaryImg: "",
    description: "",
    videoUrl: "",
    price: "",
    pinCode: "",
    latitude: "",
    longitude: "",
    area: "",
    bedRooms: "",
    bathRooms: "",
    roomCount: "",
    parkingSpaces: "",
    localArea: "",
    city: "",
    country: "",
    region: "",
    allImages: "",
  });

  //   handel user Register fun
  const handelProperty = (e) => {
    e.preventDefault();
    // received user data
    const {
      propertyName,
      primaryImg,
      description,
      videoUrl,
      price,
      pinCode,
      latitude,
      longitude,
      area,
      bedRooms,
      bathRooms,
      roomCount,
      parkingSpaces,
      localArea,
      city,
      country,
      region,
      allImages,
    } = addProperty;

    // post property
    PostHook(
      `${primaryApiUrl}/api/v1/property`,
      {
        propertyName,
        primaryImg,
        description,
        videoUrl,
        price,
        pinCode,
        latitude,
        longitude,
        area,
        bedRooms,
        bathRooms,
        roomCount,
        parkingSpaces,
        localArea,
        city,
        country,
        region,
        allImages,
        role: "agent",
      },
      "Property successfully posted !"
    );
    // clear input felid
    setAddProperty({
      propertyName: "",
      primaryImg: "",
      description: "",
      videoUrl: "",
      price: "",
      pinCode: "",
      latitude: "",
      longitude: "",
      area: "",
      bedRooms: "",
      bathRooms: "",
      roomCount: "",
      parkingSpaces: "",
      localArea: "",
      city: "",
      country: "",
      region: "",
      allImages: "",
    });
  };
  return (
    <div className="lg:w-11/12 lg:px-10 p-5  mx-auto">
      <div className="w-fit mb-10">
        <h2 className="text-left text-2xl font-bold">Add Property</h2>
        <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
      </div>
      <form onSubmit={handelProperty}>
        {/* property name */}
        <label className="font-medium text-dark">
          Property Name <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Type your Property name"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              propertyName: e.target.value,
            })
          }
          value={addProperty.propertyName}
        />
        <label className="font-medium text-dark">
          Description <span className="text-warning">*</span>
        </label>
        <textarea
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Write something about you.."
          rows={10}
          autoComplete="off"
          type="tel"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              description: e.target.value,
            })
          }
          value={addProperty.description}
        />

        {/* image input */}
        <label className="font-medium text-dark">
          Primary Image <span className="text-warning">*</span>
        </label>
        <div className=" rounded-lg flex justify-between items-center px-4 py-2 mt-1 border border-gray-400 mb-5">
          <p className="text-sm">Browse Excel File</p>
          <label className="flex items-center justify-center py-2 px-6 bg-primary border-none cursor-pointer rounded-3xl ">
            <p className="font-medium uppercase text-xs text-white">Browse</p>
            <input
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  primaryImg: e.target.value,
                })
              }
              className="hidden"
              type={"file"}
              autoComplete="off"
              id="resume"
              required
              value={addProperty.primaryImg}
            />
          </label>
        </div>

        <label className="font-medium text-dark">
          Video Url <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Type video url"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              videoUrl: e.target.value,
            })
          }
          value={addProperty.videoUrl}
        />
        <label className="font-medium text-dark">
          Price <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your price"
          autoComplete="off"
          type="number"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              price: e.target.value,
            })
          }
          value={addProperty.price}
        />
        <label className="font-medium text-dark">
          PinCode <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter PinCode"
          autoComplete="off"
          type="number"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              pinCode: e.target.value,
            })
          }
          value={addProperty.pinCode}
        />
        <label className="font-medium text-dark">
          Latitude <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter Latitude"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              latitude: e.target.value,
            })
          }
          value={addProperty.latitude}
        />
        <label className="font-medium text-dark">
          Longitude <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter Longitude"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              longitude: e.target.value,
            })
          }
          value={addProperty.longitude}
        />
        <label className="font-medium text-dark">
          Area <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter area"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setAddProperty({
              ...addProperty,
              area: e.target.value,
            })
          }
          value={addProperty.area}
        />

        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Bedrooms <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Enter Bedrooms"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  bedRooms: e.target.value,
                })
              }
              value={addProperty.bedRooms}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Bathrooms <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Enter Bathrooms"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  bathRooms: e.target.value,
                })
              }
              value={addProperty.bathRooms}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Room count <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Enter Room Count"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  roomCount: e.target.value,
                })
              }
              value={addProperty.roomCount}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Parking Spaces <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Enter Parking Spaces"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  parkingSpaces: e.target.value,
                })
              }
              value={addProperty.parkingSpaces}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Country <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type your country"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  country: e.target.value,
                })
              }
              value={addProperty.country}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              City <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type your city"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  city: e.target.value,
                })
              }
              value={addProperty.city}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Local Area <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type local area"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  localArea: e.target.value,
                })
              }
              value={addProperty.localArea}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Region <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Your Region"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  region: e.target.value,
                })
              }
              value={addProperty.region}
            />
          </div>
        </div>
        {/* image input */}
        <label className="font-medium text-dark">
          All Images <span className="text-warning">*</span>
        </label>
        <div className=" rounded-lg flex justify-between items-center px-4 py-2 mt-1 border border-gray-400 mb-5">
          <p className="text-sm">
            Browse image File{" "}
            <span className="text-xs">(You can choice multiple image)</span>{" "}
          </p>
          <label className="flex items-center justify-center py-2 px-6 bg-primary border-none cursor-pointer rounded-3xl ">
            <p className="font-medium uppercase text-xs text-white">Browse</p>
            <input
              onChange={(e) =>
                setAddProperty({
                  ...addProperty,
                  allImages: e.target.value,
                })
              }
              className="hidden"
              type={"file"}
              autoComplete="off"
              id="resume"
              required
              multiple
              value={addProperty.allImages}
            />
          </label>
        </div>

        <input
          className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
          type="submit"
          value="Add Property"
        />
      </form>
    </div>
  );
};

export default AddProperty;
