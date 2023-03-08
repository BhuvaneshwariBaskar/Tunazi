import React, { useState } from "react";

const LibName = () => {
  const [libName, setLibName] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        background: "#000",
        opacity: 0.7,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "40vw",
          height: "30vh",
          background: "#fff",
        }}
      >
        <div
          style={{ border: "2px solid #cecece", width: "80%", height: "80%"}}
        >
          <input
            type="text"
            name="libname"
            id="libname"
            placeholder="playlist name"
            onChange={(e) => {
              setLibName(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LibName;
