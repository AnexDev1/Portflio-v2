"use client";
import React from "react";
import { Lamp } from "@/components/ui/lamp-header";
import { FloatingNavBar } from "@/components/ui/navbar";
import { CardHoverEffect } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <FloatingNavBar />
      <Lamp />
      <CardHoverEffect />
    </>
  );
}
