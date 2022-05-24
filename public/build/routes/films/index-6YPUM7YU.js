import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-OC7S7LXV.js";
import "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/kennguyen/Desktop/bit-academy/Random/Remix_test/remix_moviedb/app/routes/films/index.tsx?browser
init_react();

// app/routes/films/index.tsx
init_react();
function FilmsIndex() {
  const films = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-16 font-sans"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold text-center"
  }, "Studio Ghibli Films"), /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "get",
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "font-bold"
  }, "Search", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    placeholder: "Type a title...",
    className: "border-2 rounded py-2 px-3"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
  }, "Search")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, films.map((film) => /* @__PURE__ */ React.createElement(Link, {
    title: film.title,
    key: film.id,
    to: film.id,
    className: "hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer",
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", null, film.title), /* @__PURE__ */ React.createElement("img", {
    src: film.image,
    alt: film.title
  })))));
}
var meta = () => {
  return { title: "Films | Studio Ghibli", description: "List of films" };
};
var links = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};
export {
  FilmsIndex as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/films/index-6YPUM7YU.js.map
