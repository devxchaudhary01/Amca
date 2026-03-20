import React, { useState } from "react";

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
                body: JSON.stringify(form),
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
        } catch (err) {
            alert("Error ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section style={styles.section}>

                <div style={styles.container}>

                    {/* ================= LEFT SIDE ================= */}
                    <div style={styles.left}>

                        <h2 style={styles.leftTitle}>Get In Touch</h2>

                        <p style={styles.infoText}>
                            We would love to hear from you. Reach out using the details below.
                        </p>

                        <div style={styles.infoBlock}>
                            <h4>📞 Phone</h4>
                            <p>+91 9217962766</p>
                            <p>+91 9625676397</p>
                        </div>

                        <div style={styles.infoBlock}>
                            <h4>📧 Email</h4>
                            <p>info@amcaindustries.com</p>
                            <p>sales@amcaindustries.com</p>
                            <p>🌐 www.amcaindustries.com</p>
                        </div>

                        <div style={styles.infoBlock}>
                            <h4>📍 Address</h4>
                            <p>
                                Plot No 110, NGIA, Sector 51,<br />
                                Faridabad, Haryana <br />
                                121004 <br />
                                Amca Machines & Components Access <br />
                                Industries (AMCA Industris)
                            </p>

                            {/* 👉 Coordinates Added */}
                            <p style={{ marginTop: "10px", fontSize: "13px", color: "#777" }}>
                                📌 28°21'46.2"N 77°15'54.9"E <br />
                                (28.362832, 77.265238)
                            </p>
                        </div>

                    </div>

                    {/* ================= RIGHT SIDE FORM ================= */}
                    <form onSubmit={handleSubmit} style={styles.form}>

                        <h2 style={styles.title}>Send Enquiry</h2>

                        <input style={styles.input} name="company" placeholder="Company Name" required value={form.company} onChange={handleChange} />
                        <input style={styles.input} name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
                        <input style={styles.input} type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
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

                </div>
            </section>

            {/* ================= FULL WIDTH MAP ================= */}
            <div style={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps?q=28.362832,77.265238&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </>
    )
};

    export default EnquiryForm;


    // ================= STYLES =================

    const styles = {

        section: {
            padding: "70px 20px",
            background: "#f4f6f8",
            fontFamily: "Arial, sans-serif"
        },

        container: {
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            alignItems: "stretch"
        },

        /* LEFT SIDE */
        left: {
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px"
        },

        leftTitle: {
            fontSize: "32px",
            fontWeight: "700",
            color: "#0d3b66"
        },

        infoText: {
            color: "#555",
            fontSize: "14px",
            lineHeight: "1.6"
        },

        infoBlock: {
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
        },

        /* FORM */
        form: {
            flex: "1",
            minWidth: "320px",
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        },

        title: {
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#222"
        },

        input: {
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
            outline: "none"
        },

        textarea: {
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            minHeight: "100px",
            fontSize: "14px"
        },

        button: {
            background: "#0d3b66",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
        },
        mapContainer: {
            width: "100%",
            height: "400px",
            marginTop: "40px"
        }
    };


