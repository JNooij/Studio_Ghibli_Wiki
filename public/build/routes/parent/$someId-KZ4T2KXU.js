import {
  import_react_router_dom
} from "/build/_shared/chunk-OC7S7LXV.js";
import "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/kennguyen/Desktop/bit-academy/Random/Remix_test/remix_moviedb/app/routes/parent/$someId.tsx?browser
init_react();

// app/routes/parent/$someId.tsx
init_react();
function DynamicChild() {
  const { someId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", null, "I am dynamic ", someId);
}
export {
  DynamicChild as default
};
//# sourceMappingURL=/build/routes/parent/$someId-KZ4T2KXU.js.map
