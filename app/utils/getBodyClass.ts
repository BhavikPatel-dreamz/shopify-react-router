export function getBodyClass(pathname: string) {
    const classes: string[] = [];

    if (pathname === "/") {
        classes.push("template-index");
    }

    if (pathname.startsWith("/products/")) {
        classes.push("template-product");
        classes.push("template-name-product");
    }

    if (pathname.startsWith("/collections/")) {
        classes.push("template-collection");
        classes.push("template-name-collection");
    }

    if (pathname.startsWith("/search")) {
        classes.push("template-search");
        classes.push("template-name-search");
    }

    if (pathname.startsWith("/pages/")) {
        classes.push("template-page");
    }

    return classes.join(" ");
}