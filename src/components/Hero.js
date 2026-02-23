import Countdown from "./Countdown";

function Hero() {
  return (
    <section style={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #1a1a1a, #2c003e)",
      color: "white",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        ELECTRAX 2026
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        National Level ECE Symposium
      </p>

      <p style={{ fontSize: "18px", opacity: "0.8" }}>
        March 06, 2026
      </p>

      {/* 👇 ADD THIS LINE */}
      <Countdown />

      <button style={{
        marginTop: "30px",
        padding: "12px 30px",
        fontSize: "16px",
        backgroundColor: "#8a2be2",
        border: "none",
        color: "white",
        cursor: "pointer",
        borderRadius: "5px"
      }}>
        Register Now
      </button>
    </section>
  );
}

export default Hero;