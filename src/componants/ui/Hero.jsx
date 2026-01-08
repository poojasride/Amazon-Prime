import HeroLeft from "./HeroLeft";
import heroRight from "../../assets/heroRight-1.jpg";


function Hero() {
  return (
    <section  className="  max-w-[vh] max-h-[vh] mx-auto text-white p-4 ">
        
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10  ">
       
        <div className="left-side  ">
          <h1 className="text-5xl  font-bold mt-8 mb-4">
            Welcome to Prime Video
          </h1>
          <p className="text-xl  font-medium mt-8 mb-4">
            Watch the latest movies, TV, and award-winning Amazon Originals
          </p>

          <HeroLeft />
         
        </div>

        <div  style={{ backgroundImage: `url('${heroRight}')`, objectFit: "fill" }} className="right-side  order-first md:order-last bg-cover bg-center rounded-lg ">
          <img src={heroRight} alt=""  className=" object-cover  md:hidden "/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
