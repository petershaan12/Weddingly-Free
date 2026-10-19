"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountdownTimer from "./Countdown";
import Form from "./Form";
import WishesList from "./WishesList";
import { config } from "@/lib/config";

type WeddingScreenProps = {
  name?: string;
};

const WeddingScreen = ({ name }: WeddingScreenProps) => {
  const [fadeClass, setFadeClass] = useState("opacity-0");
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Untuk fade-in pertama kali
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && audioRef.current) {
      // Play music when "Open" is clicked
      (audioRef.current as HTMLAudioElement).play();
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

  const { ref: slide4Ref, inView: isSlide4InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide5Ref, inView: isSlide5InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide6Ref, inView: isSlide6InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide7Ref, inView: isSlide7InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide8Ref, inView: isSlide8InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide9Ref, inView: isSlide9InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide10Ref, inView: isSlide10InView } = useInView({
    threshold: 0.5,
  });
  const { ref: endRef, inView: isEndInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const video = document.querySelector("iframe");
    if (video) {
      if (isSlide8InView) {
        video.src += "&autoplay=1"; // Mulai video
      } else {
        video.src = video.src.replace("&autoplay=1", ""); // Hentikan video
      }
    }
  }, [isSlide8InView]);

  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${fadeClass} transition-opacity duration-1000`}
    >
      {/* Gambar sisi kiri Wide Untuk Komputer */}
      <div
        className="md:flex justify-center hidden items-end pb-12 w-2/3 h-1/2 md:h-full"
        style={{
          backgroundImage: `url(/foto_1_samping.jpg)`, //refer to base 1st photo
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`bottom-10 left-20 font-ovo text-lg text-white tracking-[5px] uppercase`}
        >
          {config.coupleNames}
        </div>
      </div>

      {/* Konten teks sisi kanan bisa scroll untuk pc */}
      <div className=" md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div
          id="backgroundWedding"
          className=" snap-start  w-full h-screen flex items-center justify-center "
        >
          <div className="text-center p-5 flex flex-col h-full justify-between py-20">
            <div className="gap-y-2 md:gap-y-4 flex flex-col">
              <h5
                className={`text-sm font-legan text-white uppercase tracking-wide fadeMain2 ${isMain2InView ? "active" : ""
                  } `}
                ref={main2Ref}
              >
                The Wedding Of
              </h5>
              <h1
                className={`text-2xl md:text-3xl font-ovo t text-white uppercase fadeMain ${isMainInView ? "active" : ""
                  } `}
                ref={mainRef}
              >
                {config.coupleNames}
              </h1>
              <h5
                className={`text-sm  font-legan text-white uppercase tracking-wide  fadeMain2 ${isMain2InView ? "active" : ""
                  } `}
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
                  className="animate-bounce  mt-5 px-5 py-1 uppercase text-xs border border-white hover:text-white hover:bg-transparent rounded-full bg-white text-black transition"
                  onClick={handleOpen}
                >
                  Open Invitation
                </button>
              ) : (
                <IoIosArrowUp
                  stroke="4"
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
              className={`text-white h-screen flex pt-12 p-5 px-12 snap-start `}
              style={{
                backgroundImage: `url(/slide_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide1Ref}
                className={` ${isSlide1InView ? "active" : ""}  fadeInMove`}
              >
                <h1 className="text-xl md:text-2xl font-ovo tracking-wide text-white uppercase">
                  {config.bibleVerse}
                </h1>
                <p className="text-sm mt-5 font-legan">
                  {config.bibleVerseContent}
                </p>
                <p className="text-6xl mt-5 font-wonder">{config.coupleNames}</p>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className={`text-white h-screen flex items-end pb-16 px-12 snap-start `}
              style={{
                backgroundImage: `url(/slide_2.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Display the content when the button is clicked */}
              <div
                ref={slide2Ref}
                className={`fadeInMove ${isSlide2InView ? "active" : ""}  `}
              >
                <p className="font-legan text-sm my-2">The Groom</p>
                <h1 className="text-xl md:text-3xl text-white  font-ovo">
                  {config.groom}
                </h1>
                <h3 className="font-thesignature text-2xl">About {config.groomNickName},</h3>
                <p className="text-sm mt-5 font-legan text-[#CCCCCC]">
                  {config.groomBio}
                </p>
                <Link
                  href={`https://www.instagram.com/${config.groomInstagram}`}
                  target="_blank"
                  className="cursor-pointer hover:bg-black text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#4E4E4E] w-fit px-4 py-2 text-[#CCCCCC]"
                >
                  <FaInstagram /> {config.groomInstagram}
                </Link>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="snap-start  text-white h-screen flex items-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_3.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide3Ref}
                className={`fadeInMove ${isSlide3InView ? "active" : ""}  `}
              >
                <p className="font-legan text-sm my-2">The Bride</p>
                <h1 className="text-xl md:text-3xl text-white  font-ovo">
                  {config.bride}
                </h1>
                <h3 className="font-thesignature text-2xl">About {config.brideNickName},</h3>
                <p className="text-sm mt-5 font-legan text-[#CCCCCC]">
                  {config.brideBio}
                </p>
                <Link
                  href={`https://www.instagram.com/${config.brideInstagram}`}
                  target="_blank"
                  className="cursor-pointer hover:bg-black text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#4E4E4E] w-fit px-4 py-2 text-[#CCCCCC]"
                >
                  <FaInstagram /> {config.brideInstagram}
                </Link>
              </div>
            </div>
            {/* Slide 4 */}
            <div
              className="snap-start  text-white h-screen pt-8 flex px-12 "
              style={{
                backgroundImage: `url(/slide_4.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <h1
                  ref={slide4Ref}
                  className={`text-xl md:text-5xl  text-white font-ovo fadeInMove ${isSlide4InView ? " active" : ""
                    }`}
                >
                  A journey in love
                </h1>
                <h3
                  ref={slide4Ref}
                  className={`uppercase font-legan text-xl mt-5 mb-2 fadeInMoveSlow ${isSlide4InView ? " active" : ""
                    }`}
                >
                  {config.timeline_1}
                </h3>
                <p
                  ref={slide4Ref}
                  className={`text-xs font-legan text-white fadeInLeftSlow ${isSlide4InView ? "active" : ""
                    }`}
                >
                  {config.timeline_1_content}
                </p>
                <h3
                  ref={slide4Ref}
                  className={`uppercase font-legan text-xl mt-5 mb-2 fadeInMoveSlow ${isSlide4InView ? " active" : ""
                    }`}
                >
                  {config.timeline_2}
                </h3>
                <p
                  ref={slide4Ref}
                  className={`text-xs font-legan text-white fadeInLeftSlow ${isSlide4InView ? " active" : ""
                    }`}
                >
                  {config.timeline_2_content}
                </p>
                <h3
                  ref={slide4Ref}
                  className={`uppercase font-legan text-xl mt-5 mb-2 fadeInMoveSlow ${isSlide4InView ? " active" : ""
                    }`}
                >
                  {config.timeline_3}
                </h3>
                <p
                  ref={slide4Ref}
                  className={`text-xs font-legan text-white fadeInLeftSlow ${isSlide4InView ? " active" : ""
                    }`}
                >
                  {config.timeline_3_content}
                </p>
                <div
                  ref={slide4Ref}
                  className={`relative flex items-center mt-5 fadeInLeft ${isSlide4InView ? " active" : ""
                    }`}
                >
                  <hr className="w-[120px] mx-2 border-t border-gray-300" />
                  <span className="px-2 font-thesignature text-3xl">
                    {config.coupleNames}
                  </span>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
            <div
              className="snap-start  text-white h-screen flex flex-col items-center px-12 "
              style={{
                backgroundImage: `url(/slide_5.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide5Ref}
                className={` ${isSlide5InView ? "active" : ""
                  }  fadeInMove flex items-center flex-col pt-32 `}
              >
                <h3 className="uppercase font-legan text-xs tracking-wide mt-5 mb-2">
                  save our date
                </h3>
                <h1 className="text-2xl w-[200px] text-center text-white  font-ovo uppercase">
                  {new Date(config.eventDate).toLocaleDateString("en-US", {
                    weekday: "long",
                  })} <br />  {new Date(config.eventDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
                {config.holyMatrimony.enabled && (
                  <div className="mt-5 mx-auto flex flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Holy Matrimony <br /> {config.holyMatrimony.time}
                    </h3>
                    <p className="text-sm text-center  font-legan text-white">
                      {config.holyMatrimony.place} <br /> {config.holyMatrimony.place_details}
                    </p>
                    <Link
                      href={config.holyMatrimony.googleMapsLink}
                      target="_blank"
                      className="cursor-pointer hover:text-white/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-white"
                    >
                      Google Maps
                    </Link>
                  </div>
                )}

                {config.weddingReception.enabled && (
                  <div className="mt-5 mx-auto flex  flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Wedding Reception <br /> {config.weddingReception.time}
                    </h3>
                    <p className="text-sm text-center  font-legan text-white">
                      {config.weddingReception.place} <br /> {config.weddingReception.place_details}
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
            {/* Slide 6 */}
            <div
              className="snap-start  text-white h-screen flex flex-col items-center justify-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_6.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide6Ref}
                className={` ${isSlide6InView ? "active" : ""
                  }  fadeInMove flex items-center flex-col`}
              >
                <h1 className="text-2xl text-center text-white  font-ovo">
                  ALMOST TIME FOR OURCELEBRATION
                </h1>
                {/* Countdown Timer */}
                <CountdownTimer />
              </div>
            </div>
            {/* Slide 7 */}
            {config.livestreaming.enabled && (
              <div
                className="snap-start  text-white h-screen flex flex-col justify-between pt-16 pb-32 px-12 "
                style={{
                  backgroundImage: `url(/foto_1_samping.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1
                  ref={slide7Ref}
                  className={`text-2xl text-white  font-ovo fadeInMoveSlow ${isSlide7InView ? "active" : ""
                    }`}
                >
                  JOIN OUR EXCLUSIVE LIVE STREAMING EVENT
                </h1>

                <div
                  className={`mt-5 mx-auto flex flex-col fadeInMove ${isSlide7InView ? "active" : ""
                    }`}
                  ref={slide7Ref}
                >
                  <h3 className="uppercase font-ovo text-sm mt-5 mb-2">
                    {new Date(config.eventDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <br /> {config.livestreaming.time}
                  </h3>
                  <p className="text-sm font-legan text-white">
                    {config.livestreaming.detail}
                  </p>
                  <Link
                    href={config.livestreaming.link}
                    target="_blank"
                    className="cursor-pointer hover:text-white/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#3B3B3B] w-fit px-6 py-2 text-white"
                  >
                    Join Live Streaming
                  </Link>
                </div>
              </div>)}
            {/* SLIDE 8 */}
            {config.prewedding.enabled && (
              <div
                className="snap-start text-white h-screen flex flex-col justify-center pt-16 pb-16 px-8 "
                style={{
                  backgroundImage: `url(/slide_8.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  ref={slide8Ref}
                  className={`${isSlide8InView ? "active" : ""} fadeInMove `}
                >
                  <h1 className="text-3xl text-white  font-ovo text-center uppercase">
                    Unveiling Our Prewedding Story
                  </h1>
                  <div
                    className="mt-10 mx-auto w-full max-w-2xl relative"
                    style={{ paddingBottom: "56.25%", height: 0 }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${config.prewedding.link}?autoplay=1&mute=1&loop=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="-mt-12 w-72 transform skew-x-6 drop-shadow-sm">
                    <p className="text-3xl font-thesignature text-white/80 ">
                      {config.prewedding.detail}
                    </p>
                  </div>
                </div>
              </div>)}

            {/* SLIDE 9 */}
            {config.rsvp.enabled && (
            <div
              className="snap-start text-white h-screen flex flex-col justify-center pt-16 pb-16 px-8"
              style={{
                backgroundImage: `url(/slide_9.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide9Ref}
                className={`${isSlide9InView ? "active" : ""} fadeInMove`}
              >
                <h1 className="text-3xl text-white font-ovo text-center uppercase">
                  RSVP AND WISHES
                </h1>
                <p className="text-sm font-legan text-white/80 text-center">
                {config.rsvp.detail}
                </p>

                <Form />
              </div>
            </div>
            )}

            {/* SLIDE 10 */}
            <div
              className="snap-start text-white h-screen flex flex-col justify-center pt-16 pb-16 px-8"
              style={{
                backgroundImage: `url(/slide_9.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide10Ref}
                className={`${isSlide10InView ? "active" : ""} fadeInMove`}
              >
                <h1 className="text-3xl text-white font-ovo text-center uppercase">
                  Wishes
                </h1>
                <WishesList />
              </div>
            </div>

            {/* SLIDE AKHIR */}
            <div
              className="snap-start text-white h-screen flex flex-col justify-end pt-16 pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_7.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={endRef}
                className={` ${isEndInView ? "active" : ""} fadeInMove `}
              >
                <h1 className="text-3xl text-white  font-ovo text-center uppercase">
                  {config.thankyou}
                </h1>

                <div className="mt-5 mx-auto flex flex-col ">
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
                  Created By Peter Shaan
                </p>
                <p className="text-xs">© All rights reserved by petershaan</p>
              </footer>
            </div>
          </>
        )}
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="/music/wedding_song.mp3" preload="auto" />
    </div>
  );
};

export default WeddingScreen;
