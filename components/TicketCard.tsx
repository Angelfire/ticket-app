import DeleteBlock from "@/components/DeleteBlock";
import ProgressDisplay from "@/components/ProgressDisplay";
import PriorityDisplay from "@/components/PriorityDisplay";
import StatusDisplay from "@/components/StatusDisplay";

import { TicketInterface } from "@/types";

const formatTimestamp = (timestamp: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
};

const TicketCard = ({ ticket }: { ticket: TicketInterface }) => {
  const createdDateTime = formatTimestamp(ticket.createdAt.toString());

  return (
    <div className="flex flex-col bg-gray-200 rounded-md shadow-lg p-3">
      <div className="flex justify-between mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <h3 className="font-bold text-2xl">{ticket.title}</h3>
      <hr className="h-px border-0 mb-2 bg-slate-900" />
      <p className="whitespace-pre-wrap text-sm">{ticket.description}</p>
      <div className="flex flex-grow"></div>
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col">
          <p className="text-xs my-1">{createdDateTime}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
