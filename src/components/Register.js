import { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        event: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.college || !formData.event) {
            alert("Please fill all fields");
            return;
        }

        setSubmitted(true);
    };

    return (
        <section id="register" data-aos="fade-up">
            <h2 style={{ textAlign: "center" }}>Register Now</h2>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                {submitted ? (
                    <h3 style={{ color: "green" }}>
                        🎉 Registration Successful!
                    </h3>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            width: "350px"
                        }}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="text"
                            name="college"
                            placeholder="College Name"
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <select
                            name="event"
                            onChange={handleChange}
                            style={inputStyle}
                        >
                            <option value="">Select Event</option>
                            <option>Paper Presentation</option>
                            <option>Project Expo</option>
                            <option>Technical Quiz</option>
                            <option>Photography</option>
                        </select>

                        <button type="submit">Submit Registration</button>
                    </form>
                )}
            </div>
        </section>
    );
}

const inputStyle = {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc"
};

export default Register;