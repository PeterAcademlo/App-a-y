import spiner from "../assets/icons/loader-regular-48.png";

const Spiner = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <img src={spiner} className="animate-spin w-12 h-12" alt="Loading..." />
    </div>
  );
};

export default Spiner;
