import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import {
  DecorativeElements,
  StatRibbons,
} from "@/components/shared/DecorativeElements";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 relative overflow-hidden">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0 items-center">
          <div className="flex flex-col justify-center gap-8 relative z-10">
            <h1 className="h1-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-text">
              Make Your Events with,{" "}
              <span className="underline decoration-wavy decoration-purple-400">
                PlanIt
              </span>
            </h1>

            <p className="p-regular-20 md:p-regular-24 text-gray-700 max-w-lg">
              From dream to reality in minutes. Create unforgettable experiences
              or discover hidden gems in your community.
              <span className="block mt-2 font-semibold text-purple-600">
                Where will your next adventure begin?
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="button w-full sm:w-fit hover:scale-105 transition-transform bg-[#9a6efe] text-slate-100 hover:bg-purple-800"
              >
                <Link href="#events">
                  Explore Events <span className="ml-2">→</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="button w-full sm:w-fit bg-white/80 hover:bg-white"
              >
                <Link href="/create">
                  Create Yours <span className="ml-2">✨</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/images/hero.png"
              alt="Diverse group of people celebrating at a vibrant event"
              width={900}
              height={900}
              className="max-h-[600px] object-contain object-center hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 relative"
      >
        <DecorativeElements />
        <div className="relative max-w-3xl">
          <h2 className="h2-bold text-gray-900">
            Trusted by{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Thousands of Events</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-purple-200 opacity-40 -rotate-1"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our vibrant community where every event tells a story. From
            intimate gatherings to grand celebrations.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection />
        <StatRibbons />
      </section>
    </>
  );
};

export default HomePage;
