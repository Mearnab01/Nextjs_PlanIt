import React from "react";

export const DecorativeElements = () => {
  return (
    <>
      <div className="absolute -top-20 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
    </>
  );
};

export const StatRibbons = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 text-center">
          <div className="flex-1 min-w-[150px]">
            <p className="text-3xl font-bold text-purple-600">10K+</p>
            <p className="text-sm text-gray-600">Active Members</p>
          </div>
          <div className="flex-1 min-w-[150px]">
            <p className="text-3xl font-bold text-pink-600">2K+</p>
            <p className="text-sm text-gray-600">Events Monthly</p>
          </div>
          <div className="flex-1 min-w-[150px]">
            <p className="text-3xl font-bold text-indigo-600">50+</p>
            <p className="text-sm text-gray-600">Categories</p>
          </div>
          <div className="flex-1 min-w-[150px]">
            <p className="text-3xl font-bold text-blue-600">98%</p>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-gray-200 animate-pulse"></div>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-gray-200 animate-pulse delay-100"></div>
        <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-gray-200 animate-pulse delay-200"></div>
      </div>
    </>
  );
};
