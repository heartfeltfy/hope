import { CSSProperties } from "react";

const loadingStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
};

const spinnerStyles: CSSProperties = {
  width: "50px",
  height: "50px",
  border: "3px solid #f3f3f3",
  borderTop: "3px solid #3498db",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const Loading = () => {
  return (
    <div style={loadingStyles}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyles} />
    </div>
  );
};

export default Loading;
