import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { MoveLeft, Calendar, ChevronDown, Info } from "lucide-react";

const BookingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cc");

  const handleBack = () => {
    navigate(-1);
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

        <div className="flex flex-col md:flex-row items-center justify-center mx-auto w-full max-w-[1350px] h-auto md:h-[80vh] mt-2 gap-10 mb-20 px-4">
          {/* Booking Information Section */}
          <div className="bg-white w-full md:w-1/2 h-full text-lg rounded-lg shadow-md">
            <div className="p-5 ml-4 flex gap-10">
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
                onClick={() => setActiveTab(2)}
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

            <div className="p-8">
              {activeTab === 1 && (
                <>
                  <h1 className="text-3xl font-bold mb-8">Booking Details</h1>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Check-in
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3 pr-10"
                          placeholder="Select date"
                        />
                        <Calendar
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Check-out
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3 pr-10"
                          placeholder="Select date"
                        />
                        <Calendar
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        No. of Guests
                      </label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-md p-3 pr-10 appearance-none">
                          <option>Select</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 mt-4">
                      <h2 className="text-2xl font-bold mb-4">
                        Contact Details
                      </h2>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-md p-3"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-3"
                      />
                    </div>

                    <div className="col-span-2 mt-4">
                      <button
                        className="w-full bg-amber-500 text-white py-4 rounded-md font-medium text-lg hover:bg-amber-600 transition-colors"
                        onClick={() => setActiveTab(2)}
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <h1 className="text-3xl font-bold mb-8">Payment Method</h1>

                  {/* Payment Method Buttons */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <button
                      onClick={() => setSelectedPaymentMethod("cc")}
                      className={`relative px-4 py-2 rounded-md border-2 transition-colors flex items-center gap-2 ${
                        selectedPaymentMethod === "cc"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/credit-card.png"
                        alt="Credit Card"
                        className="w-6 h-6 object-contain"
                      />
                      Credit/Debit Card
                      {selectedPaymentMethod === "cc" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod("paypal")}
                      className={`relative px-4 py-2 rounded-md border-2 transition-colors flex items-center gap-2 ${
                        selectedPaymentMethod === "paypal"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/paypal.png"
                        alt="PayPal"
                        className="w-6 h-6 object-contain"
                      />
                      Paypal
                      {selectedPaymentMethod === "paypal" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod("cash")}
                      className={`relative px-4 py-2 rounded-md border-2 transition-colors flex items-center gap-2 ${
                        selectedPaymentMethod === "cash"
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-300 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src="/payment/cash.png"
                        alt="Cash"
                        className="w-6 h-6 object-contain"
                      />
                      Cash On Arrival
                      {selectedPaymentMethod === "cash" && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                      )}
                    </button>
                  </div>

                  {/* Cash On Arrival Section */}
                  {selectedPaymentMethod === "cash" && (
                    <div className="p-8 text-center">
                      <p className="text-gray-600">
                        Pay with cash when you arrive at the property.
                        <br />A staff member will collect your payment during
                        check-in.
                      </p>
                    </div>
                  )}

                  {selectedPaymentMethod === "cc" && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                      <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3"
                          placeholder="123"
                        />
                      </div>

                      <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-3"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === "paypal" && (
                    <div className="text-center p-8">
                      <p className="mb-4 text-gray-600">
                        You will be redirected to PayPal to complete your
                        payment
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
                        Continue with PayPal
                      </button>
                    </div>
                  )}

                  {selectedPaymentMethod === "cash" && (
                    <div className="p-8 text-center">
                      <p className="text-gray-600">
                        Pay with cash when you arrive at the property.
                        <br />A staff member will collect your payment during
                        check-in.
                      </p>
                    </div>
                  )}

                  <div className="mt-8">
                    <button className="w-full bg-amber-500 text-white py-4 rounded-md font-medium text-lg hover:bg-amber-600 transition-colors">
                      Complete Booking
                    </button>
                  </div>

                  <div className="mt-2">
                    <button
                      className="w-full bg-gray-200 text-gray-700 py-4 rounded-md font-medium text-lg hover:bg-gray-300 transition-colors"
                      onClick={() => setActiveTab(1)}
                    >
                      Back to Booking Details
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Room Details Section */}
          <div className="bg-white w-full md:w-1/2 h-full rounded-t-4xl shadow-md overflow-hidden">
            <div className="h-1/2 overflow-hidden">
              <img
                src="/images/login.jpeg"
                alt="Serenity Deluxe Room"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-1/2 w-full p-6">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl font-bold">Serenity Deluxe</h1>
                <h2 className="text-amber-500 text-3xl font-bold">Rs.9999</h2>
              </div>

              <p className=" text-lg flex text-amber-500 items-center gap-2">
                Note
                <Info size={16} className="text-amber-500 mr-2" />
              </p>

              <span className="text-sm">Max Occupancy: 2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
