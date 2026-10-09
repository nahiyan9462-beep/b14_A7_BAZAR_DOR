
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CalendarDays } from "lucide-react";

import { IProducts } from "@/types/products";

export interface ProductCardProps {
  products: IProducts;
}

export default function ProductCard({ products }: ProductCardProps) {
  const isUp = products.change.dir === "up";
  const isDown = products.change.dir === "down";

  return (
    <article className="group relative overflow-hidden rounded-3xl border shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/40">
      
      {/* Image */}
      <div className="relative h-60 overflow-hidden "> 

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t " />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10  px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-md">
            <span>{products.categoryIcon}</span>
            {products.categoryNameBn}
          </span>
        </div>

        {/* Change badge */}
        <div className="absolute right-4 top-4">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md ${
              isUp
                ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20"
                : isDown
                ? "bg-red-500/15 text-red-400 ring-1 ring-red-500/20"
                : "bg-slate-500/20 text-slate-300 ring-1 ring-slate-500/20"
            }`}
          >
            {isUp && <ArrowUpRight size={14} />}
            {isDown && <ArrowDownRight size={14} />}
            {products.change.pct}%
          </span>
        </div>

        {/* Product name over image */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-800">
            {products.category}
          </p>

          <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-lime-300">
            {products.nameBn}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Today's price */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm text-slate-500">আজকের দাম</p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-white">
                ৳{products.today}
              </span>

              <span className="text-sm text-slate-500">
                / {products.unit}
              </span>
            </div>
          </div>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              isUp
                ? "bg-emerald-500/10 text-emerald-400"
                : isDown
                ? "bg-red-500/10 text-red-400"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {isUp ? (
              <ArrowUpRight size={20} />
            ) : isDown ? (
              <ArrowDownRight size={20} />
            ) : (
              <span className="text-lg">−</span>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
          
          <div className="rounded-2xl border border-green-500 p-3 transition-colors duration-300 group-hover:border-green-500">
            <p className="mb-1 text-xs text-slate-900">
              গতকাল
            </p>

            <p className="font-semibold text-slate-200">
              ৳{products.yesterday}
            </p>
          </div>

          <div className="rounded-2xl border border-green-500 p-3 transition-colors duration-300 group-hover:border-slate-700">
            <p className="mb-1 text-xs text-slate-500">
              গত সপ্তাহ
            </p>

            <p className="font-semibold text-slate-200">
              ৳{products.lastWeek}
            </p>
          </div>

          <div className="rounded-2xl border border-green-500 p-3 transition-colors duration-300 group-hover:border-slate-700">
            <p className="mb-1 text-xs text-slate-500">
              গত মাস
            </p>

            <p className="font-semibold text-slate-200">
              ৳{products.lastMonth}
            </p>
          </div>

          <div className="rounded-2xl border border-green-500 p-3 transition-colors duration-300 group-hover:border-slate-700">
            <p className="mb-1 text-xs text-slate-500">
              পরিবর্তন
            </p>

            <p
              className={`font-semibold ${
                isUp
                  ? "text-emerald-400"
                  : isDown
                  ? "text-red-400"
                  : "text-slate-300"
              }`}
            >
              {isUp ? "+" : ""}
              {products.change.pct}%
            </p>
          </div>

        </div>

        {/* Details button */}
        <Link
          href={`/products/${products.slug}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-lime-300/10 active:scale-[0.98]"
        >
          <CalendarDays size={17} />
          বিস্তারিত দেখুন
        </Link>

      </div>

      {/* Bottom hover line */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
          isUp
            ? "bg-emerald-400"
            : isDown
            ? "bg-red-400"
            : "bg-slate-400"
        }`}
      />
    </article>
  );
}
