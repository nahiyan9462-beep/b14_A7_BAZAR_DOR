'use client'

import { IProducts } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  products: IProducts;
}

export default function ProductCard({ products }: ProductCardProps) {
  const isUp = products.change.dir === "up";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <Image
          src={products.image}
          width={60}
          height={60}
          alt={products.nameBn}
          
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
          {products.categoryNameBn}
        </div>

        {/* Change */}
        <div
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
            isUp
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isUp ? "↑" : "↓"} {products.change.pct}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {products.nameBn}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            প্রতি {products.unit}
          </p>
        </div>

        {/* Today's Price */}
        <div className="mb-5 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">আজকের দাম</p>

          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">
              ৳{products.today}
            </span>

            <span className="mb-1 text-sm text-gray-500">
              / {products.unit}
            </span>
          </div>
        </div>

        {/* Price History */}
        <div className="grid grid-cols-3 gap-2 border-b border-gray-100 pb-4">
          <div>
            <p className="text-xs text-gray-400">গতকাল</p>
            <p className="mt-1 font-semibold text-gray-700">
              ৳{products.yesterday}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">গত সপ্তাহ</p>
            <p className="mt-1 font-semibold text-gray-700">
              ৳{products.lastWeek}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">গত মাস</p>
            <p className="mt-1 font-semibold text-gray-700">
              ৳{products.lastMonth}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/products/${products.slug}`}
          className="mt-4 block rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Veiw Details
        </Link>
      </div>
    </article>
  );
}