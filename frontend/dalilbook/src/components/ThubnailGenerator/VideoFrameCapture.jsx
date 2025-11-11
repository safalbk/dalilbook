import React, { useRef, useState } from "react";

const VideoFrameCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoURL, setVideoURL] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  // Load selected video
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
    }
  };

  // Capture frame at specific timestamp (e.g., 2 seconds)
  const captureFrame = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 2; // Capture frame at 2s mark
  };

  // When video seeked to that frame
  const handleSeeked = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw current frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to Base64 & Blob
    const imageBase64 = canvas.toDataURL("image/png");
    setThumbnail(imageBase64);

    const blob = await fetch(imageBase64).then((res) => res.blob());

    // Prepare form data
    const formData = new FormData();
    formData.append("thumbnail", blob, `frame_${Date.now()}.png`);

    // Send to backend
    try {
      const res = await fetch("http://localhost:4000/uploadimage", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("✅ Image uploaded successfully!");
      } else {
        console.error("❌ Upload failed!");
      }
    } catch (err) {
      console.error("⚠️ Error uploading image:", err);
    }
  };

  return (
    <div className="mt-20" style={{ padding: 20 }}>
      <h2>🎥 Capture Frame & Upload</h2>

      {/* Video Input */}
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      {/* Video Player */}
      {videoURL && (
        <video
          ref={videoRef}
          src={videoURL}
          width="400"
          controls
          style={{ display: "block", marginTop: 10 }}
          onSeeked={handleSeeked}
        ></video>
      )}

      {/* Capture Button */}
      <button
        onClick={captureFrame}
        style={{
          marginTop: 10,
          padding: "8px 16px",
          cursor: "pointer",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Capture Frame
      </button>

      {/* Canvas (Hidden) */}
      <canvas
        ref={canvasRef}
        width="400"
        height="225"
        style={{ display: "none" }}
      ></canvas>

      {/* Thumbnail Preview */}
      {thumbnail && (
        <div style={{ marginTop: 20 }}>
          <h3>🖼️ Captured Frame</h3>
          <img
            src={thumbnail}
            alt="Captured frame"
            width="200"
            style={{ cursor: "pointer", borderRadius: "8px" }}
            title="Click to download"
            onClick={() => {
              const a = document.createElement("a");
              a.href = thumbnail;
              a.download = `frame_${Date.now()}.png`;
              a.click();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoFrameCapture;
