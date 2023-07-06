import React from "react";
import "../styles/LandingPage.css";
import GalleryCard from "../components/GalleryCard";
const LandingPage = () => {
  return (
    <div className="Wrapper">
      <h1
        style={{
          color: "lightgreen",
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Chuck Norries
      </h1>
      {/* CARDS COMPONENT */}
      <GalleryCard></GalleryCard>
    </div>
  );
};

export default LandingPage;
