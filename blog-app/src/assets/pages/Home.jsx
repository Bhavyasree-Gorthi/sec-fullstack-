import { useState } from 'react';

export default function Home() {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(true);
    };

    const featuredShots = [
        {
            title: "AI Mind Wellness App",
            author: "AI Visionary",
            likes: "21.3k",
            views: 230,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Smart AI Healthcare",
            author: "Neural Nets",
            likes: "18.7k",
            views: 195,
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "AI-Powered News Feed",
            author: "Deep Learn",
            likes: "33.4k",
            views: 410,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "NextGen Blog Concept",
            author: "Creative AI",
            likes: "27.8k",
            views: 380,
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
        },
    ];

    // Responsive container centered with max width suitable for laptops
    const containerStyle = {
        backgroundColor: "#3f51b5", // Indigo
        minHeight: "100vh",
        padding: "40px 40px",
        maxWidth: "1200px",    // Restricted max width for laptop screen comfort
        margin: "0 auto",     // Center horizontally on the screen
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#ffeb3b", // Yellow text for contrast
        letterSpacing: "0.03em",
    };

    const headerStyle = {
        marginBottom: "30px",
        textAlign: "center",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
    };

    const navStyle = {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        fontWeight: "700",
    };

    const linkStyle = {
        color: "#ffeb3b", // yellow links on indigo
        textDecoration: "none",
        fontSize: "18px",
        padding: "6px 12px",
        borderRadius: "6px",
        transition: "background-color 0.3s ease"
    };

    const linkHoverStyle = {
        backgroundColor: "#000", // black highlight on hover
        color: "#ffeb3b"
    };

    const buttonStyle = {
        padding: "14px 36px",
        backgroundColor: "#ffeb3b", // Yellow
        color: "#000", // Black text
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "800",
        boxShadow: "0 5px 15px rgba(255, 235, 59, 0.6)",
        marginTop: "15px",
        display: "inline-block",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const buttonHoverStyle = {
        transform: "scale(1.06)",
        boxShadow: "0 8px 20px rgba(255, 235, 59, 0.8)",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "28px",
        marginTop: "30px",
    };

    const cardStyle = {
        background: "linear-gradient(145deg, #1a237e, #283593)", // Dark indigo gradient
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
        cursor: "pointer",
        color: "#ffeb3b",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
        display: "flex",
        flexDirection: "column"
    };

    const cardHoverStyle = {
        transform: "translateY(-12px)",
        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.8)"
    };

    const imgStyle = {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        filter: "brightness(0.8)",
        transition: "filter 0.3s ease",
    };

    const imgHoverStyle = {
        filter: "brightness(1)"
    };

    const cardContentStyle = {
        padding: "20px 25px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const titleStyle = {
        fontSize: "22px",
        margin: "0 0 10px 0",
        fontWeight: "900",
        letterSpacing: "0.02em",
    };

    const authorStyle = {
        fontStyle: "italic",
        fontWeight: "600",
        color: "#ffee58", // lighter yellow
        marginBottom: "20px",
    };

    const metaStyle = {
        fontSize: "16px",
        fontWeight: "700",
        color: "#ffeb3b",
    };

    const trendingStyle = {
        marginTop: "60px",
        padding: "0 15px",
        maxWidth: "720px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    };

    const listStyle = {
        listStyleType: "none",
        paddingLeft: "0",
        fontSize: "18px",
        fontWeight: "700",
        color: "#ffe082",
        lineHeight: "1.6",
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>AI-Powered Blog App</h1>

                <nav style={navStyle}>
                    {["Shots", "Find Talent", "Jobs", "Blog"].map((item, i) => (
                        <a
                            key={i}
                            href={`https://dribbble.com/${item.toLowerCase().replace(" ", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                            onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
                            onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <button
                    style={buttonStyle}
                    onClick={handleClick}
                    onMouseOver={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                    onMouseOut={e => Object.assign(e.currentTarget.style, buttonStyle)}
                >
                    Show Featured Designs
                </button>
            </header>

            <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 40px auto", fontWeight: '700', color: '#fff8e1', textShadow: '0 0 6px rgba(255, 235, 59, 0.9)' }}>
                Explore the latest AI-inspired blog designs and creative talents from around the world!
            </p>

            {showMore && (
                <section>
                    <h2 style={{ textAlign: "center", color: "#ffeb3b", fontWeight: "900", fontSize: "32px", letterSpacing: "0.05em" }}>Featured Blog App Designs</h2>
                    <div style={gridStyle}>
                        {featuredShots.map((shot, index) => (
                            <div
                                key={index}
                                style={cardStyle}
                                onMouseEnter={e => {
                                    Object.assign(e.currentTarget.style, cardHoverStyle);
                                    e.currentTarget.querySelector('img').style.filter = imgHoverStyle.filter;
                                }}
                                onMouseLeave={e => {
                                    Object.assign(e.currentTarget.style, cardStyle);
                                    e.currentTarget.querySelector('img').style.filter = imgStyle.filter;
                                }}
                            >
                                <img src={shot.image} alt={shot.title} style={imgStyle} />
                                <div style={cardContentStyle}>
                                    <h3 style={titleStyle}>{shot.title}</h3>
                                    <p style={authorStyle}>by {shot.author}</p>
                                    <p style={metaStyle}>{shot.likes} likes | {shot.views} views</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {showMore && (
                <section style={trendingStyle}>
                    <h2 style={{ color: "#ffeb3b", fontWeight: "900", letterSpacing: "0.04em" }}>Trending Designers</h2>
                    <p style={{ fontWeight: "700", color: "#fff8e1", marginBottom: "20px", textShadow: '0 0 4px rgba(255, 235, 59, 0.7)' }}>
                        Meet the creative minds pushing the boundaries of AI design.
                    </p>
                    <ul style={listStyle}>
                        <li><a href="https://dribbble.com/prakharn" target="_blank" rel="noopener noreferrer" style={{ color: '#ffee58', textDecoration: "underline" }}>Prakhar Neel Sharma</a> - Bangalore, India</li>
                        <li><a href="https://dribbble.com/brenobitencourt" target="_blank" rel="noopener noreferrer" style={{ color: '#ffee58', textDecoration: "underline" }}>Breno Bitencourt</a> - São Paulo, Brazil</li>
                        <li><a href="https://dribbble.com/nixtio" target="_blank" rel="noopener noreferrer" style={{ color: '#ffee58', textDecoration: "underline" }}>Nixtio</a> - New York City, NY</li>
                        <li><a href="https://dribbble.com/odama" target="_blank" rel="noopener noreferrer" style={{ color: '#ffee58', textDecoration: "underline" }}>Odama</a> - Indonesia</li>
                    </ul>
                </section>
            )}
        </div>
    );
}
