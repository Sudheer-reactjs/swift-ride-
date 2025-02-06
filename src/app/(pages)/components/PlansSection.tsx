import Link from "next/link";

const plans = [
  {
    name: "Compact",
    features: [
      "Includes all compact cars for city and minor commutes",
      "500 included miles with options to add more",
      "Unlimited maintenance",
      "Option to switch cars once a month for free",
    ],
    price: "299",
    isPopular: false,
  },
  {
    name: "Premium",
    features: [
      "Luxury and sophistication with premium car options",
      "500 included with flexibility to add more.",
      "Unlimited maintenance",
      "Option to switch cars once a month for free",
    ],
    price: "699",
    isPopular: false,
  },
  {
    name: "Rideshare",
    features: [
      "Unlimited miles",
      "Unlimited maintenance",
      "Ride Share enabled",
      "No upfront payment options available",
      "Option to switch cars ONCE a month for free",
    ],
    price: "349",
    isPopular: false,
  },
  {
    name: "Standard",
    features: [
      "Versatile standard-sized cars for a comfortable driving experience",
      "500 included miles with options to add more",
      "Includes all sedans and some mini SUVs",
      "Option to switch cars twice a month for free",
    ],
    price: "399",
    isPopular: true,
  },
];

const PlansSection = () => {
  return (
    <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative px-[24px] py-[32px] rounded-[20px] flex flex-col justify-between gap-[32px] ${
            plan.isPopular ? "popular-bg text-[#191919]" : "bg-[#1D2125] text-white "
          }`}
        > <div>
          {plan.isPopular && (
            <div className="popular-badge">
              <span>Most Popular</span>
            </div>
          )}
          <div className="text-center mb-[22px]">
            <h3 className="text-[24px] font-semibold tracking-[-0.144px]">{plan.name}</h3>
          </div>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="py-1">
                {feature}
              </li>
            ))}
          </ul>
          </div>
          <div className="flex flex-col gap-[8px]">
          <div className="pb-3">
            <h3 className="text-[30px] font-semibold tracking-[-0.225px]">${plan.price}/ month</h3>
          </div>
          <Link href="/rent">
            <button
              className={`w-full plan-button transition-all ${
                plan.isPopular
                  ? "popular-plan"
                  : "normal-plan"
              }`}
            >
              Subscribe
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlansSection;
