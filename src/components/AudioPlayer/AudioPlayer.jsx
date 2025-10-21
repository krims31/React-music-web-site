import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  const currentTrack = {
    title: "Juice WRLD",
    artist: "Wishing Well",
    src: "/audio/lovestone.mp3",
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    const newTime = clickPosition * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (isMuted && newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={currentTrack.src} />

      {/* Информация о треке */}
      <div className="track-info">
        <h2 className="track-title">{currentTrack.title}</h2>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>

      {/* Прогресс бар */}
      <div className="progress-section">
        <div className="progress-bar" onClick={handleProgressClick}>
          <div
            className="progress-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="time-display">
          <span className="current-time">{formatTime(currentTime)}</span>
          <span className="total-time">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Основные кнопки управления */}
      <div className="controls-main">
        <button className="control-btn shuffle-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
          </svg>
        </button>

        <button className="control-btn prev-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>

        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button className="control-btn next-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>

        <button className="control-btn repeat-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
          </svg>
        </button>
      </div>

      {/* Контроль громкости */}
      <div className="volume-control">
        <button className="volume-btn" onClick={toggleMute}>
          {isMuted || volume === 0 ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 9H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.29l4.71 4.71c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 5.05a.996.996 0 00-1.41 0zm14.29 11.29a.996.996 0 10-1.41 1.41L19.17 18l-2.58 2.58a.996.996 0 101.41 1.41L20.59 19.4l2.58 2.58a.996.996 0 101.41-1.41L22 18l2.58-2.58a.996.996 0 10-1.41-1.41L20.59 16.6l-2.58-2.58z" />
            </svg>
          ) : volume > 0.5 ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
            </svg>
          )}
        </button>

        <div className="volume-slider-container">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
