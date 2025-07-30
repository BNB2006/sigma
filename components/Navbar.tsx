"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";

import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import ActiveUsers from "./users/ActiveUsers";
import { NewThread } from "./comments/NewThread";

const Navbar = ({ activeElement, imageInputRef, handleImageUpload, handleActiveElement }: NavbarProps) => {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) && value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className="flex select-none items-center justify-between gap-6 bg-primary-surface/95 backdrop-blur-md border-b border-primary-border px-6 py-4 text-primary-text shadow-lg">

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-accent to-primary-accentHover rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🛠️</span>
          </div>
          <span className="font-bold text-lg gradient-text">Sigma</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {navElements.map((item: ActiveElement | any) => (
          <div
            key={item.name}
            onClick={() => {
              if (Array.isArray(item.value)) return;
              handleActiveElement(item);
            }}
            className={`group relative px-3 py-2 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer
            ${isActive(item.value) 
              ? "bg-primary-accent text-white shadow-glow" 
              : "hover:bg-primary-surfaceHover hover:border-primary-border border border-transparent"
            }
            `}
          >
            {Array.isArray(item.value) ? (
              <ShapesMenu
                item={item}
                activeElement={activeElement}
                imageInputRef={imageInputRef}
                handleActiveElement={handleActiveElement}
                handleImageUpload={handleImageUpload}
              />
            ) : item?.value === "comments" ? (
              <NewThread>
                <Button className="relative w-6 h-6 object-contain bg-transparent hover:bg-transparent p-0">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className={`transition-all duration-200 ${isActive(item.value) ? "invert brightness-0" : "filter-none"}`}
                  />
                </Button>
              </NewThread>
            ) : (
              <Button className="relative w-6 h-6 object-contain bg-transparent hover:bg-transparent p-0">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className={`transition-all duration-200 ${isActive(item.value) ? "invert brightness-0" : "filter-none"}`}
                />
              </Button>
            )}
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-primary-surface border border-primary-border rounded-md text-xs text-primary-textSecondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <ActiveUsers />
      </div>
    </nav>
  );
};

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);
