function Speakers() {
    return (
        <section id="speakers" data-aos="zoom-in">
            <h2 style={{ textAlign: "center" }}>Guest Speakers</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "40px",
                flexWrap: "wrap"
            }}>

                <div style={cardStyle}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Speaker"
                        style={imageStyle}
                    />
                    <h3>Dr. R. Kumar</h3>
                    <p>AI & Embedded Systems Expert</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Speaker"
                        style={imageStyle}
                    />
                    <h3>Ms. Priya Nair</h3>
                    <p>IoT Research Scientist</p>
                </div>

            </div>
        </section>
    );
}

const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    textAlign: "center",
    width: "250px"
};

const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px"
};

export default Speakers;