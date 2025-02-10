'use client';

import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import Plans from '../components/Rent/Plan';

interface Plan {
  id: number;
  title: string;
}

const Rent = () => {
  const [activeTab, setActiveTab] = useState(4); // Default active tab
  const [filterByAvailability] = useState('all'); // Static filter value, you can remove it if not needed

  const plans: Plan[] = [
    { id: 1, title: 'Basic Plan' },
    { id: 2, title: 'Essential Plan' },
    { id: 3, title: 'Plus Plan' },
    { id: 4, title: 'Premium Plan' }
  ];

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container className="pt-5">
        <Breadcrumb className="mt-3">
          <Breadcrumb.Item href="/plans">Plans</Breadcrumb.Item>
          <Breadcrumb.Item active>Rent</Breadcrumb.Item>
        </Breadcrumb>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rent</h1>
          <p className="text-gray-400">Choose a subscription plan and car that suit your lifestyle</p>
        </div>

        <div className="page-heading mt-5">
          <h2>Choose your plan</h2>
        </div>

        {/* Grid container for plans and filter */}
        <div className="plans-grid-container">
          <div className="plans-section">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handleTabClick(plan.id)}
                className={`mb-2 btn-plan-responsive plan-btn ${activeTab === plan.id ? 'active' : ''}`}
              >
                {plan.title}
              </button>
            ))}
          </div>
          
          <Plans packageId={activeTab} filter={filterByAvailability} />
        </div>
      </Container>
    </>
  );
};

export default Rent;
