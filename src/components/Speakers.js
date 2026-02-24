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
                        src="https://imgs.search.brave.com/8pxEy1wVlccP4LRy46596VHNth7XJQsQ2vGbCQ1zy48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9BbnRo/b255LUVkd2FyZC1U/b255LVN0YXJrLVBO/Ry1GcmVlLURvd25s/b2FkLTMwMHgyMjUu/cG5n"
                        alt="Speaker"
                        style={imageStyle}
                    />
                    <h3>Dr.Tony Stark</h3>
                    <p>AI & Embedded Systems Expert</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://imgs.search.brave.com/WJ1c2n491PIONsHzZKicn5dVPkgDtwvE9j-HQCKLIVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgzNjEy/OTYuanBn"
                        alt="Speaker"
                        style={imageStyle}
                    />
                    <h3>Ms. Gwen Stacy</h3>
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