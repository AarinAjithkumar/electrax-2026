function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      padding: "20px 80px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      zIndex: 1000
    }}>
      <h2 style={{ color: "#4b0082" }}>Electrax 2026</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#schedule">Schedule</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;