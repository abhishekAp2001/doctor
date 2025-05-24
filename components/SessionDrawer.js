"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import SessionSection from "./SessionSection";
import { timeSlots } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SessionDrawer = ({
  isOpen,
  onOpenChange,
  selectedTime,
  setSelectedTime,
}) => {
    const router=useRouter()
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gradient-to-b  from-[#f4f2ff] to-[#ffffff] max-h-[90vh] mx-auto w-full max-w-md rounded-t-lg"> 
        <DrawerHeader className="relative">
          <DrawerTitle className="text-base text-center font-semibold">
            Select Session Time
          </DrawerTitle>
          <DrawerClose className="absolute right-4 top-1/2 -translate-y-1/2">
            <X className="h-5 w-5 text-gray-600" />
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4 space-y-4 overflow-y-auto">
          {Object.entries(timeSlots).map(([period, times]) => (
            <SessionSection
              key={period}
              period={period}
              times={times}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          ))}
        </div>
        <DrawerFooter className="flex flex-row justify-between items-center p-4 gap-2">
          <DrawerClose asChild>
            <Button variant="outline" className="flex-1 border border-[#CC627B] rounded-[8px] text-sm font-semibold text-[#CC627B]">
              Cancel
            </Button>
          </DrawerClose>
          <Button
            className="flex-1 bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-white"
            onClick={() => {
              if (selectedTime) {
                console.log(`Session booked at ${selectedTime}`);
                onOpenChange(false);
              }
              router.push("/add_patient")
            }}
          >
            Confirm
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SessionDrawer;
