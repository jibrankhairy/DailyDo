const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 py-4 shadow-lg fixed bottom-0 w-full md:flex justify-center hidden sm:hidden md:block lg:block xl:block">
      <div className="container mx-auto text-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} DailyDo. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-white">
          Developed with passion by jibrankhry
        </p>
      </div>
    </footer>
  );
};

export default Footer;
