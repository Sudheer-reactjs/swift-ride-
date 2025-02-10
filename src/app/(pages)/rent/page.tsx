"use client";

import React, { useState } from "react";
import { FormSelect } from "react-bootstrap";
import Plans from "../components/Rent/Plan";
import Breadcrumb from "@/components/Breadcrumb";

const STANDARD_PLAN_ID = 3; // ID for Standard Plan

interface Plan {
  id: number;
  title: string;
}

const Rent = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab
  const [filterByAvailability, setFilterByAvailability] = useState("all");

  const plans: Plan[] = [
    { id: 1, title: "Rideshare" },
    { id: 2, title: "Economy" },
    { id: 3, title: "Standard" },
    { id: 4, title: "Premium" },
  ];

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
    if (tab !== STANDARD_PLAN_ID) {
      setFilterByAvailability("all"); // Reset filter when switching tabs
    }
  };

  const handleChangeAvailabilityFilter = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterByAvailability(e.target.value);
  };

  return (
    <>
      <div>
        <Breadcrumb />
        <div className="block w-full">
          <div className="container ">
            <h2 className="gradient-text mb-[10px]">Rent</h2>
            <p className="large-text">
              Choose a subscription plan and car that suit your lifestyle
            </p>
          </div>
        </div>
        <div className="w-full block py-[32px] md:py-[60px]">
          <div className="container ">
              <h2>Choose your plan</h2>
            {/* Grid container for plans and filter */}
            <div className="plans-grid-container">
              <div className="flex items-center gap-[15px] flex-wrap justify-between py-[22px] md:py-[30px]">
              <div className="plans-section">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handleTabClick(plan.id)}
                    className={`mb-2 btn-plan-responsive plan-btn ${
                      activeTab === plan.id ? "active" : ""
                    }`}
                  >
                    {plan.title}
                  </button>
                ))}
              </div>

              {/* Show filter only if "Standard" plan is selected */}
              {activeTab === STANDARD_PLAN_ID && (
                <div className="filter-container">
                  <label className="filter-label">Filter By</label>
                  <FormSelect
                    value={filterByAvailability}
                    className="btn-plan-responsive"
                    onChange={handleChangeAvailabilityFilter}
                  >
                    <option
                      style={{ color: "#fff", backgroundColor: "#191919" }}
                      value="all"
                    >
                      All Cars
                    </option>
                    <option
                      style={{ color: "#fff", backgroundColor: "#191919" }}
                      value="active"
                    >
                      Available Cars
                    </option>
                    <option
                      style={{ color: "#fff", backgroundColor: "#191919" }}
                      value="inactive"
                    >
                      Unavailable Cars
                    </option>
                  </FormSelect>
                </div>
              )}
              </div>

              {/* Pass the selected tab and filter to Plans */}
              <Plans packageId={activeTab} filter={filterByAvailability} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rent;
