import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  themes,
  primaryColors,
  fontSizes,
  animationSpeeds,
} from "../api/settingsData";
function Settings() {
  const [settin, setSettin] = useState({
    "--background-color": "#ffffff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--primary-color": "rgb(255,0,86)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settin) {
      root.style.setProperty(key, settin[key]);
    }
  }, [settin]);

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settin };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettin(_settings);
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settin };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettin(_settings);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settin };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettin(_settings);
  }

  function changeAnimationSpeed(i) {
    const _speed = animationSpeeds[i];
    let _settings = { ...settin };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettin(_settings);
  }

  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  return (
    <>
      <div className="section d-block">
        <h2>Preferred theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block">
        <h2>Preferred Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              className="option light"
              onClick={() => changeColor(index)}
              style={{ backgroundColor: color }}
            >
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Font Size</h2>
        <div className="options-container">
          {fontSizes.map((font, index) => (
            <button className="btn" onClick={() => changeFontSize(index)}>
              {font.title}
              {fontSize === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Animation Speed</h2>
        <div className="options-container">
          {animationSpeeds.map((speed, index) => (
            <button className="btn" onClick={() => changeAnimationSpeed(index)}>
              {speed.title}
              {animationSpeed === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Settings;
