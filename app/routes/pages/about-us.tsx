import type { Route } from "../+types/home";
import "../../styles/about-us.css";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutData } from "~/data/aboutData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - The House Of Rare" },
    {
      name: "description",
      content: "The House Of Rare is a pioneering force in the Indian fashion landscape. Founded in 2015 by Mr. and Mrs. Poddar.",
    },
  ];
}

export default function AboutUsPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let imageSwiper: Swiper | null = null;
    let fullSwiper: Swiper | null = null;

    // First Slider
    const imageWrapper = document.querySelector(
      ".linen-image-wrapper"
    );

    if (imageWrapper && window.innerWidth > 767) {
      const slides =
        imageWrapper.querySelectorAll(".linen-image-slide");

      if (slides.length > 2) {
        imageSwiper = new Swiper(imageWrapper as HTMLElement, {
          modules: [Autoplay],
          speed: 400,
          slidesPerView: 2,
          spaceBetween: 5,
          autoHeight: true,
          loop: true,
          autoplay: {
            delay: 2000,
          },
        });
      }
    }

    // Second Slider
    const fullSlider =
      document.querySelector(".full-slider");

    if (fullSlider) {
      fullSwiper = new Swiper(
        fullSlider as HTMLElement,
        {
          modules: [Autoplay],
          speed: 400,
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
          loop: true,
          autoplay: {
            delay: 2000,
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          },
        }
      );
    }

    // Slider bottom text animation (add/remove "visible" class on scroll)
    const sliderBottomText = document.querySelector(
      ".slider-bottom-text .animation-wrapper"
    );

    if (sliderBottomText) {
      gsap.fromTo(
        sliderBottomText,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".slider-bottom-text",
            start: "top 85%",
            toggleClass: "visible",
            once: true, // ensures it behaves like Shopify "reveal once"
          },
        }
      );
    }

    // Text animation
    const paragraph =
      document.querySelector(".right-sub-title p");

    if (paragraph) {
      const darkMode =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      gsap.timeline({
        scrollTrigger: {
          trigger: ".right-sub-title",
          start: "top center",
          end: "bottom 80%",
          scrub: 0.1,
        },
      }).to(paragraph, {
        color:
          window.innerWidth <= 768 && darkMode
            ? "#d9d9d9"
            : "#000000",
      });
    }

    return () => {
      imageSwiper?.destroy(true, true);
      fullSwiper?.destroy(true, true);

      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };
  }, []);
  return (
    <section className="about-us-page">
      {/* Banner Section */}
      <div className="banner-wrapper">
        <div className="container">
          {/* Desktop Image */}
          <div className="image-wrapper xs-hide">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/FIRST_IMAGE_HERO_ABOUT_US.jpg?v=1722838071"
              alt="About Us Hero"
              className="img-fluid"
              loading="lazy"
            />
          </div>

          {/* Mobile Image */}
          <div className="image-wrapper xs-show">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/APP_ABOUT_US.jpg?v=1722839321"
              alt="About Us Hero Mobile"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="about-us-page-wrapper about-us-page-wrapper-js">
        <div className="about-us-page-inner">
          {/* Who We Are Section */}
          <div className="page-top-content-wrapper">
            <div className="page-content-inner">
              <div className="wo-we-are-wrapper">
                <div className="right-content">
                  <div className="right-text">
                    <div className="right-sub-title">
                      <p>The House of Rare is a pioneering force in the Indian fashion landscape. Founded in 2015 by Mr. and Mrs. Poddar, our vision is to celebrate individuality and challenge societal norms. With brands like Rareism for women, Rare Rabbit for men, and Rare Ones for children, we aim to redefine fashion for the entire family.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome to the Burrow Section */}
              <div className="linen-love-affair-wrapper">
                <div className="linen-love-affair-inner">
                  <div className="title-and-description">
                    <p className="linen-title">
                      {aboutData.linenTitle}
                    </p>
                    <p className="linen-sub-title">
                      {aboutData.linenSubText}
                    </p>
                  </div>
                  <div className="linen-image-wrapper swiper">
                    <div className="swiper-wrapper">
                      {aboutData.linenImages.map((image, index) => (
                        <div className="swiper-slide linen-image-slide" key={index}>
                          <img src={image.image} alt={image.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proudly Made In Bharath Bar */}
          <div className="linen-bottom-bar">
            <div className="linen-bottom-bar-inner">
              <p>{aboutData.linenBottomText}</p>
            </div>
          </div>

          {/* Full Image Section */}
          <div className="linen-full-image">
            <div
              className="linen-background-image"
              style={{
                backgroundImage: `url(${aboutData.backgroundImage})`,
                backgroundPosition: "center right",
              }}
            ></div>
            <div className="linen-bottom-image xs-hide">
              <img
                src={aboutData.linenBottomImage}
                alt=""
                loading="lazy"
              />

              <div className="text-over-image">
                <p>{aboutData.textOverImage}</p>
              </div>
            </div>
            <div className="linen-bottom-wrapper xs-show">
              <p className="linen-mobile-text">
                {aboutData.linenMobileText}
              </p>

              <p className="linen-mobile-text-over-image">
                {aboutData.textOverImage}
              </p>
            </div>
          </div>

          {/* Full Slider Section */}
          <div className="full-slider-wrapper">
            <div className="full-slider-inner">
              <div className="full-slider swiper">
                <div className="swiper-wrapper">
                  {aboutData.sliderImages.map((slide, index) => (
                    <div
                      key={index}
                      className="swiper-slide"
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt ?? ""}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-bottom-text">
                <p className="animation-wrapper">
                  {aboutData.sliderBottomText}
                </p>
              </div>
            </div>
          </div>

          {/* Store Locator Section */}
          <div className="store-locator-wrapper">
            <div className="store-locator-inner">
              <div className="store-locator-image">
                <img
                  src={aboutData.storeLocatorImage}
                  alt="Store Locator"
                  className="light-theme-gif"
                  loading="lazy"
                />
                <img
                  src={aboutData.storeLocatorImageDark}
                  alt="Store Locator"
                  className="dark-theme-gif"
                  loading="lazy"
                />
              </div>
              <div className="store-locator-title-btn">
                <p className="store-locator-title">
                  {aboutData.storeLocatorText}
                </p>
                <a
                  href={aboutData.storeLocatorBtnLink}
                  className="store-locator-btn Button Button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {aboutData.storeLocatorBtnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}