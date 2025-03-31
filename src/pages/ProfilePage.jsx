import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/NavBar";
import { Eye, EyeOff, CreditCard, Clock, User, Lock } from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: { errors: errorsPersonal },
    setValue: setValuePersonal,
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
    watch: watchPassword,
  } = useForm();

  const {
    register: registerCard,
    handleSubmit: handleSubmitCard,
    formState: { errors: errorsCard },
  } = useForm();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Mock booking history data
  const bookingHistory = [
    {
      id: "BK12345",
      roomType: "Classic Queen",
      checkIn: "2023-12-15",
      checkOut: "2023-12-18",
      amount: "2997",
      status: "Completed",
    },
    {
      id: "BK12346",
      roomType: "Family Suite",
      checkIn: "2024-01-10",
      checkOut: "2024-01-15",
      amount: "12495",
      status: "Upcoming",
    },
  ];

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "";
    const storedEmail = localStorage.getItem("userEmail") || "";
    const storedPhone = localStorage.getItem("userPhone") || "";

    setUserData({
      fullName: storedName,
      email: storedEmail,
      phone: storedPhone,
    });

    // Set form values
    setValuePersonal("fullName", storedName);
    setValuePersonal("email", storedEmail);
    setValuePersonal("phone", storedPhone);
  }, [setValuePersonal]);

  const onSubmitPersonal = (data) => {
    console.log("Personal info updated:", data);
    // In a real app, you would send this to your backend
    localStorage.setItem("userName", data.fullName);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPhone", data.phone);

    setUserData({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
    });

    alert("Personal information updated successfully!");
  };

  const onSubmitPassword = (data) => {
    console.log("Password updated:", data);
    // In a real app, you would send this to your backend
    alert("Password updated successfully!");
  };

  const onSubmitCard = (data) => {
    console.log("Card added:", data);
    // In a real app, you would send this to your backend
    alert("Credit card added successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold">
                    {userData.fullName
                      ? userData.fullName.charAt(0).toUpperCase()
                      : "U"}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {userData.fullName || "User"}
                    </h2>
                    <p className="text-gray-500">
                      {userData.email || "user@example.com"}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md transition ${
                      activeTab === "personal"
                        ? "bg-amber-50 text-amber-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <User size={20} />
                    <span>Personal Info</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("password")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md transition ${
                      activeTab === "password"
                        ? "bg-amber-50 text-amber-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Lock size={20} />
                    <span>Change Password</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md transition ${
                      activeTab === "payment"
                        ? "bg-amber-50 text-amber-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <CreditCard size={20} />
                    <span>Payment Methods</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md transition ${
                      activeTab === "bookings"
                        ? "bg-amber-50 text-amber-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Clock size={20} />
                    <span>Booking History</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Personal Information */}
                {activeTab === "personal" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Personal Information
                    </h2>
                    <form onSubmit={handleSubmitPersonal(onSubmitPersonal)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              errorsPersonal.fullName
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPersonal("fullName", {
                              required: "Full name is required",
                            })}
                          />
                          {errorsPersonal.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPersonal.fullName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`w-full border ${
                              errorsPersonal.email
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPersonal("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          {errorsPersonal.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPersonal.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className={`w-full border ${
                              errorsPersonal.phone
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPersonal("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message:
                                  "Please enter a valid 10-digit phone number",
                              },
                            })}
                          />
                          {errorsPersonal.phone && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPersonal.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-amber-500 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-600 transition-colors"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                )}

                {/* Change Password */}
                {activeTab === "password" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Change Password
                    </h2>
                    <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                      <div className="space-y-6 max-w-md">
                        <div className="relative">
                          <label className="block text-gray-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type={showCurrentPassword ? "text" : "password"}
                            className={`w-full border ${
                              errorsPassword.currentPassword
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPassword("currentPassword", {
                              required: "Current password is required",
                            })}
                          />
                          <button
                            type="button"
                            className="absolute right-3 bottom-3"
                            onClick={() =>
                              setShowCurrentPassword(!showCurrentPassword)
                            }
                          >
                            {showCurrentPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                          {errorsPassword.currentPassword && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPassword.currentPassword.message}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <label className="block text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type={showNewPassword ? "text" : "password"}
                            className={`w-full border ${
                              errorsPassword.newPassword
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPassword("newPassword", {
                              required: "New password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters",
                              },
                            })}
                          />
                          <button
                            type="button"
                            className="absolute right-3 bottom-3"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                          {errorsPassword.newPassword && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPassword.newPassword.message}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <label className="block text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className={`w-full border ${
                              errorsPassword.confirmPassword
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            {...registerPassword("confirmPassword", {
                              required: "Please confirm your new password",
                              validate: (value) =>
                                value === watchPassword("newPassword") ||
                                "Passwords do not match",
                            })}
                          />
                          <button
                            type="button"
                            className="absolute right-3 bottom-3"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                          {errorsPassword.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                              {errorsPassword.confirmPassword.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-amber-500 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-600 transition-colors mt-6"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>
                )}

                {/* Payment Methods */}
                {activeTab === "payment" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Payment Methods
                    </h2>
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">Saved Cards</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
                        <p className="text-gray-500">
                          You don't have any saved payment methods yet.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Add New Card</h3>
                      <form onSubmit={handleSubmitCard(onSubmitCard)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              className={`w-full border ${
                                errorsCard.cardNumber
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md p-3`}
                              placeholder="1234 5678 9012 3456"
                              {...registerCard("cardNumber", {
                                required: "Card number is required",
                                pattern: {
                                  value: /^[0-9]{13,19}$/,
                                  message: "Please enter a valid card number",
                                },
                              })}
                            />
                            {errorsCard.cardNumber && (
                              <p className="text-red-500 text-sm mt-1">
                                {errorsCard.cardNumber.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              className={`w-full border ${
                                errorsCard.cardholderName
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md p-3`}
                              placeholder="John Doe"
                              {...registerCard("cardholderName", {
                                required: "Cardholder name is required",
                              })}
                            />
                            {errorsCard.cardholderName && (
                              <p className="text-red-500 text-sm mt-1">
                                {errorsCard.cardholderName.message}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 mb-2">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                className={`w-full border ${
                                  errorsCard.expiryDate
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } rounded-md p-3`}
                                placeholder="MM/YY"
                                {...registerCard("expiryDate", {
                                  required: "Expiry date is required",
                                  pattern: {
                                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                    message:
                                      "Please enter a valid expiry date (MM/YY)",
                                  },
                                })}
                              />
                              {errorsCard.expiryDate && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errorsCard.expiryDate.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                className={`w-full border ${
                                  errorsCard.cvv
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } rounded-md p-3`}
                                placeholder="123"
                                {...registerCard("cvv", {
                                  required: "CVV is required",
                                  pattern: {
                                    value: /^\d{3,4}$/,
                                    message: "Please enter a valid CVV",
                                  },
                                })}
                              />
                              {errorsCard.cvv && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errorsCard.cvv.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="bg-amber-500 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-600 transition-colors"
                        >
                          Add Card
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* Booking History */}
                {activeTab === "bookings" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Booking History
                    </h2>
                    {bookingHistory.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Booking ID
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Room Type
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Check-in
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Check-out
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {bookingHistory.map((booking) => (
                              <tr key={booking.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-500">
                                  {booking.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                  {booking.roomType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                  {booking.checkIn}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                  {booking.checkOut}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                  Rs. {booking.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      booking.status === "Completed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {booking.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
                        <p className="text-gray-500 mb-4">
                          You don't have any booking history yet.
                        </p>
                        <button className="bg-amber-500 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-600 transition-colors">
                          Book a Room
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
