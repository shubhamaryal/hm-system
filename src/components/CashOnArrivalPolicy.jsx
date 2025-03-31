import { useState } from "react";
import { Info, PaperclipIcon, X } from "lucide-react";

const CashOnArrivalPolicy = ({
  register,
  errors,
  agreedToPolicy,
  setAgreedToPolicy,
}) => {
  const [showPoliciesPopup, setShowPoliciesPopup] = useState(false);

  // Handle checkbox change directly
  const handlePolicyCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setAgreedToPolicy(isChecked);
  };

  return (
    <>
      <div className="p-4 border border-gray-200 rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Cash On Arrival Policies</h2>
        <p className="text-amber-500 flex items-center gap-1.5 mt-2">
          <Info size={15} /> Note
        </p>
        <p className="mb-3">Learn about the COA policies below.</p>
        <button
          type="button"
          onClick={() => setShowPoliciesPopup(true)}
          className="text-amber-500 hover:text-amber-600 flex items-center gap-1"
        >
          <PaperclipIcon size={20} />
          <span className="underline">View Policies</span>
        </button>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="policyAgreement"
            className="w-5 h-5 cursor-pointer"
            checked={agreedToPolicy}
            onChange={handlePolicyCheckboxChange}
            {...register("policyAgreement", {
              required: "You must agree to the policies to continue",
            })}
          />
          <label htmlFor="policyAgreement" className="cursor-pointer">
            I have read and understood the policies mentioned above.
          </label>
        </div>
        {errors.policyAgreement && (
          <p className="text-red-500 text-sm mt-1">
            {errors.policyAgreement.message}
          </p>
        )}
      </div>

      {/* Cash On Arrival Policies Popup */}
      {showPoliciesPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Cash On Arrival Policies</h2>
              <button
                onClick={() => setShowPoliciesPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Payment Terms</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  Full payment is required at check-in using cash in the local
                  currency (INR).
                </li>
                <li>
                  We do not accept foreign currency, personal checks, or
                  traveler's checks.
                </li>
                <li>
                  A valid government-issued photo ID is required at check-in.
                </li>
                <li>
                  A security deposit of Rs. 2000 is required at check-in,
                  refundable upon checkout after room inspection.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Reservation Guarantee
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  Your reservation will be held until 6:00 PM on the day of
                  arrival.
                </li>
                <li>
                  For late arrivals, please notify the hotel in advance to hold
                  your reservation.
                </li>
                <li>
                  Failure to arrive without prior notice may result in
                  cancellation of your reservation.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Cancellation Policy
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  Cancellations made 48 hours or more before check-in: No
                  penalty.
                </li>
                <li>
                  Cancellations made less than 48 hours before check-in: First
                  night's room rate may be charged.
                </li>
                <li>
                  No-shows: Full booking amount may be charged to the credit
                  card provided to guarantee the reservation.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Additional Information
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Check-in time: 2:00 PM</li>
                <li>Check-out time: 12:00 PM</li>
                <li>
                  Early check-in and late check-out are subject to availability
                  and may incur additional charges.
                </li>
                <li>
                  All rates are inclusive of applicable taxes and service
                  charges.
                </li>
              </ul>
            </div>
            <div className="p-6 border-t">
              <button
                onClick={() => {
                  setShowPoliciesPopup(false);
                  setAgreedToPolicy(true);
                }}
                className="w-full bg-amber-500 text-white py-3 rounded-md font-medium hover:bg-amber-600 transition-colors"
              >
                I Understand and Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CashOnArrivalPolicy;
