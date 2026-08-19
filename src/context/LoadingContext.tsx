"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Zap, ShieldCheck } from "lucide-react";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  // Automatically dismiss loading screen once route transition completes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}

      {/* Unique Custom Energy Voltage Wave Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center text-white animate-in fade-in duration-300">
          
          {/* Pulsing Energy Shield Container */}
          <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
            {/* Outer Pulsing Glow */}
            <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-2xl animate-pulse"></div>
            
            <div className="relative w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
              <Zap className="w-10 h-10 text-white animate-bounce" />
            </div>
          </div>

          {/* High-Tech Voltage Energy Bar Equalizer */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2.5 bg-accent h-6 rounded-full animate-[bounce_1s_infinite_100ms]"></div>
            <div className="w-2.5 bg-accent-light h-10 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
            <div className="w-2.5 bg-accent h-14 rounded-full animate-[bounce_1s_infinite_300ms]"></div>
            <div className="w-2.5 bg-accent-light h-10 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
            <div className="w-2.5 bg-accent h-6 rounded-full animate-[bounce_1s_infinite_500ms]"></div>
          </div>

          {/* Status Text & Progress Line */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center justify-center">
              <span>Loading Specifications</span>
              <span className="ml-1 text-accent animate-pulse">...</span>
            </h3>
            <p className="text-xs text-white/70 tracking-wider uppercase font-medium flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-accent-light" /> ISO 9001:2015 Verified Specs
            </p>
          </div>

          {/* Animated Voltage Fill Bar */}
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mt-8">
            <div className="h-full bg-gradient-to-r from-accent via-accent-light to-white w-full animate-[shimmer_1.5s_infinite]"></div>
          </div>

        </div>
      )}
    </LoadingContext.Provider>
  );
}
