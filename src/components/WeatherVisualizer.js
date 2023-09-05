import React from "react";
import Sketch from "react-p5";

export default function WeatherVisualizer({ data }) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);

    if (data.condition === "Rain") {
      p5.background(175, 200, 255);
      p5.fill(0, 0, 255);
      for (let i = 0; i < data.humidity; i++) {
        const x = p5.random(p5.width);
        const y = p5.random(p5.height);
        p5.ellipse(x, y, 5, 10);
      }
    } else if (data.condition === "Sunny") {
      p5.background(100, 150, 255);
      p5.fill(255, 204, 0);
      const sunX = p5.width / 2;
      const sunY = p5.height / 2;
      p5.ellipse(sunX, sunY, 50, 50);
      for (let i = 0; i < 12; i++) {
        const angle = p5.TWO_PI / 12 * i;
        const x = sunX + p5.cos(angle) * (data.temperature / 2);
        const y = sunY + p5.sin(angle) * (data.temperature / 2);
        p5.line(sunX, sunY, x, y);
      }
    } else if (data.condition === "Clouds") {
      p5.background(200, 200, 255);
      p5.fill(255);
      p5.noStroke();
      for (let i = 0; i < data.clouds / 10; i++) {
        const x = p5.random(p5.width);
        const y = p5.random(p5.height / 2);
        p5.ellipse(x, y, 50, 50);
      }
    }

    // Wind effect (common for all conditions)
    if (data.windSpeed > 0) {
      p5.stroke(0);
      for (let i = 0; i < data.windSpeed; i++) {
        const x = p5.random(p5.width);
        const y = p5.random(p5.height);
        const angle = p5.random(p5.TWO_PI);
        const len = p5.random(10, 20);
        const x2 = x + p5.cos(angle) * len;
        const y2 = y + p5.sin(angle) * len;
        p5.line(x, y, x2, y2);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
