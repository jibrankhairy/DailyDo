import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center animate-bounce">
          DailyDo
        </h1>
        <p className="text-lg text-white text-center mt-2 opacity-90">
          Achieve more, stress less – your ultimate task management tool.
        </p>
      </div>
    </div>
  );
};

export default Header;
