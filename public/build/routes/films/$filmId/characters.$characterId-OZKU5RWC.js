import {
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-OC7S7LXV.js";
import "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/kennguyen/Desktop/bit-academy/Random/Remix_test/remix_moviedb/app/routes/films/$filmId/characters.$characterId.tsx?browser
init_react();

// app/routes/films/$filmId/characters.$characterId.tsx
init_react();
function Character() {
  const characterDetails = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl mb-2"
  }, "Character Details"), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded shadow-lg border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, characterDetails.name), /* @__PURE__ */ React.createElement("ul", {
    className: "py-2"
  }, /* @__PURE__ */ React.createElement("li", null, "Gender: ", characterDetails.gender), /* @__PURE__ */ React.createElement("li", null, "Age: ", characterDetails.age), /* @__PURE__ */ React.createElement("li", null, "Eye Color: ", characterDetails.eye_color), /* @__PURE__ */ React.createElement("li", null, "Hair Color: ", characterDetails.hair_color))));
}
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "mb-3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "text-3xl mb-2"
    }, "Details"), /* @__PURE__ */ React.createElement("div", {
      className: "p-4 rounded shadow-lg border bg-orange-200 border-orange-600"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "text-gray-700 font-bold text-xl mb-2"
    }, caught.statusText), /* @__PURE__ */ React.createElement("p", null, caught.status, " ", caught.statusText)));
  }
  throw new Error("Unkown error");
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl mb-2"
  }, "Details"), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded shadow-lg border bg-rose-200 border-rose-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, "Uh oh... Sorry something went wrong!"), /* @__PURE__ */ React.createElement("p", null, error == null ? void 0 : error.message)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  Character as default
};
//# sourceMappingURL=/build/routes/films/$filmId/characters.$characterId-OZKU5RWC.js.map
