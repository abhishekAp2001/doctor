"use client";
import {
  LucideSearch,
  LucideFilter,
  LayoutGrid,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
} from "@/components/ui/accordion";
import { useState } from "react";
import { doctors } from "@/lib/utils";
import DoctorCard from "@/components/DoctorCard";
import SessionDrawer from "@/components/SessionDrawer";
import Header from "@/components/Header";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b space-y-4 from-[#DFDAFB] to-[#F9CCC5] max-w-[480px] mx-auto">
      {/* Header */}
      <Header title="Available Doctors" />

      {/* Search */}
      <div className="flex space-x-1 px-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Search Psychologists..."
            className="bg-white rounded-lg text-[14px] py-[11px] px-4"
          />
          <LucideSearch className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <Button variant="outline" className=" rounded-lg px-3 py-[11px]">
          <LayoutGrid className="w-4 h-4" />
        </Button>
        <Button variant="outline" className=" rounded-lg px-3 py-[11px]">
          <LucideFilter className="w-5 h-5" />
        </Button>
      </div>

      {/* Doctor List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4">
        <Accordion type="multiple" className="space-y-3">
          {doctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doc={doc}
              onBookClick={() => setIsDrawerOpen(true)}
            />
          ))}
        </Accordion>
      </div>

      {/* Drawer for Session Time Selection */}
      <SessionDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
}
