import { useEffect, useState } from "react";
import "../../styles/ThorStoreLocatorPage.css";

const storeLocatorData = {
  title: "One store locator",
  subtitle: "Select the brand store you want to visit",
  brands: [
    {
      id: 1,
      name: "Rare Rabbit",
      url: "https://stores-rarerabbit.thehouseofrare.com/",
      lightLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RR_Logo__Black.png?v=1732097243",
      darkLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RR_Logo__White.png?v=1732099769",
      alt: "Rare Rabbit"
    },
    {
      id: 2,
      name: "Rareism",
      url: "https://stores.rareism.com/",
      lightLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RM_Logo__Black.png?v=1732097243",
      darkLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RM_Logo__White.png?v=1732099770",
      alt: "Rareism Logo"
    },
    {
      id: 3,
      name: "Rare Ones",
      url: "https://rareones.thehouseofrare.com/",
      lightLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RO_Logo__Black.png?v=1732097243",
      darkLogo: "https://cdn.shopify.com/s/files/1/0752/6435/files/RO_Logo__White.png?v=1732099770",
      alt: "Rare Ones Logo"
    }
  ]
};

export default function ThorStoreLocatorPage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const updateLogosBasedOnBackground = (): void => {

    if (window.innerWidth > 767) {
      return;
    }
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
  };

  const getLogoSrc = (lightSrc: string, darkSrc: string): string => {
    return isDarkMode ? darkSrc : lightSrc;
  };

  useEffect(() => {
    // Run on mount
    updateLogosBasedOnBackground();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (): void => updateLogosBasedOnBackground();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange); 
    }

    const handleResize = (): void => updateLogosBasedOnBackground();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <div className="Container">
        <div className="Rte">
          <div className="brand-store-locator">
            <h1>{storeLocatorData.title}</h1>
            <p>{storeLocatorData.subtitle}</p>
            <div className="logo-grid">
              {storeLocatorData.brands.map((brand) => (
                <a
                  key={brand.id}
                  href={brand.url}
                  className="brand-logo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo"
                    src={getLogoSrc(brand.lightLogo, brand.darkLogo)}
                    alt={brand.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}