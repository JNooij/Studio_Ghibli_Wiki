var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/jin/Downloads/remix_moviedb/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-C3MGFMDG.css";

// route-module:/Users/jin/Downloads/remix_moviedb/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => {
  return { title: "Studio Ghibli", description: "A description" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, error.message, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}

// route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/$filmId.tsx
var filmId_exports = {};
__export(filmId_exports, {
  action: () => action,
  default: () => Film,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/api/films.ts
init_react();

// app/api/comments.ts
init_react();
async function getComments(filmId) {
  const response = await fetch(`http://localhost:3001/comments?filmId=${filmId}`);
  return response.json();
}
async function addComment(comment) {
  const response = await fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}

// app/api/films.ts
async function getFilms(title) {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films = await response.json();
  return films.filter((film) => title ? film.title.toLowerCase().includes(title.toLowerCase()) : true);
}
async function getFilmById(filmId) {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`);
  const film = await response.json();
  const comments = await getComments(filmId);
  const characters = await Promise.all(film.people.filter((url) => url !== "https://ghibliapi.herokuapp.com/people/").map((url) => fetch(url).then((res) => res.json())));
  return __spreadProps(__spreadValues({}, film), { characters, comments });
}
async function getFilmCharacter(characterId) {
  const response = await fetch(`https://ghibliapi.herokuapp.com/people/${characterId}`);
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

// route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/$filmId.tsx
var import_tiny_invariant = __toModule(require("tiny-invariant"));

// app/components/FilmBanner.tsx
init_react();
var import_remix3 = __toModule(require_remix());
function FilmBanner({ film }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-96 overflow-hidden relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex flex-col absolute justify-between items-start"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
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
var import_remix4 = __toModule(require_remix());
function CharacterList({ characters }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 max-w-md"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl"
  }, "Characters"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col space-y-3 my-3"
  }, characters == null ? void 0 : characters.map((character) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "characters/" + character.id,
    prefetch: "intent",
    className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `
  }, character.name)))));
}

// app/components/CommentsList.tsx
init_react();
var import_remix5 = __toModule(require_remix());
function CommentsList({ filmId, comments }) {
  const transition = (0, import_remix5.useTransition)();
  const actionData = (0, import_remix5.useActionData)();
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
  }, /* @__PURE__ */ React.createElement(import_remix5.Form, {
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

// route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/$filmId.tsx
var action = async ({ request, params }) => {
  (0, import_tiny_invariant.default)(params.filmId, "expected params.filmId");
  const body = await request.formData();
  const comment = {
    name: body.get("name"),
    message: body.get("message"),
    filmId: params.filmId
  };
  const errors = { name: "", message: "" };
  if (!comment.name) {
    errors.name = "Please provide your name";
  }
  if (!comment.message) {
    errors.message = "Please provide a comment";
  }
  if (errors.name || errors.message) {
    const values = Object.fromEntries(body);
    return { errors, values };
  }
  await addComment(comment);
  return (0, import_remix6.redirect)(`/films/${params.filmId}`);
};
var meta2 = ({ data }) => {
  return { title: data.title, description: data.description };
};
var loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.filmId, "expected params.filmId");
  const film = await getFilmById(params.filmId);
  console.log("fetching film... -->", film.title);
  return film;
};
function Film() {
  const film = (0, import_remix6.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null), /* @__PURE__ */ React.createElement(CommentsList, {
    filmId: film.id,
    comments: film.comments || []
  })))));
}

// route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/$filmId/characters.$characterId.tsx
var characters_characterId_exports = {};
__export(characters_characterId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Character,
  loader: () => loader2
});
init_react();
var import_remix7 = __toModule(require_remix());
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.characterId, "expected params.characterId");
  throw new Error("random error");
  return getFilmCharacter(params.characterId);
};
function Character() {
  const characterDetails = (0, import_remix7.useLoaderData)();
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
  const caught = (0, import_remix7.useCatch)();
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
function ErrorBoundary2({ error }) {
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

// route-module:/Users/jin/Downloads/remix_moviedb/app/routes/films/index.tsx
var films_exports = {};
__export(films_exports, {
  default: () => FilmsIndex,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix8 = __toModule(require_remix());
var loader3 = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};
function FilmsIndex() {
  const films = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-16 font-sans"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold text-center"
  }, "Studio Ghibli Films"), /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
  }, "Search \u{1F633}")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, films.map((film) => /* @__PURE__ */ React.createElement(import_remix8.Link, {
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
var meta3 = () => {
  return { title: "Films | Studio Ghibli", description: "List of films" };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/films/$filmId": {
    id: "routes/films/$filmId",
    parentId: "root",
    path: "films/:filmId",
    index: void 0,
    caseSensitive: void 0,
    module: filmId_exports
  },
  "routes/films/$filmId/characters.$characterId": {
    id: "routes/films/$filmId/characters.$characterId",
    parentId: "routes/films/$filmId",
    path: "characters/:characterId",
    index: void 0,
    caseSensitive: void 0,
    module: characters_characterId_exports
  },
  "routes/films/index": {
    id: "routes/films/index",
    parentId: "root",
    path: "films",
    index: true,
    caseSensitive: void 0,
    module: films_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9qaW4vRG93bmxvYWRzL3JlbWl4X21vdmllZGIvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvamluL0Rvd25sb2Fkcy9yZW1peF9tb3ZpZWRiL2FwcC9yb3V0ZXMvZmlsbXMvJGZpbG1JZC50c3giLCAiLi4vYXBwL2FwaS9maWxtcy50cyIsICIuLi9hcHAvYXBpL2NvbW1lbnRzLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbG1CYW5uZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NoYXJhY3Rlckxpc3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbW1lbnRzTGlzdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9qaW4vRG93bmxvYWRzL3JlbWl4X21vdmllZGIvYXBwL3JvdXRlcy9maWxtcy8kZmlsbUlkL2NoYXJhY3RlcnMuJGNoYXJhY3RlcklkLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2ppbi9Eb3dubG9hZHMvcmVtaXhfbW92aWVkYi9hcHAvcm91dGVzL2ZpbG1zL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2ppbi9Eb3dubG9hZHMvcmVtaXhfbW92aWVkYi9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvamluL0Rvd25sb2Fkcy9yZW1peF9tb3ZpZWRiL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvamluL0Rvd25sb2Fkcy9yZW1peF9tb3ZpZWRiL2FwcC9yb3V0ZXMvZmlsbXMvJGZpbG1JZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2ppbi9Eb3dubG9hZHMvcmVtaXhfbW92aWVkYi9hcHAvcm91dGVzL2ZpbG1zLyRmaWxtSWQvY2hhcmFjdGVycy4kY2hhcmFjdGVySWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9qaW4vRG93bmxvYWRzL3JlbWl4X21vdmllZGIvYXBwL3JvdXRlcy9maWxtcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2ZpbG1zLyRmaWxtSWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9maWxtcy8kZmlsbUlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZmlsbXMvOmZpbG1JZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2ZpbG1zLyRmaWxtSWQvY2hhcmFjdGVycy4kY2hhcmFjdGVySWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9maWxtcy8kZmlsbUlkL2NoYXJhY3RlcnMuJGNoYXJhY3RlcklkXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2ZpbG1zLyRmaWxtSWRcIixcbiAgICBwYXRoOiBcImNoYXJhY3RlcnMvOmNoYXJhY3RlcklkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvZmlsbXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9maWxtcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImZpbG1zXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhaWx3aW5kLmNzcyc7XG5cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdTdHVkaW8gR2hpYmxpJywgZGVzY3JpcHRpb246ICdBIGRlc2NyaXB0aW9uJyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5PaCBubyE8L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7LyogYWRkIHRoZSBVSSB5b3Ugd2FudCB5b3VyIHVzZXJzIHRvIHNlZSAqL31cbiAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCBPdXRsZXQsIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbUJ5SWQsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCBGaWxtQmFubmVyIGZyb20gJ34vY29tcG9uZW50cy9GaWxtQmFubmVyJztcbmltcG9ydCBDaGFyYWN0ZXJMaXN0IGZyb20gJ34vY29tcG9uZW50cy9DaGFyYWN0ZXJMaXN0JztcbmltcG9ydCBDb21tZW50c0xpc3QgZnJvbSAnfi9jb21wb25lbnRzL0NvbW1lbnRzTGlzdCc7XG5pbXBvcnQgeyBhZGRDb21tZW50IH0gZnJvbSAnfi9hcGkvY29tbWVudHMnO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdCwgcGFyYW1zfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLmZpbG1JZCwgJ2V4cGVjdGVkIHBhcmFtcy5maWxtSWQnKTtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBjb21tZW50ID0geyBcbiAgICBuYW1lOiBib2R5LmdldCgnbmFtZScpIGFzIHN0cmluZyxcbiAgICBtZXNzYWdlOiBib2R5LmdldCgnbWVzc2FnZScpIGFzIHN0cmluZyxcbiAgICBmaWxtSWQ6IHBhcmFtcy5maWxtSWRcbiAgfVxuXG4gIGNvbnN0IGVycm9ycyA9IHtuYW1lOiAnJywgbWVzc2FnZTogJyd9O1xuXG4gIGlmICghY29tbWVudC5uYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSAnUGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lJztcbiAgfVxuXG4gIGlmICghY29tbWVudC5tZXNzYWdlKSB7XG4gICAgZXJyb3JzLm1lc3NhZ2UgPSAnUGxlYXNlIHByb3ZpZGUgYSBjb21tZW50JztcbiAgfVxuXG4gIGlmIChlcnJvcnMubmFtZSB8fCBlcnJvcnMubWVzc2FnZSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhib2R5KTtcbiAgICByZXR1cm4geyBlcnJvcnMsIHZhbHVlcyB9OyBcbiAgfVxuXG4gIGF3YWl0IGFkZENvbW1lbnQoY29tbWVudCk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KGAvZmlsbXMvJHtwYXJhbXMuZmlsbUlkfWApO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBkYXRhLnRpdGxlLCBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLmZpbG1JZCwgJ2V4cGVjdGVkIHBhcmFtcy5maWxtSWQnKTtcblxuICBjb25zdCBmaWxtID0gYXdhaXQgZ2V0RmlsbUJ5SWQocGFyYW1zLmZpbG1JZCk7XG5cbiAgY29uc29sZS5sb2coJ2ZldGNoaW5nIGZpbG0uLi4gLS0+JywgZmlsbS50aXRsZSk7XG5cbiAgcmV0dXJuIGZpbG07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxtKCkge1xuICBjb25zdCBmaWxtID0gdXNlTG9hZGVyRGF0YTxGaWxtPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RmlsbUJhbm5lciBmaWxtPXtmaWxtfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTBcIj5cbiAgICAgICAgPHA+e2ZpbG0uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS01IHNwYWNlLXgtNVwiPlxuICAgICAgICAgIDxDaGFyYWN0ZXJMaXN0IGNoYXJhY3RlcnM9e2ZpbG0uY2hhcmFjdGVyc30gLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG5cbiAgICAgICAgICAgIDxDb21tZW50c0xpc3QgZmlsbUlkPXtmaWxtLmlkfSBjb21tZW50cz17ZmlsbS5jb21tZW50cyB8fCBbXX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBDb21tZW50RW50cnksIGdldENvbW1lbnRzIH0gZnJvbSBcIi4vY29tbWVudHNcIjtcblxuZXhwb3J0IHR5cGUgRmlsbUNoYXJhY3RlciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBnZW5kZXI/OiBzdHJpbmc7XG4gIGFnZT86IHN0cmluZztcbiAgZXllX2NvbG9yPzogc3RyaW5nO1xuICBoYWlyX2NvbG9yPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRmlsbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgb3JpZ2luYWxfdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgbW92aWVfYmFubmVyOiBzdHJpbmc7XG4gIHBlb3BsZTogc3RyaW5nW107XG4gIGNoYXJhY3RlcnM/OiBGaWxtQ2hhcmFjdGVyW107XG4gIGNvbW1lbnRzPzogQ29tbWVudEVudHJ5W11cbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxtcyh0aXRsZT86IHN0cmluZyB8IG51bGwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9naGlibGlhcGkuaGVyb2t1YXBwLmNvbS9maWxtcycpO1xuXG4gIGNvbnN0IGZpbG1zOiBGaWxtW10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGZpbG1zLmZpbHRlcigoZmlsbSkgPT5cbiAgICB0aXRsZSA/IGZpbG0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKSA6IHRydWVcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbG1CeUlkKGZpbG1JZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZ2hpYmxpYXBpLmhlcm9rdWFwcC5jb20vZmlsbXMvJHtmaWxtSWR9YFxuICApO1xuXG4gIGNvbnN0IGZpbG06IEZpbG0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhmaWxtSWQpO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBmaWxtLnBlb3BsZVxuICAgICAgLmZpbHRlcigodXJsKSA9PiB1cmwgIT09ICdodHRwczovL2doaWJsaWFwaS5oZXJva3VhcHAuY29tL3Blb3BsZS8nKVxuICAgICAgLm1hcCgodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkpXG4gICk7XG5cbiAgcmV0dXJuIHsgLi4uZmlsbSwgY2hhcmFjdGVycywgY29tbWVudHMgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbG1DaGFyYWN0ZXIoY2hhcmFjdGVySWQ6IHN0cmluZyk6IFByb21pc2U8RmlsbUNoYXJhY3Rlcj4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2doaWJsaWFwaS5oZXJva3VhcHAuY29tL3Blb3BsZS8ke2NoYXJhY3RlcklkfWBcbiAgKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufSIsICJleHBvcnQgdHlwZSBDb21tZW50RW50cnkgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBmaWxtSWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21tZW50cyhmaWxtSWQ6IHN0cmluZykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDEvY29tbWVudHM/ZmlsbUlkPSR7ZmlsbUlkfWBcbiAgKTtcblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ29tbWVudChjb21tZW50OiBDb21tZW50RW50cnkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvbW1lbnRzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcblxudHlwZSBGaWxtQmFubmVyUHJvcHMgPSB7XG4gIGZpbG06IEZpbG07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxtQmFubmVyKHsgZmlsbSB9OiBGaWxtQmFubmVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgYWJzb2x1dGUganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvZmlsbXNcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtNSB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS03MDAvNjAgcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e2ZpbG0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZpbG0ubW92aWVfYmFubmVyfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogLTEwMCB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEZpbG1DaGFyYWN0ZXIgfSBmcm9tICd+L2FwaS9maWxtcyc7XG5cbnR5cGUgQ2hhcmFjdGVyTGlzdFByb3BzID0ge1xuICBjaGFyYWN0ZXJzPzogRmlsbUNoYXJhY3RlcltdO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3Rlckxpc3QoeyBjaGFyYWN0ZXJzIH06IENoYXJhY3Rlckxpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1heC13LW1kXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5DaGFyYWN0ZXJzPC9oMz5cblxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0zIG15LTNcIj5cbiAgICAgICAge2NoYXJhY3RlcnM/Lm1hcCgoY2hhcmFjdGVyKSA9PiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgdG89eydjaGFyYWN0ZXJzLycgKyBjaGFyYWN0ZXIuaWR9XG4gICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgIGB3LWZ1bGwgaG92ZXI6dW5kZXJsaW5lIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItc2xhdGUtNDAwIGlubGluZS1ibG9jayAke1xuICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctc2xhdGUtMzAwIHRleHQtYmxhY2sgZm9udC1ib2xkIGJvcmRlci0yJ1xuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtNTAwICdcbiAgICAgICAgICAgICAgICB9IGBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm5hbWV9XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIHVzZUFjdGlvbkRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBDb21tZW50RW50cnkgfSBmcm9tICd+L2FwaS9jb21tZW50cyc7XG5cbnR5cGUgQ29tbWVudHNMaXN0UHJvcHMgPSB7XG4gIGZpbG1JZDogc3RyaW5nO1xuICBjb21tZW50czogQ29tbWVudEVudHJ5W107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50c0xpc3QoeyBmaWxtSWQsIGNvbW1lbnRzIH06IENvbW1lbnRzTGlzdFByb3BzKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cbiAgY29uc3QgaW5wdXRTdHlsZSA9IChmaWVsZE5hbWU6IHN0cmluZykgPT5cbiAgICBgYm9yZGVyIGJvcmRlci1zbGF0ZS00MDAgcm91bmRlZCBweS0yIHB4LTMgaW5saW5lLWJsb2NrIHctZnVsbCAke1xuICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzW2ZpZWxkTmFtZV0gPyAnIGJvcmRlci1yZWQtNTAwJyA6ICcnXG4gICAgfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTJcIj5Db21tdW5pdHkgQ29tbWVudHM8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IG15LTNcIj5cbiAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAgICAgIHtjb21tZW50Lm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57Y29tbWVudC5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNsYXRlLTQwMFwiPlxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2AvZmlsbXMvJHtmaWxtSWR9YH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ30+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXktMlwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e2lucHV0U3R5bGUoJ25hbWUnKX0gLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5uYW1lICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57YWN0aW9uRGF0YS5lcnJvcnMubmFtZX08L3A+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteS0yXCI+TWVzc2FnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9e2lucHV0U3R5bGUoJ21lc3NhZ2UnKX0gLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57YWN0aW9uRGF0YS5lcnJvcnMubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG15LTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuICAgICAgICAgICAgICAgICAgPyAnQWRkaW5nLi4uJ1xuICAgICAgICAgICAgICAgICAgOiAnQWRkIGNvbW1lbnQnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgRmlsbUNoYXJhY3RlciwgZ2V0RmlsbUNoYXJhY3RlciB9IGZyb20gJ34vYXBpL2ZpbG1zJztcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5jaGFyYWN0ZXJJZCwgJ2V4cGVjdGVkIHBhcmFtcy5jaGFyYWN0ZXJJZCcpO1xuXG4gIHRocm93IG5ldyBFcnJvcihcInJhbmRvbSBlcnJvclwiKTtcblxuICByZXR1cm4gZ2V0RmlsbUNoYXJhY3RlcihwYXJhbXMuY2hhcmFjdGVySWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcmFjdGVyKCkge1xuICBjb25zdCBjaGFyYWN0ZXJEZXRhaWxzID0gdXNlTG9hZGVyRGF0YTxGaWxtQ2hhcmFjdGVyPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yXCI+Q2hhcmFjdGVyIERldGFpbHM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgc2hhZG93LWxnIGJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZm9udC1ib2xkIHRleHQteGwgbWItMlwiPlxuICAgICAgICAgIHtjaGFyYWN0ZXJEZXRhaWxzLm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgIDxsaT5HZW5kZXI6IHtjaGFyYWN0ZXJEZXRhaWxzLmdlbmRlcn08L2xpPlxuICAgICAgICAgIDxsaT5BZ2U6IHtjaGFyYWN0ZXJEZXRhaWxzLmFnZX08L2xpPlxuICAgICAgICAgIDxsaT5FeWUgQ29sb3I6IHtjaGFyYWN0ZXJEZXRhaWxzLmV5ZV9jb2xvcn08L2xpPlxuICAgICAgICAgIDxsaT5IYWlyIENvbG9yOiB7Y2hhcmFjdGVyRGV0YWlscy5oYWlyX2NvbG9yfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0yXCI+RGV0YWlsczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkIHNoYWRvdy1sZyBib3JkZXIgYmctb3JhbmdlLTIwMCBib3JkZXItb3JhbmdlLTYwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c30ge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gZXJyb3InKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMlwiPkRldGFpbHM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgc2hhZG93LWxnIGJvcmRlciBiZy1yb3NlLTIwMCBib3JkZXItcm9zZS02MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj5cbiAgICAgICAgICBVaCBvaC4uLiBTb3JyeSBzb21ldGhpbmcgd2VudCB3cm9uZyFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPntlcnJvcj8ubWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBGaWxtLCBnZXRGaWxtcyB9IGZyb20gJ34vYXBpL2ZpbG1zJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHRpdGxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3RpdGxlJyk7XG4gIHJldHVybiBnZXRGaWxtcyh0aXRsZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxtc0luZGV4KCkge1xuICBjb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xNiBmb250LXNhbnNcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5TdHVkaW8gR2hpYmxpIEZpbG1zPC9oMT5cblxuICAgICAgPEZvcm0gcmVsb2FkRG9jdW1lbnQgbWV0aG9kPVwiZ2V0XCIgY2xhc3NOYW1lPVwicHktNVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgU2VhcmNoeycgJ31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0aXRsZS4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkIHB5LTIgcHgtM1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXgtMlwiXG4gICAgICAgID5cbiAgICAgICAgICBTZWFyY2ggXHVEODNEXHVERTMzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAge2ZpbG1zLm1hcCgoZmlsbSkgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0aXRsZT17ZmlsbS50aXRsZX1cbiAgICAgICAgICAgIGtleT17ZmlsbS5pZH1cbiAgICAgICAgICAgIHRvPXtmaWxtLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PntmaWxtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ZpbG0uaW1hZ2V9IGFsdD17ZmlsbS50aXRsZX0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnRmlsbXMgfCBTdHVkaW8gR2hpYmxpJywgZGVzY3JpcHRpb246ICdMaXN0IG9mIGZpbG1zJyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICdzdHlsZXMnIH1dO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNB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
