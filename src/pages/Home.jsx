import { useRef, useState } from "react";
import { motion } from "framer-motion";
import videoBg from "../assets/Hogwarts.mp4";
import "./../styles/Home.css";

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="home">
      {/* Left-Side Navigation */}
      <nav className="side-nav">
        <ul>
          <li><a href="#Schedule">Schedule</a></li>
          <li><a href="#knowus">Know Us</a></li>
          <li><a href="#spells">Spells</a></li>
          <li><a href="#Prizing">Prizing</a></li>
        </ul>
      </nav>

      {/* Video Background */}
      <video ref={videoRef} autoPlay loop playsInline className="video-bg" muted={isMuted}>
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Hero Content */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        C O D E A s T R A A !
      </motion.h1>

      <motion.h6 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}>
        Hackardium Leviosa
      </motion.h6>

      {/* Sound Toggle Button */}
      <button className="sound-toggle" onClick={toggleSound}>
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>

      <motion.button 
  className="magic-button"
  whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px gold" }}
  onClick={() => window.open("https://unstop.com/p/codeastraa-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446795", "_blank")}
>
  Register Now
</motion.button>

    </div>
  );
};

export default Home;
