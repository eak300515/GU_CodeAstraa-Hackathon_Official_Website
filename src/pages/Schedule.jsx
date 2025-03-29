import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Wand, Trophy } from "lucide-react";
import "./../styles/Schedule.css"; // Import the magical styles

const scheduleData = [
  {
    title: "Round 1: Ideation & Prototype Submission",
    icon: <BookOpen size={24} />,
    details: [
      "Teams submit a detailed idea document & basic prototype.",
      "Evaluation Criteria: Innovation, feasibility, and technical approach.",
      "Elimination: 70% of teams eliminated. The top 30% progress to Round 2.",
    ],
  },
  {
    title: "Round 2: MVP Development & Presentation",
    icon: <Wand size={24} />,
    details: [
      "Teams develop a Minimum Viable Product (MVP) and present it.",
      "Evaluation Criteria: Functionality, scalability, and UI/UX.",
      "Elimination: 50% of remaining teams eliminated. The top 50% move to the final round.",
    ],
  },
  {
    title: "Round 3: Final Pitch & Demo",
    icon: <Trophy size={24} />,
    details: [
      "Teams showcase their fully developed solution to the judges.",
      "Evaluation Criteria: Technical performance, business viability, and teamwork.",
      "The winners and runners-up are selected based on final scores.",
    ],
  },
];

const Schedule = () => {
  return (
    <div className="schedule-wrapper">
      {/* Blurred Background */}
      <div className="schedule-bg"></div>

      <div className="schedule-container">
        <h2 className="schedule-title">🏰 The Magical Hackathon Schedule ✨</h2>
        <div className="schedule-content">
          {scheduleData.map((round, index) => (
            <motion.div
              key={index}
              className="schedule-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="schedule-header">
                <span className="icon">{round.icon}</span>
                <h3 className="schedule-round">{round.title}</h3>
              </div>
              <ul className="schedule-details">
                {round.details.map((detail, i) => (
                  <li key={i} className="schedule-item">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
