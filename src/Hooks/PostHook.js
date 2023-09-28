// url = string
// data = object
// successMsg = string

import { toast } from "react-hot-toast";

const PostHook = (url, data, successMsg) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        toast.success(successMsg ? successMsg : "Success");
        console.log(data);
      } else {
        toast.error("Error", data.message);
        return data;
      }
    });
};

export default PostHook;
