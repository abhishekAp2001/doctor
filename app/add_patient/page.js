"use client";

import React, { useState } from "react";
import {  Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Page() {
  const router =useRouter()  
  const [sessionType, setSessionType] = useState("Counselling");
  const [sessionMode, setSessionMode] = useState(
    "online"
  );

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b space-y-4 from-[#f9f9f9] to-[#ffe7e4] max-w-[480px] mx-auto">
      {/* Back Header */}
      <Header title="Schedule Session" />

      <div className="bg-gradient-to-b from-[#f9f9f9] to-[#ffe7e4]">
        <div className=" px-4 py-0">
        {/* Patient */}
        <p htmlFor="" className="text-sm font-medium text-gray-500" >Patient</p>
        <div className="bg-[#FFFFFF80] rounded-xl p-4 flex items-center space-x-4 shadow-sm ">
          <Avatar>
            <AvatarImage src="./akshit.png" alt="Shubham Naik" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-800">Shubham Naik</p>
            <p className="text-xs text-gray-500">+91 9876543210</p>
          </div>
        </div>

        {/* Assign Practitioner */}
        <p htmlFor="" className="text-sm font-medium text-gray-500 mt-5">Assign Practitioner</p>
        <div className="bg-[#FFFFFF80] rounded-xl p-4 flex items-center space-x-4 shadow-sm">
          <Avatar>
            <AvatarImage src="./akshit.png" alt="Saria Dilon" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-800">Saria Dilon</p>
            <p className="text-xs text-gray-500">+91 9876543210</p>
          </div>
        </div>

        {/* Session Type */}
        <div className="mt-5">
          <Label htmlFor="session-type">Session Type</Label>
          <Select className="mt-5"
            value={sessionType}
            onValueChange={(v) => setSessionType(v)}
          >
            <SelectTrigger id="session-type" className="w-full">
              <SelectValue placeholder="Select type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-xs font-semibold">
                <SelectItem value="Counselling" className="text-xs font-semibold ">Counselling ( 1 hour )</SelectItem>
                <SelectItem value="Therapy">Therapy</SelectItem>
                <SelectItem value="Check-up">Check-up</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Session Mode */}
        <div className="mt-5">
          <Label className="text-sm text-gray-500">Session Mode</Label>
          <RadioGroup
            value={sessionMode}
            onValueChange={(v) =>
              setSessionMode(v)
            }
            className="flex space-x-6 text-base font-semibold mt-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-person" id="r-inperson" />
              <Label htmlFor="r-inperson" className="cursor-pointer">
                In-Person
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="r-online" />
              <Label htmlFor="r-online" className="cursor-pointer">
                Online
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="space-y-1">
            <Label htmlFor="session-date " className="text-sm text-gray-500 font-medium">Session Date</Label>
            <div className="relative">
              <Input
                id="session-date"
                placeholder="MM/DD/YYYY"
                className="pr-10 bg-white py-[11.93px]"
              />
              <Calendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="session-time" className="text-sm text-gray-500 font-medium">Session Time Slot</Label>
            <div className="relative">
              <Input
                id="session-time"
                placeholder="HH : MM"
                className="pr-10 bg-[#edf2fa9e] py-[11.93px] px-4
"
              />
              <Clock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Online Session Link */}
        {sessionMode === "online" && (
          <div className="space-y-1 mt-5">
            <Label htmlFor="session-link" className="text-sm font-medium text-gray-500">
              Online Session Link or WhatsApp Number
            </Label>
            <Input
              id="session-link"
              placeholder="Add Online Session Link or WhatsApp Number"
              className="w-full bg-white text-xs font-medium py-3 px-4"
            />
          </div>
        )}

        {/* Session Details */}
        <div className="space-y-1 mt-4">
          <Label htmlFor="session-details" className="text-sm text-gray-500">Session Details (Optional)</Label>
          <textarea
            id="session-details"
            rows={4}
            className="w-full rounded-lg border border-gray-200 py-3 px-4 resize-none focus:ring-2 focus:ring-purple-300"
            placeholder="Enter session details here text-xs"
          />
        </div>
      </div>

      <div className="mt-8 flex space-x-4 px-4 mb-4">
        <Button variant="outline" className="flex-1 border border-[#CC627B] text-sm text-[#CC627B]">
          Cancel
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-[#E7A1A0] to-[#BBA3E4] text-white" onClick={()=>{
            router.push("/bookings")
        }}>
          Confirm
        </Button>
      </div>
      </div>
    </div>
  );
}
