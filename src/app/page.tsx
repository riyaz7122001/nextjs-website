import { Navbar, CallToAction, Billing, CardDeal, Clients, Footer, Testimonials, Stats, Hero, Business } from "@/components";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`px-6 flex justify-center items-center `}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-red px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary flex justify-center items-start px-6 sm:px-16`}>
        <div className={`xl:max-w-[1400px] w-full`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Clients />
          <CallToAction />
          {/* <Testimonials />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
}
