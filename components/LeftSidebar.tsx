"use client";

import { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  const memoizedShapes = useMemo(
    () => (
      <section className="flex flex-col border-r border-primary-border bg-primary-surface/95 backdrop-blur-md text-primary-text min-w-[280px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
  
        <div className="sticky top-0 bg-primary-surface/95 backdrop-blur-md border-b border-primary-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
            <h3 className="text-sm font-semibold text-primary-text uppercase tracking-wider">Layers</h3>
            <span className="ml-auto text-xs text-primary-textSecondary bg-primary-surfaceHover px-2 py-1 rounded-full">
              {allShapes?.length || 0}
            </span>
          </div>
        </div>

        <div className="flex flex-col p-2">
          {allShapes?.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-primary-surfaceHover rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-primary-text mb-2">No layers yet</h4>
              <p className="text-xs text-primary-textSecondary">Start creating shapes to see them here</p>
            </div>
          ) : (
            allShapes?.map((shape: any, index: number) => {
              const info = getShapeInfo(shape[1]?.type);

              return (
                <div
                  key={shape[1]?.objectId}
                  className="group my-1 flex items-center gap-3 px-4 py-3 hover:bg-primary-surfaceHover hover:border-primary-accent/30 border border-transparent rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-surfaceHover rounded-lg group-hover:bg-primary-accent/20 transition-all duration-200">
                    <Image
                      src={info?.icon}
                      alt='Layer'
                      width={16}
                      height={16}
                      className='group-hover:scale-110 transition-transform duration-200'
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className='text-sm font-medium text-primary-text capitalize truncate'>{info.name}</h3>
                    <p className='text-xs text-primary-textSecondary'>Layer {index + 1}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
};

export default LeftSidebar;
