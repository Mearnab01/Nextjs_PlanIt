import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center w-full min-h-screen bg-dotted-pattern bg-primary-50 bg-cover bg-center bg-fixed">
      {children}
    </div>
  );
};

export default AuthLayout;
