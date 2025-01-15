import { createElement } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";

import router from "./routes/router";

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router} />);

// const categories = ["Sports", "Tools", "Clothing", "Sneakers"];
// console.log(
//   categories.forEach((category) => createElement("button", null, category))
// );

// react မှာ Create လုပ်တာ
// const app = createElement(
//   "div",
//   { id: "onlineStore", className: "p-5 " },
//   createElement(
//     "h1",
//     { className: "mb-5 text-3xl font-bold font-serif" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     ...categories.map((category) =>
//       createElement(
//         "button",
//         {
//           className:
//             "border border-gray-500 p-2 me-3 rounded-md hover:bg-gray-300 duration-300",
//         },
//         category
//       )
//     )
//   )
// );

// append လုပ်တာ react (render လုပ်)
// console.log(app);
