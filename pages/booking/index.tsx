import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "@/constants";
import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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
                    streetAddress: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "",
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
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Booking</h1>
                <BookingForm
                    formData={formData}
                    loading={loading}
                    error={error}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}