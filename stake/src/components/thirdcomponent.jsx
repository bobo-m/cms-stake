import React, { useState, useEffect } from "react";
import "../components/third.css";
import newReleasesIcon from ".././assets/new-releases-icon.BWnV6JM9.svg"; // Adjust the path based on the file's location

const RtpItem = ({ icon, title, description, progress, isActive }) => (
  <div
    className={`rtp-item base-transition flex flex-row p-4 pb-5 rounded relative overflow-hidden ${
      isActive ? "bg-grey-700" : "bg-grey-800"
    }`}
  >
    <img src={newReleasesIcon} alt={`${title} icon`} className="max-w-[40px]" />
    <div className="ml-4 flex flex-col justify-center">
      <p className="weight-bold line-height-default align-left size-lg text-size-lg variant-highlighted with-icon-space">
        {title}
      </p>
      {isActive && (
        <div className="play-text">
          <span className="weight-normal line-height-default align-left size-base text-size-base variant-highlighted with-icon-space">
            {description}
          </span>
        </div>
      )}
    </div>
    {isActive && (
      <div className="play-bar p-1 bg-grey-500 w-full absolute bottom-0 left-0">
        <div
          className="play-bar-progress ease-linear bg-blue-500 h-full absolute top-0 left-0 transition-all duration-[100ms]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )}
  </div>
);
const VideoPlayer = ({ poster, webmSrc, mp4Src, zIndex, isPlaying }) => (
  <video
    autoPlay={isPlaying}
    muted
    loop
    poster={poster}
    playsInline
    className="top-0 left-0 w-full h-full aspect-square relative"
    style={{ zIndex }}
  >
    <source src={webmSrc} type="video/webm" />
    <source src={mp4Src} type="video/mp4" />
  </video>
);

const ThirdComponent = () => {
  const rtpItems = [
    {
      icon: "https://stake.com/_app/immutable/assets/bonus-icon.BDU3QLVQ.svg",
      title: "Bonus boosts",
      description:
        "Weekly boosts and monthly bonuses mean you’ll get rewarded the more you play top Casino games and bet on your favourite Sports.",
    },
    {
      icon: "https://stake.com/_app/immutable/assets/raffle-icon.ec7wmZpx.svg",
      title: "Raffles & races",
      description:
        "Get in the draw to win 75K each week. Plus score big on daily races.",
    },
    {
      icon: "https://stake.com/_app/immutable/assets/promotion-icon.CrYq-DC8.svg",
      title: "Promotions",
      description:
        "Make the most from our Casino promotions and Sports betting bonuses which are updated weekly.",
    },
    {
      icon: "https://stake.com/_app/immutable/assets/return-icon.CgJwlR43.svg",
      title: "High return-to-player (RTP)",
      description:
        "With enhanced RTP percentages, you stand a chance to win big every time you play.",
    },
  ];

  const videos = [
    {
      poster: "https://mediumrare.imgix.net/unauth-rtp-bonuses-en.png",
      webmSrc: "https://mediumrare-videos.imgix.net/bonus.webm?fm=mp4",
      mp4Src: "https://mediumrare-videos.imgix.net/bonus.mp4?fm=mp4",
      zIndex: 10,
    },
    {
      poster:
        "https://mediumrare.imgix.net/unauth-rtp-raffles-and-races-en.png",
      webmSrc: "https://mediumrare-videos.imgix.net/raffles.webm?fm=mp4",
      mp4Src: "https://mediumrare-videos.imgix.net/raffles.mp4?fm=mp4",
      zIndex: 4,
    },
    {
      poster: "https://mediumrare.imgix.net/unauth-rtp-promotions-en.png",
      webmSrc: "https://mediumrare-videos.imgix.net/promotions.webm?fm=mp4",
      mp4Src: "https://mediumrare-videos.imgix.net/promotions.mp4?fm=mp4",
      zIndex: 3,
    },
    {
      poster: "https://mediumrare.imgix.net/unauth-rtp-return-to-player-en.png",
      webmSrc: "https://mediumrare-videos.imgix.net/rtp.webm?fm=mp4",
      mp4Src: "https://mediumrare-videos.imgix.net/rtp.mp4?fm=mp4",
      zIndex: 2,
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the active item
  const [progress, setProgress] = useState(0); // Track progress percentage
  const videoDuration = 10000; // Duration of each video in milliseconds

  useEffect(() => {
    // Video switching logic
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, videoDuration);

    return () => clearInterval(videoInterval);
  }, [videos.length]);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Reset progress and move to the next video
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rtpItems.length);
          return 0;
        }
        return prev + 3; // Increase by 2% per tick for faster progress
      });
    }, videoDuration / 100); // Adjust interval to match the desired speed

    return () => clearInterval(progressInterval);
  }, [rtpItems.length]);

  return (
    <section className="bg-grey-800 px-4 md:px-8 py-8 md:py-12">
      <div className="m-auto flex flex-col md:gap-6 gap-5 max-w-[1200px]">
        <h2 className="weight-bold line-height-normal text-center text-4xl text-white px-8 mt-10 mb-10">
          Enjoy the best odds with up to 99.5% return-to-player games
        </h2>
        <div className="flex flex-row md:gap-[64px]">
          <div className="flex flex-col gap-3">
            {rtpItems.map((item, index) => (
              <RtpItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                progress={index === currentIndex ? progress : 0} // Progress only for the current item
                isActive={index === currentVideoIndex} // Highlight the current video
              />
            ))}
          </div>
          {/* Video Section */}
          <div className="relative max-w-[568px] w-full h-full">
            {videos.map((video, index) =>
              currentVideoIndex === index ? (
                <VideoPlayer
                  key={index}
                  poster={video.poster}
                  webmSrc={video.webmSrc}
                  mp4Src={video.mp4Src}
                  zIndex={video.zIndex}
                  isPlaying={currentVideoIndex === index}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdComponent;
