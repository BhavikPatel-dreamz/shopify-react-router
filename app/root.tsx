import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { useEffect, useState } from "react";

import type { Route } from "./+types/root";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer";

import MobileBottomBar from "./components/layout/MobileBottomBar";
import BackToTop from "./components/common/BackToTop";
import LandingVideo from "./components/LandingVideo";

import { getBodyClass } from "./utils/getBodyClass";

import "./app.css";
import "./styles/product.css";
import "./styles/collections.css";
import "./styles/common.css";

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>

      <body className={getBodyClass(location.pathname)}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector(
        ".header-wrapper"
      ) as HTMLElement;

      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () =>
      window.removeEventListener(
        "resize",
        updateHeight
      );
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />

      <main
        id="main"
        style={{
          paddingTop: isHomePage
            ? `${headerHeight}px`
            : "0px",
        }}
      >
        <Outlet />
      </main>

      <Footer />

      <MobileBottomBar />

      <BackToTop />
    </>
  );
}

export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";

    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (
    import.meta.env.DEV &&
    error &&
    error instanceof Error
  ) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
      <Header />

      <main>
        {message === "404" ? (
          <LandingVideo desktopVideoSrc={"https://thehouseofrare.com/cdn/shop/videos/c/vp/7d2d4f05b2e24725ab094afabe6dd34c/7d2d4f05b2e24725ab094afabe6dd34c.SD-480p-0.9Mbps-32766722.mp4"} desktopPoster={"https://thehouseofrare.com/cdn/shop/files/preview_images/7d2d4f05b2e24725ab094afabe6dd34c.thumbnail.0000000000_1300x.jpg"} mobileVideoSrc={"https://thehouseofrare.com/cdn/shop/videos/c/vp/7d2d4f05b2e24725ab094afabe6dd34c/7d2d4f05b2e24725ab094afabe6dd34c.SD-480p-0.9Mbps-32766722.mp4"} mobilePoster={"https://thehouseofrare.com/cdn/shop/files/preview_images/7d2d4f05b2e24725ab094afabe6dd34c.thumbnail.0000000000_1300x.jpg"} />
        ) : (
          <div className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>

            <p>{details}</p>

            {stack && (
              <pre className="w-full p-4 overflow-x-auto">
                <code>{stack}</code>
              </pre>
            )}
          </div>
        )}
      </main>

      <Footer />

      <MobileBottomBar />
    </>
  );
}