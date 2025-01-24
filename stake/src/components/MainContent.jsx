import React from "react";
import "../components/MainContent.css";
import Header from "./Header";
import Banner from "./Banner";
import newReleasesIcon from ".././assets/new-releases-icon.BWnV6JM9.svg"; // Adjust the path based on the file's location
import ThirdComponent from "./thirdcomponent";
import FourthComponent from "./fourthcomponent";
import { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import FifthComponent from "./fifth";
import SixComponent from "./sixth";
const MainContent = ({ componentData }) => {
  console.log(componentData);
  return (
    <main class="min-h-screen flex flex-col">
      <Header />
      <Banner
        data={
          componentData
            ? componentData.find((service) => service.title === "banner")
            : null
        }
      />
      <section class="  w-full py-7 md:py-9 lg:px-8 m-auto flex flex-col content-center mt-24 bg-[#1a2c38]">
        <div class="slider  overflow-hidden w-full max-w-[1200px] relative m-auto">
          <ul class="slider-track flex items-center animate-slide">
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/drake.C1S9VFRt.svg"
                alt="Drake"
                class="w-[100px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/stake-f1-team-partner-label.Dn-6p8lJ.svg"
                alt="Stake F1 Team"
                class="w-[51px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/ufc.BlG4twI0.svg"
                alt="UFC"
                class="w-[78px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/davis-cup.2ozNmnfW.svg"
                alt="Davis Cup"
                class="w-[101px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/everton.CkPHQEMd.svg"
                alt="Everton"
                class="w-[55px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/billie-jean-king-cup.DFDdNsJj.svg"
                alt="Billie Jean King Cup"
                class="w-[101px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/juventude.DYj6mKZE.svg"
                alt="Juventude"
                class="w-[49px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/team-secret.BH46cAxZ.svg"
                alt="Team Secret"
                class="w-[70px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/enyimba-fc.Bk1l78K5.svg"
                alt="Enyimba FC"
                class="w-[58px]"
              />
            </li>

            <li>
              <img
                src="https://stake.com/_app/immutable/assets/stake-f1-team-partner-label.Dn-6p8lJ.svg"
                alt="Stake F1 Team"
                class="w-[51px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/ufc.BlG4twI0.svg"
                alt="UFC"
                class="w-[78px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/davis-cup.2ozNmnfW.svg"
                alt="Davis Cup"
                class="w-[101px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/everton.CkPHQEMd.svg"
                alt="Everton"
                class="w-[55px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/billie-jean-king-cup.DFDdNsJj.svg"
                alt="Billie Jean King Cup"
                class="w-[101px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/juventude.DYj6mKZE.svg"
                alt="Juventude"
                class="w-[49px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/team-secret.BH46cAxZ.svg"
                alt="Team Secret"
                class="w-[70px]"
              />
            </li>
            <li>
              <img
                src="https://stake.com/_app/immutable/assets/enyimba-fc.Bk1l78K5.svg"
                alt="Enyimba FC"
                class="w-[58px]"
              />
            </li>
          </ul>
        </div>
      </section>
      <section
        className="bg-grey-800 px-4 md:px-8 md:pt-4 pt-8"
        style={{ maxHeight: "400px" }}
      >
        {/* Wrapper for Content */}
        <div className="  overflow-hidden md:flex flex-col  px-4 md:px-8 ">
          {/* Left Section: Text and Categories */}
          <div className=" banner2 min-h-[390px] w-full inset-0 overflow-hidden  m-auto mr-1  max-w-[1400px]">
            {/* Text Section */}
            <div className=" rounded-lg  justify-between ">
              {/* Text Section */}
              <div>
                <h2 className="font-bold text-left text-4xl text-white leading-tight mt-10 ml-20">
                  Thousands of thrilling games. <br />
                  Thousands of ways to win big.
                </h2>
              </div>

              {/* Categories Section */}
              <div class="w-1/2 gap-x-4 gap-y-4 isolate grid md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid-cols-2 md:my-6 mb-2 md:mb-6 md:py-5 p-4 rounded backdrop-blur-md bg-black/15 absolute ml-10">
                {/* New Releases */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Slots */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Live Casino */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Table Games */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Section: Image */}
          <div
            className="absolute right-10"
            style={{ transform: "translateY(-10px)" }}
          >
            <img
              className="self-end hidden md:block"
              src="https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=382&h=400&fit=min&auto=format"
              alt="casino hero banner"
              loading="lazy"
              decoding="async"
              srcSet="https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=382&h=400&fit=min&auto=format 382w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=640&h=670&fit=min&auto=format 640w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=750&h=785&fit=min&auto=format 750w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=764&h=800&fit=min&auto=format 764w"
              sizes="(min-width: 382px) 382px, 100vw"
              style={{
                objectFit: "cover",
                maxWidth: "382px",
                maxHeight: "400px",
                aspectRatio: "0.955 / 1",
                width: "100%",
              }}
            />
          </div>
        </div>
      </section>
      <section
        className="bg-grey-800 px-4 md:px-8 md:pt-4 pt-8"
        style={{ maxHeight: "400px" }}
      >
        {/* Wrapper for Content */}
        <div className="mt-5  overflow-hidden md:flex flex-col  px-4 md:px-8 ">
          {/* Left Section: Text and Categories */}
          <div className=" banner3 min-h-[390px] w-full inset-0 overflow-hidden  m-auto mr-1  max-w-[1400px]">
            {/* Text Section */}
            <div className=" rounded-lg  justify-between ">
              {/* Text Section */}
              <div>
                <h2 className="font-bold text-left text-4xl text-white leading-tight mt-10 ml-20">
                  Thousands of thrilling games. <br />
                  Thousands of ways to win big.
                </h2>
              </div>

              {/* Categories Section */}
              <div class="w-1/2 gap-x-4 gap-y-4 isolate grid md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid-cols-2 md:my-6 mb-2 md:mb-6 md:py-5 p-4 rounded backdrop-blur-md bg-black/15 absolute ml-10">
                {/* New Releases */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Slots */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Live Casino */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
                {/* Table Games */}
                <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                  <img
                    src={newReleasesIcon} // Use the imported image
                    alt="New Releases"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Section: Image */}
          <div
            className="absolute right-10"
            style={{ transform: "translateY(-10px)" }}
          >
            <img
              className="self-end hidden md:block"
              src="https://mediumrare.imgix.net/unauth-sportsbook-hero-banner-en.png?w=382&h=400&fit=min&auto=format"
              alt="casino hero banner"
              loading="lazy"
              decoding="async"
              srcSet="https://mediumrare.imgix.net/unauth-sportsbook-hero-banner-en.png?w=382&h=400&fit=min&auto=format 382w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=640&h=670&fit=min&auto=format 640w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=750&h=785&fit=min&auto=format 750w,
        https://mediumrare.imgix.net/unauth-casino-hero-banner-en.png?w=764&h=800&fit=min&auto=format 764w"
              sizes="(min-width: 382px) 382px, 100vw"
              style={{
                objectFit: "cover",
                maxWidth: "382px",
                maxHeight: "400px",
                aspectRatio: "0.955 / 1",
                width: "100%",
              }}
            />
          </div>
        </div>
      </section>

      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixComponent />
    </main>
  );
};

export default MainContent;
