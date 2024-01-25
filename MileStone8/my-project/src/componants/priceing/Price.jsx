import React from 'react';
import ShowsPrice from './ShowPring';

const Priceing = () => {
    const pricingOptions = [
        {
          "id": 1,
          "name": "Starter",
          "features": [
            "Access to cardio machines",
            "Limited access to weight training area",
            "One group fitness class per week"
          ],
          "price": 24.99
        },
        {
          "id": 2,
          "name": "Standard",
          "features": [
            "Full access to cardio and weight training areas",
            "Unlimited group fitness classes",
            "Sauna and steam room access"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Premium",
          "features": [
            "All Standard features",
            "Personal trainer sessions (2/month)",
            "Towel service",
            "Smoothie bar access"
          ],
          "price": 79.99
        },
        {
          "id": 4,
          "name": "Ultimate",
          "features": [
            "Access to all facilities at any time",
            "Unlimited personal training sessions",
            "VIP locker room access",
            "Nutrition consultation included"
          ],
          "price": 119.99
        }
      ];
    return (
        <div className='grid grid-cols-4 gap-5 px-10'>
   
        {pricingOptions.map(option => (
          <ShowsPrice key={option.id} option={option} />
        ))}
      </div>
    );
};

export default Priceing; 