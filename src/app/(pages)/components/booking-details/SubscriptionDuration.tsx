import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SubscriptionDurationProps {
  interval: string;
  distanceUnit: string;
  effectiveRadius: string;
  isUSA: boolean;
  insuranceEffectiveArea: string;
}

const SubscriptionDuration: React.FC<SubscriptionDurationProps> = ({
  interval,
  distanceUnit,
  effectiveRadius,
  isUSA,
  insuranceEffectiveArea,
}) => {
  const [showMapModal, setShowMapModal] = useState(false);

  // Close the modal when clicking outside of it
  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowMapModal(false);
    }
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showMapModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMapModal]);

  const getPlanName = (interval: string) => {
    return `Plan Name for ${interval}`; // Modify this logic as needed
  };

  return (
    <div className="dis-card">
      <p className="text-white opacity-60">Subscription Duration</p>
      <h6 className="headername text-[#57E667] mt-[12px]">
        {getPlanName(interval)}
      </h6>
      <br />
      <p className="opacity-60">Subscription Benefits and Requirements</p>
      <ol>
            <li>
              <h6 className="headername">By subscribing, you will enjoy:</h6>
            </li>
            <ul>
              <li>
                Unlimited {distanceUnit} within {effectiveRadius}.{' '}
                {!isUSA && (
                  <a
                    className="swift-green"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMapModal(true);
                    }}
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    View Map
                  </a>
                )}
              </li>
              <li>Insurance coverage applicable only within {insuranceEffectiveArea}.</li>
              <li>Vehicle registration services.</li>
              <li>Unlimited maintenance for the subscribed vehicle.</li>
              <li>Change or cancel your subscription at any time (no refund in case of cancellation)</li>
            </ul>
            <li>
              <h6 className="headername">Keep in mind:</h6>
            </li>
            <ul>
              <li>Please book a time that is at least 24 hours from now so we can get your car ready for pickup.</li>
              <li>Subscribers must be <strong><em><u>25</u></em></strong> years of age or older to be eligible for this subscription service.</li>
              <li>Please bring your valid driver&apos;s licence to pick up your vehicle.</li>
            </ul>
      </ol>

      {/* Modal to display the map image */}
      <div
        className={`fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
          showMapModal ? 'block' : 'hidden'
        }`}
        onClick={handleModalClose}
      >
        <div className="bg-[#1D2125] p-6 shadow-lg max-w-[450px] w-[94%] max-h-[90vh] rounded-[12px] overflow-y-auto">
            <div className="flex items-center justify-between gap-1 mb-4">
          <h2 className="text-lg font-semibold  text-white">Perth Coverage</h2>
          <button
              onClick={() => setShowMapModal(false)}
              className=" text-white p-2 rounded-md"
            >
              X
            </button>
            </div>
          <Image
            src="/assets/perth-map.jpg"
            alt="perth-map"
            layout="intrinsic"
            width={1166}
            height={1654}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDuration;
