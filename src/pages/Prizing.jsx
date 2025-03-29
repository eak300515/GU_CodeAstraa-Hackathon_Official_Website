import "./../styles/Prizing.css";
import prizeVideo from "../assets/prize-bg.mp4"; // Add a relevant video

const Prizing = () => {
  return (
    <div className="prizing-wrapper" id="Prizing">
      {/* Background Video */}
      <video autoPlay loop muted className="prizing-video">
        <source src={prizeVideo} type="video/mp4" />
      </video>

      {/* Prizing Cards Container */}
      <div className="prizing-container">
        <h2 className="prizing-title">🏆 Prize & Rewards (Total ₹1,00,000)</h2>

        <div className="prizing-grid">
          {/* 🥇 Winner */}
          <div className="prize-card first">
            <h3>🥇 Winner</h3>
            <p>₹50,000 + Trophy & Certificate</p>
          </div>

          {/* 🥈 Runner-up */}
          <div className="prize-card second">
            <h3>🥈 Runner-up</h3>
            <p>₹30,000 + Certificate</p>
          </div>

          {/* 🥉 Third Place */}
          <div className="prize-card third">
            <h3>🥉 Third Place</h3>
            <p>₹20,000 + Certificate</p>
          </div>

          {/* 🎖 Special Category Awards */}
          <div className="prize-card special">
            <h3>🎖 Special Category Awards</h3>
            <p>Swags & Goodies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizing;
