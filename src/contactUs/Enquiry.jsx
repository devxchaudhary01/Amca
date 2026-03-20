import React, { useState } from "react";
import logo from "../assets/logo.jpeg";

const EnquiryForm = () => {

    const [form, setForm] = useState({
        company: "",
        phone: "",
        email: "",
        city: "",
        product: "",
        quantity: "",
        productDetail: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const res = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
                method: "POST",
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (data.status === "success") {
                alert("Enquiry Submitted ✅");
                setForm({
                    company: "",
                    phone: "",
                    email: "",
                    city: "",
                    product: "",
                    quantity: "",
                    productDetail: ""
                });
            }
        } catch {
            alert("Error ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={styles.section}>

            <h2 style={styles.title}>Get In Touch With Us</h2>

            <div style={styles.container}>

                {/* FORM */}
                <form onSubmit={handleSubmit} style={styles.form}>

                    <input style={styles.input} name="company" placeholder="Company Name" required value={form.company} onChange={handleChange} />
                    <input style={styles.input} name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
                    <input style={styles.input} name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
                    <input style={styles.input} name="city" placeholder="City" required value={form.city} onChange={handleChange} />

                    <input style={styles.input} name="product" placeholder="Product" required value={form.product} onChange={handleChange} />
                    <input style={styles.input} type="number" name="quantity" placeholder="Quantity" required value={form.quantity} onChange={handleChange} />

                    <textarea
                        style={styles.textarea}
                        name="productDetail"
                        placeholder="Tell us your requirement..."
                        required
                        value={form.productDetail}
                        onChange={handleChange}
                    />

                    <button style={styles.button} disabled={loading}>
                        {loading ? "Sending..." : "Send Enquiry"}
                    </button>

                </form>

                {/* MAP */}
                <div style={styles.mapWrapper}>

                    <iframe
                        src="https://www.google.com/maps?q=28.358583,77.261525&z=15&output=embed"
                        style={styles.map}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* 🔴 CENTER LOGO MARKER */}
                    <div style={styles.marker}>
                        <div style={styles.pulse}></div>
                        <img src={logo} alt="logo" style={styles.logo} />
                    </div>

                    {/* ADDRESS CARD */}
                    <div style={styles.infoCard}>
                        <h4 style={{ margin: 0 }}>AMCA Industries</h4>
                        <p style={{ margin: "5px 0 0" }}>
                            Plot No. 110, Sector 51 <br />
                            Faridabad, Haryana
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EnquiryForm;


const styles = {

    section: {
        padding: "70px 20px",
        background: "#f4f6f8",
        fontFamily: "Arial, sans-serif"
    },

    title: {
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "40px",
        fontWeight: "700",
        color: "#222"
    },

    container: {
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        gap: "30px",
        flexWrap: "wrap"
    },

    form: {
        flex: "1",
        minWidth: "300px",
        background: "#fff",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },

    input: {
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        fontSize: "14px",
        outline: "none"
    },

    textarea: {
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        minHeight: "100px",
        fontSize: "14px"
    },

    button: {
        background: "#e60023",
        color: "#fff",
        padding: "12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    },

    /* MAP */
    mapWrapper: {
        flex: "1",
        minWidth: "300px",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    },

    map: {
        width: "100%",
        height: "450px",
        border: 0
    },

    /* MARKER */
    marker: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -100%)",
        zIndex: 2
    },

    logo: {
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "3px solid #fff",
        background: "#fff"
    },

    /* PULSE */
    pulse: {
        position: "absolute",
        width: "60px",
        height: "60px",
        background: "rgba(230,0,35,0.4)",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 1.5s infinite"
    },

    /* ADDRESS */
    infoCard: {
        position: "absolute",
        bottom: "15px",
        left: "15px",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "13px"
    }
};