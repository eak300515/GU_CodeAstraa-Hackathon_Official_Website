import "./../styles/KnowUs.css";
import codeAstraaLogo from "../assets/logos/Harry_logo.png";
import { motion } from "framer-motion";

const KnowUs = () => {
  return (
    <div className="knowus-wrapper" id="knowus">
      {/* Logo Centerpiece */}
      <motion.img
        src={codeAstraaLogo}
        alt="Code Astraa Logo"
        className="knowus-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Text Section */}
      <motion.h1
        className="knowus-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        CODE ASTRAA: <span> SPELL. CODE. CONQUER. </span>
      </motion.h1>

      {/* Glassmorphism Card */}
      <motion.div
        className="knowus-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <ul>
          <li>✨ <strong>24 hours</strong> of magical coding</li>
          <li>🔮 All <strong>languages & frameworks</strong> welcome</li>
          <li>🏆 <strong>₹1,00,000 Prize Pool</strong></li>
          <li>👥 <strong>Team Size:</strong> 2-4 members</li>
        </ul>
      </motion.div>

      {/* Why Participate Section */}
      <motion.div
        className="knowus-benefits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h2>Why Participate?</h2>
        <ul>
          <li>⚡ Solve <strong>fun, magical challenges</strong></li>
          <li>🧙‍♂️ Collaborate with <strong>wizard-coders</strong></li>
          <li>🚀 Boost your <strong>portfolio</strong> with unique projects</li>
          <li>🌟 Enjoy a <strong>one-of-a-kind magical experience</strong></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default KnowUs;
