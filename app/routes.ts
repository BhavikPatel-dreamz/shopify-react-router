import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:handle", "routes/products/products.$handle.tsx"),
  route("collections/:handle", "routes/collections/collections.$handle.tsx"),
  route("pages/rare-rabbit","routes/pages/rare-rabbit.tsx"),
  route("pages/rareism","routes/pages/rareism.tsx"),
  route("pages/kids","routes/pages/kids.tsx"),
  route("pages/rarez-landing-page","routes/pages/rarez-landing-page.tsx"),
] satisfies RouteConfig;
