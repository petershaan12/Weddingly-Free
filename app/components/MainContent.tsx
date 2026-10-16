"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountdownTimer from "./Countdown";
import { config } from "@/lib/config";

type WeddingScreenProps = {
  name?: string;
};

const WeddingScreen = ({ name }: WeddingScreenProps) => {
  const [fadeClass, setFadeClass] = useState("opacity-0");
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fade in when the page first loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);

    if (!isOpen && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Unable to play audio:", error);
      });
    }
  };

  const { ref: mainRef, inView: isMainInView } = useInView({
    threshold: 0.5,
  });

  const { ref: main2Ref, inView: isMain2InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide1Ref, inView: isSlide1InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide2Ref, inView: isSlide2InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide3Ref, inView: isSlide3InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide5Ref, inView: isSlide5InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide6Ref, inView: isSlide6InView } = useInView({
    threshold: 0.5,
  });

  const { ref: endRef, inView: isEndInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${fadeClass} transition-opacity duration-1000`}
    >
      {/* Left-side hero image for desktop */}
      <div
        className="md:flex justify-center hidden items-end pb-12 w-2/3 h-1/2 md:h-full"
        style={{
          backgroundImage: `url(/hero2.JPG)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bottom-10 left-20 font-ovo text-lg text-white tracking-[5px] uppercase">
          {config.coupleNames}
        </div>
      </div>

      {/* Scrollable wedding invitation content */}
      <div className="md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div
          id="backgroundWedding"
          className="snap-start w-full h-screen flex items-center justify-center"
        >
          <div className="text-center p-5 flex flex-col h-full justify-between py-20">
            <div className="gap-y-2 md:gap-y-4 flex flex-col">
              <h5
                className={`text-sm font-legan text-white uppercase tracking-wide fadeMain2 ${
                  isMain2InView ? "active" : ""
                }`}
                ref={main2Ref}
              >
                The Wedding Talk Of
              </h5>

              <h1
                className={`text-2xl md:text-3xl font-ovo text-white uppercase fadeMain ${
                  isMainInView ? "active" : ""
                }`}
                ref={mainRef}
              >
                {config.coupleNames}
              </h1>

              <h5
                className={`text-sm font-legan text-white uppercase tracking-wide fadeMain2 ${
                  isMain2InView ? "active" : ""
                }`}
                ref={main2Ref}
              >
                {new Date(config.eventDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
            </div>

            <div>
              <p className="mt-5 text-lg uppercase font-xs tracking-widest text-white">
                {name ? `Dear ${name},` : "Welcome"}
              </p>

              {!isOpen ? (
                <button
                  className="animate-bounce mt-5 px-5 py-1 uppercase text-xs border border-white hover:text-white hover:bg-transparent rounded-full bg-white text-black transition"
                  onClick={handleOpen}
                >
                  Open Invitation
                </button>
              ) : (
                <IoIosArrowUp
                  className="mx-auto mt-20 animate-upDown text-white"
                />
              )}
            </div>
          </div>
        </div>

        {isOpen && (
          <>
            {/* Slide 1 */}
            <div
              className="text-white h-screen flex pt-12 p-5 px-12 snap-start"
              style={{
                backgroundImage: `url(/slide-1-1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide1Ref}
                className={`${isSlide1InView ? "active" : ""} fadeInMove`}
              >
                <h1 className="text-xl md:text-2xl font-ovo tracking-wide text-white uppercase">
                  {config.bibleVerse}
                </h1>

                <p className="text-sm mt-5 font-legan">
                  {config.bibleVerseContent}
                </p>

                <p className="text-6xl mt-5 font-wonder">
                  {config.coupleNames}
                </p>
              </div>
            </div>

            {/* Slide 2: Groom */}
            <div
              className="text-white h-screen flex items-end pb-16 px-12 snap-start"
              style={{
                backgroundImage: `url(/slide-2.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide2Ref}
                className={`fadeInMove ${isSlide2InView ? "active" : ""}`}
              >
                <p className="font-legan text-sm my-2">The Groom</p>

                <h1 className="text-xl md:text-3xl text-white font-ovo">
                  {config.groom}
                </h1>

                <h3 className="font-thesignature text-2xl">
                  {config.groomNickName},
                </h3>
              </div>
            </div>

            {/* Slide 3: Bride */}
            <div
              className="snap-start text-white h-screen flex items-end pb-16 px-12"
              style={{
                backgroundImage: `url(/slide-3.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide3Ref}
                className={`fadeInMove ${isSlide3InView ? "active" : ""}`}
              >
                <p className="font-legan text-sm my-2">The Bride</p>

                <h1 className="text-xl md:text-3xl text-white font-ovo">
                  {config.bride}
                </h1>

                <h3 className="font-thesignature text-2xl">
                  {config.brideNickName},
                </h3>
              </div>
            </div>

            {/* Slide 4: Save the date */}
            <div
              className="snap-start text-white h-screen flex flex-col items-center px-12"
              style={{
                backgroundImage: `url(/slide-4.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide5Ref}
                className={`${
                  isSlide5InView ? "active" : ""
                } fadeInMove flex items-center flex-col pt-32`}
              >
                <h3 className="uppercase font-legan text-xs tracking-wide mt-5 mb-2">
                  Save the date
                </h3>

                <h1 className="text-2xl w-[200px] text-center text-white font-ovo uppercase">
                  {new Date(config.eventDate).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                  <br />
                  {new Date(config.eventDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>

                {config.weddingReception.enabled && (
                  <div className="mt-5 mx-auto flex flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Wedding Talk
                      <br />
                      {config.weddingReception.time}
                    </h3>

                    <p className="text-sm text-center font-legan text-white">
                      {config.weddingReception.place}
                      <br />
                      {config.weddingReception.place_details}
                    </p>

                    <Link
                      href={config.weddingReception.googleMapsLink}
                      target="_blank"
                      className="cursor-pointer hover:text-white/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-white"
                    >
                      Google Maps
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Slide 6: Countdown */}
            <div
              className="snap-start text-white h-screen flex flex-col items-center justify-end pb-16 px-12"
              style={{
                backgroundImage: `url(/slide-6.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide6Ref}
                className={`${
                  isSlide6InView ? "active" : ""
                } fadeInMove flex items-center flex-col`}
              >
                <h1 className="text-2xl text-center text-white font-ovo">
                  ALMOST TIME FOR OUR WEDDING TALK DAY
                </h1>

                <CountdownTimer />
              </div>
            </div>

            {/* Thank-you slide */}
            <div
              className="snap-start text-white h-screen flex flex-col justify-end pt-16 pb-16 px-12"
              style={{
                backgroundImage: `url(/slide-9.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={endRef}
                className={`${isEndInView ? "active" : ""} fadeInMove`}
              >
                <h1 className="text-3xl text-white font-ovo text-center uppercase">
                  {config.thankyou}
                </h1>

                <div className="mt-5 mx-auto flex flex-col">
                  <p className="text-sm font-legan text-white text-center">
                    {config.thankyouDetail}
                  </p>

                  <p className="text-sm rounded-full text-center font-ovo mt-5 px-6 py-2 text-white uppercase">
                    {config.coupleNames}
                  </p>
                </div>
              </div>

              <footer className="flex flex-col items-center mt-8">
                <p className="text-[0.5rem] uppercase text-center">
                  Made from forked free wedding template
                </p>

                <p className="text-xs">
                  © All rights reserved by the owner
                </p>
              </footer>
            </div>
          </>
        )}
      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        src="/music/wedding_song.mp3"
        preload="auto"
      />
    </div>
  );
};

export default WeddingScreen;
