"use client";
import React from "react";
import { LampDemo } from "@/components/ui/lamp-header";
import { FloatingNavDemo } from "@/components/ui/navbar";
import { content } from "@/components/ui/projects";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      <LampDemo />
      <StickyScroll content={content} />
    </>
  );
}
