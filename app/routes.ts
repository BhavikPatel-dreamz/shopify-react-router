import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:handle", "routes/products/products.$handle.tsx"),
  route("collections/:handle", "routes/collections/collections.$handle.tsx"),
  route("pages/rare-rabbit", "routes/pages/rare-rabbit.tsx"),
  route("pages/rareism", "routes/pages/rareism.tsx"),
  route("pages/kids", "routes/pages/kids.tsx"),
  route("pages/rarez-landing-page", "routes/pages/rarez-landing-page.tsx"),
  route("pages/about-us", "routes/pages/about-us.tsx"),
  route("pages/help", "routes/pages/help.tsx"),
  route("pages/work-with-rare", "routes/pages/work-with-rare.tsx"),
  route("pages/thor-store-locator", "routes/pages/thor-store-locator.tsx"),
  route("pages/rare-rabbit-our-theme", "routes/pages/rare-rabbit-our-theme.tsx"),
  route("blogs/news", "routes/blogs/news.tsx"),
  route("pages/terms-conditions", "routes/pages/terms-conditions.tsx"),
  route("pages/html-sitemap", "routes/pages/html-sitemap.tsx"),
  route("/pages/rare-rabbit-summer-essentials", "routes/pages/$handle.tsx"),
  route("/pages/corporate-gifting", "routes/pages/corporate-gifting.tsx"),
  route("/pages/rare-rabbit-walk-6-0", "routes/pages/rare-rabbit-walk-6-0.tsx"),
] satisfies RouteConfig;
