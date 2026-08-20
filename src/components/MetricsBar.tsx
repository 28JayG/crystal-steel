'use client';

import React, { useState, useEffect } from 'react';
import metricsData from '@/data/metrics.json';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: outQuad
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const MetricsBar: React.FC = () => {

  return (
    <section className="w-full bg-amber-500 py-8 md:py-10 z-10 shadow-md relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {metricsData.map((metric, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-r border-slate-950/10 last:border-0">
              <span className="text-3xl md:text-4xl font-extrabold text-slate-950 tabular-nums">
                <Counter end={metric.value} suffix={metric.suffix} />
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
