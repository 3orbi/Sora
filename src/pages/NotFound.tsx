import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#FCF9F9" }}
    >
      <h1
        style={{
          fontWeight: 900,
          fontSize: 72,
          letterSpacing: -3.6,
          color: "#1B1B1C",
        }}
      >
        404
      </h1>
      <p className="mt-4" style={{ fontSize: 16, color: "#4D4545" }}>
        This page doesn't exist in the vault.
      </p>
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
        style={{ backgroundColor: "#545F73" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
