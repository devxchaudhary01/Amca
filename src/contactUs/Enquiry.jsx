import React, { useState } from "react";
import "./enquiry.css";

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

    const [loading, setLoading] = useState(false); // ✅ NEW

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return; // ✅ prevent multiple clicks

        setLoading(true); // ✅ start loading

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbwjeNekj0dezu1-p5n-kfY5qTOkrqX7o7-Ir2XRvW7rI9RXxZGc_y6OxF5FZizAYqy8vg/exec", {
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

        } catch (err) {
            alert("Error submitting form ❌");
        } finally {
            setLoading(false); // ✅ always stop loading
        }
    };

    return (
        <section className="enquiry-section">
            <h2>Send Enquiry</h2>

            <form onSubmit={handleSubmit} className="enquiry-form">

                <input name="company" placeholder="Company Name" required value={form.company} onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
                <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
                <input name="city" placeholder="City" required value={form.city} onChange={handleChange} />

                <input name="product" placeholder="Product" required value={form.product} onChange={handleChange} />
                <input name="quantity" type="number" placeholder="Quantity" required value={form.quantity} onChange={handleChange} />

                <textarea
                    name="productDetail"
                    placeholder="Product Details"
                    required
                    value={form.productDetail}
                    onChange={handleChange}
                />

                {/* ✅ BUTTON UPDATED */}
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit Enquiry"}
                </button>

            </form>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3510.5954772867517!2d77.2641877754913!3d28.371077175808487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%20110%2C%20NGIA%2C%20Sector%2051%2C%20Faridabad%2C%20Haryana-121004!5e0!3m2!1sen!2sin!4v1773742088561!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default EnquiryForm;