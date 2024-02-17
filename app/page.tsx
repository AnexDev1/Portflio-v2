"use client";
import React from "react";
import { LampDemo } from "@/components/ui/lamp-header";
import { FloatingNavDemo } from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      <LampDemo />

      <div style={{ height: "100vh" }}>hell</div>
    </>
  );
}
