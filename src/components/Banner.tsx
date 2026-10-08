import Image from "next/image";
import logo from '@/assets/bazar-hero.png'

export default function MarketBanner() {
  return (
    <section className="w-full bg-[#e7f8fb] mt-5">
      <div className=" container mx-auto flex min-h-[430px] max-w-[1536px] items-center justify-between px-8 py-10 md:px-12 lg:px-16">

        {/* Left Content */}
        <div className="max-w-[850px]">

          {/* Date */}
          <p className="mb-6 text-lg font-medium text-[#35625e]">
            Tuesday, October 6, 2026
          </p>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-bold leading-tight text-[#102c3a] md:text-5xl lg:text-[50px]">
            Today&apos;s Market Prices at a Glance
          </h1>

          {/* Description */}
          <p className="max-w-[820px] text-lg leading-8 text-[#40545a] md:text-xl">
            Prices of rice, lentils, oil, vegetables, fish, meat, eggs and
            spices — detailed market-wise information, average minimum and
            maximum prices, and price changes all in one place.
          </p>

          {/* Button */}
          <button
            type="button"
            className="mt-8 rounded-lg bg-[#12a765] px-8 py-4
                       text-lg font-semibold text-white
                       shadow-md transition-all duration-200
                       hover:bg-[#0d8e56] hover:shadow-lg"
          >
            View All Products
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <Image
            src={logo}
            alt="Market basket with fruits"
            width={300}
            height={300}
            className="w-[230px] lg:w-[300px]"
          />
        </div>

      </div>
    </section>
  );
}