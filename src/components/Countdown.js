import { useEffect, useState } from "react";

function Countdown() {

    const eventDate = new Date("March 6, 2026 09:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState(
        eventDate - new Date().getTime()
    );

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeLeft(eventDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);

    }, [eventDate]); // ✅ FIX ADDED HERE

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <div style={{ marginTop: "30px", fontSize: "20px" }}>
            <strong>{days}</strong>d :
            <strong> {hours}</strong>h :
            <strong> {minutes}</strong>m :
            <strong> {seconds}</strong>s
        </div>
    );
}

export default Countdown;