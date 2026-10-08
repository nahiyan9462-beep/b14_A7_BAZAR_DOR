
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/bazar-hero.png";

export default function MarketBanner() {
  return (
    <section className="mt-5 w-full overflow-hidden bg-[#e9f8f4]">
      <div className="container mx-auto max-w-[1536px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="relative flex min-h-[430px] items-center overflow-hidden rounded-3xl bg-[#dff5ef] px-6 py-10 shadow-sm sm:px-10 md:px-12 lg:px-16">
          
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#bde9dc] opacity-60" />

          <div className="relative z-10 grid w-full items-center gap-10 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_380px]">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              
              {/* Date */}
              <div className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#35625e] shadow-sm">
                Tuesday, October 6, 2026
              </div>

              {/* Heading */}
              <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[#102c3a] sm:text-4xl md:text-5xl lg:text-6xl">
                Today&apos;s Market Prices{" "}
                <span className="text-[#12a765]">at a Glance</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base leading-7 text-[#40545a] sm:text-lg sm:leading-8">
                Check the latest prices of rice, lentils, oil, vegetables,
                fish, meat, eggs and spices. Compare market-wise prices,
                minimum and maximum rates, and daily changes — all in one
                place.
              </p>

              {/* Button */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl bg-[#12a765] px-7 py-3.5 text-base font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d8e56] hover:shadow-lg"
                >
                  View All Products
                  <span className="ml-2 text-lg">→</span>
                </Link>

                <Link
                  href="/market"
                  className="inline-flex items-center justify-center rounded-xl border border-[#b8dcd3] bg-white/70 px-7 py-3.5 text-base font-semibold text-[#24534d] transition duration-200 hover:bg-white"
                >
                  Today&apos;s Market
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto hidden w-full max-w-[300px] md:block lg:max-w-[360px]">
              <div className="absolute inset-0 rounded-full bg-white/50 blur-2xl" />

              <Image
                src={logo}
                alt="Market basket with fruits and vegetables"
                width={400}
                height={400}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}