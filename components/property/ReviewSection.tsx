import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/constants";

interface ReviewSectionProps {
    propertyId: string;
}

interface Review {
    id: string;
    comment: string;
    rating: number;
    author: string;
    date: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/properties/${propertyId}/reviews`);

                // Handle API response structure
                if (response.data.success) {
                    setReviews(response.data.data || []);
                } else {
                    setReviews([]);
                    console.error("Failed to fetch reviews:", response.data.error);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setReviews([]);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return (
            <div className="p-6 md:p-8">
                <p className="text-gray-600">Loading reviews...</p>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>

            {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet for this property.</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-lg p-4 md:p-6">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{review.author}</h3>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-gray-700">{review.rating}/5</span>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewSection;