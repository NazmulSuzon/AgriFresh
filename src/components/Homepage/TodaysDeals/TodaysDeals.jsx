"use client";
import React, { useEffect, useState } from "react";
import styles from "../../shared/Button.module.css";

const TodaysDeals = () => {
  const [counter, setCounter] = useState(59); // Set initial countdown value

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup timer
    }
  }, [counter]);

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-8 my-20 mx-auto container font-serif">
      <div className="w-[400px] h-[400px]">
        <img src="../assets/hotDeals/honey.jpg" alt="honey" />
      </div>
      <div className="flex flex-col justify-center text-center gap-y-6">
        <h1 className="text-3xl font-bold text-primary">Todays Hot Deals</h1>
        <p className="text-5xl font-bold">
          Orginal Stock Honey <br />
          Combo Package
        </p>
        {/* Countdown start */}
        <div className="grid grid-flow-col gap-5 text-center justify-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": counter.toString() }}>{counter}</span>
            </span>
            sec
          </div>
        </div>
        {/* Count down finish */}
        <div className="mt-2 text-white">
        <button>
          <span className={styles.button}>Shop Now</span>
        </button>
        </div>
      </div>
      <div className="w-[400px] h-[400px]">
        <img src="assets/hotDeals/strawberry.jpg" alt="" />
      </div>
    </div>
  );
};

export default TodaysDeals;
