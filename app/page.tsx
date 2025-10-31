import TeslaFooter from "./components/Footer";
import Hero from "./components/Hero";
import TeslaEnergyCarousel from "./components/TeslaEnergyCursor";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TeslaEnergyCarousel/>
      <TeslaFooter/>
      
      <div className='bg-[#122530]/20 backdrop-blur-2xl border-white/10 border-t border-x w-[30%] flex justify-center pt-5 rounded-t-4xl sticky z-10 bottom-0 left-0 right-0 mx-auto'>
      <button className='text-[#122530] font-montserrat shadow-md font-semibold tracking-wide w-[60%] py-4 rounded-t-3xl bg-white cursor-pointer'>
        Schedule a Test Drive
        </button>
      </div>
    </div>
  );
}
