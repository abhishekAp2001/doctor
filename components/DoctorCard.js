import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DoctorCard = ({ doc, onBookClick }) => (
  <AccordionItem
    value={`item-${doc.id}`}
    className="rounded-lg overflow-hidden bg-white relative"
  >
    <AccordionTrigger className="flex items-center justify-between bg-white rounded-xl p-[12px] no-underline hover:no-underline focus:no-underline active:no-underline focus-visible:no-underline">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={doc.avatar} alt={doc.name} />
          <AvatarFallback>
            {doc.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm font-semibold">{doc.name}</h2>
          <p className="text-xs font-medium text-[#6D6A5D] py-[2px]">{doc.phone}</p>
          <p className="text-xs font-bold text-[#565555]">{doc.expertise}</p>
        </div>
      </div>
    </AccordionTrigger>
    <hr className="border border-[#0000001A]" />
    <AccordionContent className="bg-white rounded-b-lg">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-4 p-4 pt-0">
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Expertise</p>
          <p className="text-xs font-medium text-[#6D6A5D]">{doc.expertise}</p>
        </div>
        <div className="flex flex-col items-end text-right">
          <p className="text-sm font-semibold">Gender</p>
          <p className="text-xs font-medium text-[#6D6A5D]">{doc.gender}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Session mode</p>
          <p className="text-xs font-medium text-[#6D6A5D]">{doc.sessionMode}</p>
        </div>
        <div className="flex flex-col items-end text-right">
          <p className="text-sm font-semibold">Session Fee</p>
          <p className="text-xs font-medium text-[#6D6A5D]">{doc.fee}</p>
        </div>
      </div>
      <hr className="border border-[#0000001A]" />
      <div className="px-4 mt-4">
      <Button
        onClick={onBookClick}
        className="w-full bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] py-[14.5px] text-sm font-semibold"
      >
        Book Now
      </Button></div>
    </AccordionContent>
  </AccordionItem>
);

export default DoctorCard;