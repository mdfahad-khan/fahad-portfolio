import React from 'react';

const calculateGradientColor = (percentage) => {
  const blue = 100 - percentage;
  const green = percentage;
  return `linear-gradient(to right, #3498db ${blue}%, #2ecc71 ${green}%)`;
};

const SkillBar = ({ skill, percentage }) => {
  const gradientColor = calculateGradientColor(percentage);

  return (
    <div className="bars mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{skill}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div
        className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden"
        style={{ background: gradientColor }}
      >
        <div
          className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}