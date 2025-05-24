import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SessionSection = ({ period, times, selectedTime, setSelectedTime }) => (
  <Accordion type="single" collapsible>
    <AccordionItem
      value={period}
      className="rounded-lg overflow-hidden bg-white"
    >
      <AccordionTrigger className="text-base px-4 font-semibold no-underline hover:no-underline focus:no-underline active:no-underline focus-visible:no-underline">
        {period.charAt(0).toUpperCase() + period.slice(1)}
      </AccordionTrigger>
      <AccordionContent className="bg-white rounded-b-lg p-4 pt-0">
        <div className="grid grid-cols-4 gap-2">
          {times.map((time) => (
            <Button
              key={time}
              variant="outline"
              className={`text-xs rounded-lg border border-[#CC627B] text-[#CC627B] bg-white py-2 px-3 transition-all ${
                selectedTime === time
                  ? "bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-white border-none"
                  : "hover:bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0]"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default SessionSection;