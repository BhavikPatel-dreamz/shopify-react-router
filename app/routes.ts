import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:handle", "routes/products/products.$handle.tsx"),
  route("collections/:handle", "routes/collections/collections.$handle.tsx"),
] satisfies RouteConfig;
