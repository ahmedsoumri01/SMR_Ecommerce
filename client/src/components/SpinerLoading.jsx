import React from "react";

export default function SpinerLoading() {
  return (
    <div className="text-center" style={{ height: "70vh" }}>
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ height: "10vh" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
