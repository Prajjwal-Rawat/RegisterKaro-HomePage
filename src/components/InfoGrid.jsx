import React from 'react';
import { BusinessGrid } from '../assets/Data/servicesGrid';

const InfoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {BusinessGrid.map((card, index) => (
          <div
            key={index}
            className={`
              ${index === 0 ? 'lg:col-span-2 lg:row-span-1 lg:h-[270px] p-0' : ''}
              ${card.order === 1 ? 'p-6 bg-[#FCDDEC] rounded-md' : 'p-6 bg-white rounded-md'}
              ${card.order === 2 ? 'p-6 bg-[#F1FBF3] rounded-md' : 'p-6 bg-white rounded-md'}
              ${card.order === 4 ? 'p-6 bg-[#FBF1FB] rounded-md' : 'p-6 bg-white rounded-md'}
              ${card.order === 5 ? 'p-6 bg-[#27AE600A] rounded-md' : 'p-6 bg-white rounded-md'}
              ${card.order === 3 ? 'lg:col-start-2 bg-[#EDF3FF] rounded-md' : ''}
            `}
          >
            {index === 0 ? (
              <div className="flex flex-col gap-4">
                <p className="text-[#EB8D15]">{card.text}</p>
                <h1 className="text-[32px] font-bold text-[#272D37]">{card.heading}</h1>
                <p className="text-[15px] font-medium text-[#0D1216]">{card.subHeading}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center">
                <img src={card.icon} alt="icon" className="w-16 h-16 object-contain" />
                <h1 className="text-lg font-semibold text-gray-900">{card.heading}</h1>
                <p className="text-sm text-gray-600">{card.subHeading}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoGrid;
