const Logo = () => {
  return (
    <div>
      <a
        href="#"
        className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
      >
        <img
          src="https://demo.themesberg.com/windster/images/logo.svg"
          className="h-10 mr-4"
          alt="Logo"
        />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          GAT App
        </span>
      </a>
    </div>
  );
};

export default Logo;
