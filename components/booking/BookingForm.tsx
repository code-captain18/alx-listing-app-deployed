import { BookingFormProps } from "@/interfaces";

const BookingForm: React.FC<BookingFormProps> = ({ formData, loading, error, onSubmit, onChange }) => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Detail</h2>
        <form onSubmit={onSubmit}>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={onChange}
                    required
                    maxLength={16}
                    className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                    <input
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={onChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={onChange}
                        required
                        maxLength={3}
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress || ""}
                    onChange={onChange}
                    required
                    className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city || ""}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state || ""}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode || ""}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country || ""}
                        onChange={onChange}
                        required
                        className="border p-2 w-full mt-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>
        </form>
    </div>
);

export default BookingForm;