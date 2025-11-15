import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function MyChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "bar",
      data: { labels: ["A", "B"], datasets: [{ data: [10, 20] }] }
    });
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MyChart;