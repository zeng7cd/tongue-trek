"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full h-[70px] transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-[#2A4B6F]" : "bg-[#2A4B6F]"
      }`}
    >
      <div className="mx-auto max-w-screen-xl w-full h-full flex justify-between items-center text-[#E1E5EA]">
        <div className="font-bold text-xl">网站Logo</div>
        <nav className="flex gap-5">
          <a href="/">文档</a>
          <a href="/about">功能</a>
          <a href="/products">问题</a>
          <a href="/contact">联系我们</a>
        </nav>
      </div>
    </header>
  );
}
