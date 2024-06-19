import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const VideoContainer = () => {
  const observer = useRef<IntersectionObserver | undefined>();
  const synopsis = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showSynopsis, setShowSynopsis] = useState(false);

  useEffect(() => {
    if (synopsis.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsTyping(true);
      });

      observer.current.observe(synopsis.current);
    }

    if (isTyping) {
      const typed = new Typed(synopsis.current, {
        strings: [
          "In the midst of an online study session for their cloud certification exam, two students discuss their struggles with the materials for the exam. Their meeting takes an unexpected turn when a mysterious new participant with a jumbled name joins without warning. Suddenly, their rooms are plunged into darkness, and the enigmatic intruder demands they download the Cloudstrike app or face unknown consequences. Not wanting to risk anything both follow the instructions given.",
        ],
        typeSpeed: 25,
        startDelay: 500,
        showCursor: false,
        onComplete: () => {
          setTimeout(() => {
            setShowVideo(true);
          }, 1000);
        },
      });

      return () => {
        typed.destroy();
        if (observer.current && synopsis.current) {
          observer.current.unobserve(synopsis.current);
        }
      };
    }
  }, [isTyping]);

  return (
    <div
      id="video"
      className="w-screen h-screen flex flex-col gap-4 justify-center items-center"
    >
      <div className="w-3/5">
        {showVideo ? (
          <p
            className="self-start text-lg text-white hover:cursor-pointer underline underline-offset-4"
            onClick={() => {
              setShowVideo(false);
              setShowSynopsis(true);
            }}
          >
            &#8592; read synopsis
          </p>
        ) : showSynopsis ? (
          <p
            className="self-start text-lg text-white hover:cursor-pointer underline underline-offset-4"
            onClick={() => {
              setShowVideo(true);
              setIsTyping(false);
            }}
          >
            &#8592; watch video
          </p>
        ) : null}
      </div>

      {showVideo ? (
        <iframe
          className="z-30 w-3/5 h-3/5"
          src="https://www.youtube.com/embed/uyC1c1b6qj4?si=7N27G7E3AECx6NXD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p ref={synopsis} className="z-30 w-3/5 text-xl text-white">
          {showSynopsis &&
            "In the midst of an online study session for their cloud certification exam, two students discuss their struggles with the materials for the exam. Their meeting takes an unexpected turn when a mysterious new participant with a jumbled name joins without warning. Suddenly, their rooms are plunged into darkness, and the enigmatic intruder demands they download the Cloudstrike app or face unknown consequences. Not wanting to risk anything both follow the instructions given."}
        </p>
      )}
    </div>
  );
};

export default VideoContainer;
