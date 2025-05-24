import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const doctors = [
  {
    id: 1,
    name: "Dr. Rohit Sharma",
    phone: "+91 98765 43210",
    avatar: "./akshit.png",
    expertise: "Gynaecology",
    gender: "Male",
    sessionMode: "In-Person & Online",
    fee: "₹1,500",
  },
  {
    id: 2,
    name: "Dr. Shubman Gill",
    phone: "+91 98765 43210",
    avatar: "./rahul.png",
    expertise: "IVF Specialist",
    gender: "Female",
    sessionMode: "Online",
    fee: "₹2,000",
  },
  {
    id: 3,
    name: "Dr. Shikhar Dhawan",
    phone: "+91 98765 43210",
    avatar: "./akshit.png",
    expertise: "Gynaecology",
    gender: "Male",
    sessionMode: "In-Person",
    fee: "₹1,200",
  },
  {
    id: 4,
    name: "Dr. Ravindra Jadeja",
    phone: "+91 98765 43210",
    avatar: "./akshit.png",
    expertise: "Gynaecology",
    gender: "Male",
    sessionMode: "In-Person & Online",
    fee: "₹1,500",
  },
  {
    id: 5,
    name: "Dr. Virat Kohli",
    phone: "+91 98765 43210",
    avatar: "./rahul.png",
    expertise: "IVF Specialist",
    gender: "Female",
    sessionMode: "Online",
    fee: "₹2,000",
  },
];

export const timeSlots = {
  morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
  afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
  evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
  night: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
};

export const upcomingSession = {
  time: "11:00 AM",
  location: "Bandra",
  doctor: {
    name: "Dr. Kiran Rathi",
    profilePic: "./akshit.png",
  },
  duration: "01:00 HR",
  mode: "Online",
  previousSession: "Tuesday, March 5, 2023",
};

export const pastSessions = [
  {
    doctor: "Dr. Ramesh Naik",
    time: "12:00 AM",
    date: "Tuesday, March 25, 2023",
  },
  {
    doctor: "Dr. Suresh Sawant",
    time: "10:30 AM",
    date: "Tuesday, March 15, 2023",
  },
  {
    doctor: "Dr. Neeta Singh",
    time: "09:30 AM",
    date: "Tuesday, Feb 25, 2023",
  },
];

