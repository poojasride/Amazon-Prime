function HeroLeft() {
  const heroDeals = [
    "Join Prime Lite at ₹799/year",
    "Join Prime Annual at ₹1499/year",
    "Join Prime Monthly at ₹299/month",
    "Compare All Plans",
  ];

  return (
    <>
      {heroDeals.map((deal, index) => (
        <div key={index}>
          <button className=" bg-white w-4/6 h-16  text-sm sm:text-md md:text-lg lg:text-xl text-black font-bold tracking-normal font-medium text-gray-900 py-4  mt-4 hover:scale-105 transition-transform duration-150 ease-in-out rounded-lg  cursor-pointer">
            {deal}
          </button>
          {index == 0 && <p className=" text-center w-3/4 h-16 text-xl text-white font-bold tracking-normal font-medium  py-1 px-10 py-4 ">Effectively ₹67/month</p>}
          {index == 1 && <p className=" text-center w-3/4 h-16 text-xl text-white font-bold tracking-normal font-medium  py-1 px-10 py-4 ">Effectively ₹125/month</p>}
        </div>
      ))}
    </>
  );
}
export default HeroLeft;
