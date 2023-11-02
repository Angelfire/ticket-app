import { Flame } from "lucide-react";

import { cn } from "@/lib/utils";

const PriorityDisplay = ({ priority }: { priority: number }) => {
  const priorityIcons = Array.from({ length: 5 }, (_, index) => (
    <Flame
      key={index}
      className={cn(index < priority ? "text-red-400" : "text-slate-400")}
    />
  ));

  return (
    <div className="flex justify-start align-baseline">{priorityIcons}</div>
  );
};

export default PriorityDisplay;
