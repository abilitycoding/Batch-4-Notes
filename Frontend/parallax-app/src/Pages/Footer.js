import React from "react";
import "../Styles/Footer.css";

function Bubble({ size, distance, position, time, delay }) {
  const bubbleStyle = {
    "--size": `${size}rem`,
    "--distance": `${distance}rem`,
    "--position": `${position}%`,
    "--time": `${time}s`,
    "--delay": `${delay}s`
  };

  return <div className="bubble" style={bubbleStyle}></div>;
}

function Footer() {
  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    bubbles.push(
      <Bubble
        key={i}
        size={2 + Math.random() * 4}
        distance={6 + Math.random() * 4}
        position={-5 + Math.random() * 110}
        time={2 + Math.random() * 2}
        delay={-1 * (2 + Math.random() * 2)}
      />
    );
  }

  return (
    <div>
      <div className="main">
        <div className="footer">
          <div className="bubbles">{bubbles}</div>
          <div className="content">
            <div>
              <div>
                <b>Eldew</b>
                <a href="#">Secuce</a>
                <a href="#">Drupand</a>
                <a href="#">Oceash</a>
                <a href="#">Ugefe</a>
                <a href="#">Babed</a>
              </div>
              <div>
                <b>Spotha</b>
                <a href="#">Miskasa</a>
                <a href="#">Agithe</a>
                <a href="#">Scesha</a>
                <a href="#">Lulle</a>
              </div>
              <div>
                <b>Chashakib</b>
                <a href="#">Chogauw</a>
                <a href="#">Phachuled</a>
                <a href="#">Tiebeft</a>
                <a href="#">Ocid</a>
                <a href="#">Izom</a>
                <a href="#">Ort</a>
              </div>
              <div>
                <b>Athod</b>
                <a href="#">Pamuz</a>
                <a href="#">Vapert</a>
                <a href="#">Neesk</a>
                <a href="#">Omemanen</a>
              </div>
            </div>
            <div>
              <a
                className="image"
                href="https://codepen.io/z-"
                target="_blank"
                style={{
                  backgroundImage:
                    'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")'
                }}
              ></a>
              <p>©2019 Not Really</p>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Footer;
