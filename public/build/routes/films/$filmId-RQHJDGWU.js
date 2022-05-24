import {
  Form,
  Link,
  NavLink,
  React,
  import_react_router_dom,
  init_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-QKLFCQ7Y.js";

// browser-route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/$filmId.tsx?browser
init_react();

// app/routes/films/$filmId.tsx
init_react();

// app/components/FilmBanner.tsx
init_react();
function FilmBanner({ film }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-96 overflow-hidden relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex flex-col absolute justify-between items-start"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/films",
    className: "text-white p-5 text-2xl hover:underline"
  }, "Go Back"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-slate-700/60 p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-6xl font-bold text-white"
  }, film.title))), /* @__PURE__ */ React.createElement("img", {
    src: film.movie_banner,
    className: "w-full h-auto",
    style: { marginTop: -100 }
  })));
}

// app/components/CharacterList.tsx
init_react();
function CharacterList({ characters }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 max-w-md"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl"
  }, "Characters"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col space-y-3 my-3"
  }, characters == null ? void 0 : characters.map((character) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "characters/" + character.id,
    prefetch: "intent",
    className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `
  }, character.name)))));
}

// app/components/CommentsList.tsx
init_react();
function CommentsList({ filmId, comments }) {
  const transition = useTransition();
  const actionData = useActionData();
  const inputStyle = (fieldName) => `border border-slate-400 rounded py-2 px-3 inline-block w-full ${(actionData == null ? void 0 : actionData.errors[fieldName]) ? " border-red-500" : ""}`;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl mb-2"
  }, "Community Comments"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-4 my-3"
  }, comments.map((comment) => /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded border border-slate-400"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, comment.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700"
  }, comment.message))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded border border-slate-400"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: `/films/${filmId}`
  }, /* @__PURE__ */ React.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "inline-block my-2"
  }, "Name:"), /* @__PURE__ */ React.createElement("input", {
    name: "name",
    type: "text",
    className: inputStyle("name")
  }), (actionData == null ? void 0 : actionData.errors.name) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData.errors.name), /* @__PURE__ */ React.createElement("label", {
    className: "inline-block my-2"
  }, "Message:"), /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    className: inputStyle("message")
  }), (actionData == null ? void 0 : actionData.errors.message) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData.errors.message), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
  }, transition.state === "submitting" ? "Adding..." : "Add comment"))))));
}

// app/routes/films/$filmId.tsx
var meta = ({ data }) => {
  return { title: data.title, description: data.description };
};
function Film() {
  const film = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FilmBanner, {
    film
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, /* @__PURE__ */ React.createElement("p", null, film.description), /* @__PURE__ */ React.createElement("div", {
    className: "flex py-5 space-x-5"
  }, /* @__PURE__ */ React.createElement(CharacterList, {
    characters: film.characters
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex flex-col justify-between"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(CommentsList, {
    filmId: film.id,
    comments: film.comments || []
  })))));
}
export {
  Film as default,
  meta
};
//# sourceMappingURL=/build/routes/films/$filmId-RQHJDGWU.js.map
