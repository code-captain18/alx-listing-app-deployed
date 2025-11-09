import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "@/constants";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${API_BASE_URL}/bookings`, formData);

            // Handle successful response
            if (response.data.success) {
                alert("Booking confirmed!");
                // Reset form on success
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    cardNumber: "",
                    expirationDate: "",
                    cvv: "",
                    billingAddress: "",
                });
            } else {
                setError(response.data.error || "Failed to submit booking.");
            }
        } catch (error: unknown) {
            // Handle API errors
            if (error && typeof error === 'object' && 'response' in error) {
                const axiosError = error as { response?: { data?: { error?: string } } };
                if (axiosError.response?.data?.error) {
                    setError(axiosError.response.data.error);
                } else {
                    setError("Failed to submit booking.");
                }
            } else {
                setError("Failed to submit booking.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for booking details */}
            <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}