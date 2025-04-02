import { useState } from "react";
import Navbar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MoveLeft, ChevronDown, Info, Wifi, Bed, Bath } from "lucide-react";
import CashOnArrivalPolicy from "../components/CashOnArrivalPolicy";

const BookingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cc");
  const [roomData, setRoomData] = useState(null);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [minCheckoutDate, setMinCheckoutDate] = useState("");

  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm();

  // Watch check-in date to update checkout min date
  const checkInDate = watch("checkIn");

  useEffect(() => {
    if (location.state?.room) {
      setRoomData(location.state.room);
    }
  }, [location]);

  useEffect(() => {
    setValue("policyAgreement", agreedToPolicy);
  }, [agreedToPolicy, setValue]);

  // Update minimum checkout date when check-in date changes
  useEffect(() => {
    if (checkInDate) {
      setMinCheckoutDate(checkInDate);
      
      // Validate checkout date if it exists to ensure it's after the new check-in date
      const checkOutDate = watch("checkOut");
      if (checkOutDate && checkOutDate <= checkInDate) {
        // Reset checkout date if it's now invalid
        setValue("checkOut", "");
        trigger("checkOut");
      }
    }
  }, [checkInDate, setValue, watch, trigger]);

  const handleBack = () => {
    navigate(-1);
  };

  const calculateTaxes = () => {
    if (!roomData?.price) return 0;
    return Math.round(Number(roomData.price) * 0.1);
  };

  const calculateTotal = () => {
    if (!roomData?.price) return 0;
    return Number(roomData.price) + calculateTaxes();
  };

  const onSubmitBookingInfo = (data) => {
    console.log("Booking info submitted:", data);
    setActiveTab(2);
  };

  const onSubmitPayment = (data) => {
    console.log("Payment submitted:", data);
    alert("Booking completed successfully!");
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen pt-20 bg-gray-100">
        <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-18 ml-4 sm:ml-84">
          <button
            onClick={handleBack}
            className="text-black hover:text-amber-500 transition-colors"
          >
            <MoveLeft className="cursor-pointer" size={46} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center mx-auto w-full max-w-[1350px] h-auto mt-2 gap-10 mb-20 px-4">
          {/* Booking Information Section */}
          <div className="bg-white w-full md:w-1/2 text-lg rounded-lg shadow-md mb-10 md:mb-0 overflow-hidden">
            <div className="p-5 ml-4 flex flex-wrap gap-4 sm:gap-10">
              <button
                className={`font-medium flex items-center ${
                  activeTab === 1 ? "text-amber-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(1)}
              >
                <span
                  className={`flex items-center justify-center text-gray-500 h-8 w-8 mr-2 ${
                    activeTab === 1
                      ? "bg-amber-500 text-white rounded-full"
                      : ""
                  }`}
                >
                  1.
                </span>
                Booking Information
              </button>
              <button
                className={`font-medium flex items-center ${
                  activeTab === 2 ? "text-amber-500" : "text-gray-500"
                }`}
                onClick={() => (activeTab === 2 ? null : setActiveTab(2))}
              >
                <span
                  className={`flex items-center justify-center text-gray-500 h-8 w-8 mr-2 ${
                    activeTab === 2
                      ? "bg-amber-500 text-white rounded-full"
                      : ""
                  }`}
                >
                  2.
                </span>
                Payment Information
              </button>
            </div>

            <div className="p-4 sm:p-8">
              {activeTab === 1 && (
                <form onSubmit={handleSubmit(onSubmitBookingInfo)}>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                    Booking Details
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-8">
                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Check-in
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className={`w-full border ${
                            errors.checkIn
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md p-3`}
                          placeholder="Select date"
                          min={getCurrentDate()}
                          {...register("checkIn", {
                            required: "Check-in date is required",
                          })}
                        />
                        {errors.checkIn && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.checkIn.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Check-out
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className={`w-full border ${
                            errors.checkOut
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md p-3`}
                          placeholder="Select date"
                          min={minCheckoutDate || getCurrentDate()}
                          {...register("checkOut", {
                            required: "Check-out date is required",
                            validate: value => 
                              !checkInDate || value > checkInDate || 
                              "Check-out date must be after check-in date"
                          })}
                        />
                        {errors.checkOut && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.checkOut.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        No. of Guests
                      </label>
                      <div className="relative">
                        <select
                          className={`w-full border ${
                            errors.guests ? "border-red-500" : "border-gray-300"
                          } rounded-md p-3 pr-10 appearance-none`}
                          {...register("guests", {
                            required: "Number of guests is required",
                          })}
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                        {errors.guests && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.guests.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-2 mt-2 sm:mt-4">
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        Contact Details
                      </h2>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`w-full border ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-md p-3`}
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`w-full border ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        } rounded-md p-3`}
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`w-full border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } rounded-md p-3`}
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message:
                              "Please enter a valid 10-digit phone number",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className={`w-full border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md p-3`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-1 sm:col-span-2 mt-2 sm:mt-4">
                      <button
                        type="submit"
                        className="w-full bg-amber-500 text-white py-4 rounded-md font-medium text-lg hover:bg-amber-600 transition-colors"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {activeTab === 2 && (
                <form onSubmit={handleSubmit(onSubmitPayment)}>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                    Payment Method
                  </h1>

                  {/* Payment Method Buttons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod("cc")}
                      className={`relative px-2 py-1.5 rounded-md border-2 transition-colors flex items-center gap-1 ${
                        selectedPaymentMethod === "cc"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/credit-card.png"
                        alt="Credit Card"
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-xs sm:text-sm">
                        Credit/Debit Card
                      </span>
                      {selectedPaymentMethod === "cc" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod("paypal")}
                      className={`relative px-2 py-1.5 rounded-md border-2 transition-colors flex items-center gap-1 ${
                        selectedPaymentMethod === "paypal"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/paypal.png"
                        alt="PayPal"
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-xs sm:text-sm">Paypal</span>
                      {selectedPaymentMethod === "paypal" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod("cash")}
                      className={`relative px-2 py-1.5 rounded-md border-2 transition-colors flex items-center gap-1 ${
                        selectedPaymentMethod === "cash"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/cash.png"
                        alt="Cash"
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-xs sm:text-sm">
                        Cash On Arrival
                      </span>
                      {selectedPaymentMethod === "cash" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>
                  </div>

                  {/* Payment Method Content */}
                  <div className="min-h-[250px]">
                    {/* Cash On Arrival Section */}
                    {selectedPaymentMethod === "cash" && (
                      <CashOnArrivalPolicy
                        register={register}
                        errors={errors}
                        agreedToPolicy={agreedToPolicy}
                        setAgreedToPolicy={setAgreedToPolicy}
                      />
                    )}

                    {selectedPaymentMethod === "cc" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-8 mb-6">
                        <div className="col-span-1 sm:col-span-2">
                          <label className="block text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              errors.cardNumber
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            placeholder="1234 5678 9012 3456"
                            {...register("cardNumber", {
                              validate: (value) =>
                                selectedPaymentMethod !== "cc" ||
                                (value && value.length >= 13) ||
                                "Please enter a valid card number",
                            })}
                          />
                          {errors.cardNumber && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cardNumber.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1">
                          <label className="block text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              errors.expiryDate
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            placeholder="MM/YY"
                            {...register("expiryDate", {
                              validate: (value) =>
                                selectedPaymentMethod !== "cc" ||
                                (value &&
                                  /^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) ||
                                "Please enter a valid expiry date (MM/YY)",
                            })}
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.expiryDate.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1">
                          <label className="block text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              errors.cvv ? "border-red-500" : "border-gray-300"
                            } rounded-md p-3`}
                            placeholder="123"
                            {...register("cvv", {
                              validate: (value) =>
                                selectedPaymentMethod !== "cc" ||
                                (value && /^\d{3,4}$/.test(value)) ||
                                "Please enter a valid CVV",
                            })}
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cvv.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-1 sm:col-span-2">
                          <label className="block text-gray-700 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              errors.cardholderName
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md p-3`}
                            placeholder="John Doe"
                            {...register("cardholderName", {
                              validate: (value) =>
                                selectedPaymentMethod !== "cc" ||
                                (value && value.length > 3) ||
                                "Please enter the cardholder name",
                            })}
                          />
                          {errors.cardholderName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cardholderName.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {selectedPaymentMethod === "paypal" && (
                      <div className="text-center p-8 mb-6 border border-gray-200 rounded-md">
                        <p className="mb-4 text-gray-600">
                          You will be redirected to PayPal to complete your
                          payment
                        </p>
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                        >
                          Continue with PayPal
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Payment Amount Section */}
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Payment Amount
                    </h2>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">
                        Rs. {roomData?.price || "0"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Taxes & Fees:</span>
                      <span className="font-medium">
                        Rs. {calculateTaxes()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="text-amber-500 font-semibold">
                        Total Payable:
                      </span>
                      <span className="text-amber-500 font-semibold">
                        Rs. {calculateTotal()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <button
                      type="submit"
                      className="w-full bg-amber-500 text-white py-4 rounded-md font-medium text-lg hover:bg-amber-600 transition-colors"
                    >
                      Complete Booking
                    </button>
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      className="w-full bg-gray-200 text-gray-700 py-4 rounded-md font-medium text-lg hover:bg-gray-300 transition-colors"
                      onClick={() => setActiveTab(1)}
                    >
                      Back to Booking Details
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Room Details Section */}
          <div className="bg-white w-full md:w-1/2 rounded-t-4xl shadow-md overflow-hidden">
            <div className="h-64 sm:h-80 md:h-1/2 overflow-hidden">
              <img
                src={roomData?.imageUrl || "/images/login.jpeg"}
                alt={`${roomData?.title || "Room"} view`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {roomData?.title || "Room"}
                </h1>
                <h2 className="text-amber-500 text-2xl sm:text-3xl font-bold">
                  Rs.{roomData?.price || "9999"}
                </h2>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <p className="text-lg text-amber-500">
                  {roomData?.roomType
                    ? roomData.roomType.charAt(0).toUpperCase() +
                      roomData.roomType.slice(1)
                    : "Standard"}{" "}
                  Room
                </p>
                <Info size={16} className="text-amber-500" />
              </div>

              <div className="mb-3">
                <span className="text-sm font-medium">
                  Max Occupancy: {roomData?.occupancy || "2"}
                </span>
              </div>

              {roomData?.rating && (
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`${roomData.ratingBg || "bg-green-100"} ${
                      roomData.ratingColor || "text-green-500"
                    } px-2 py-1 rounded-lg text-sm font-medium`}
                  >
                    {roomData.rating} ★ {roomData.ratingText || "Excellent"}
                  </div>
                  <span className="text-sm text-gray-500">
                    {roomData.reviews || "0"} reviews
                  </span>
                </div>
              )}

              {roomData?.amenities && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Room Amenities:</h3>
                  <ul className="space-y-2">
                    {roomData.amenities.map((amenity, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        {amenity.icon === "wifi" && (
                          <Wifi size={16} className="mr-2 text-amber-500" />
                        )}
                        {amenity.icon === "bed" && (
                          <Bed size={16} className="mr-2 text-amber-500" />
                        )}
                        {amenity.icon === "bath" && (
                          <Bath size={16} className="mr-2 text-amber-500" />
                        )}
                        {amenity.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;