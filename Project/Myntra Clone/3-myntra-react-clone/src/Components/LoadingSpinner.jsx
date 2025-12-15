import React from "react";

const LoadingSpinner = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e0e0e0",
    borderTop: "4px solid #ff3f6c", // Myntra pink 😎
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default LoadingSpinner;
