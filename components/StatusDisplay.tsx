import { cn } from "@/lib/utils";

const StatusDisplay = ({ status }: { status: string }) => {
  const statusColors: Record<string, string> = {
    done: "bg-green-200",
    started: "bg-yellow-200",
    "not started": "bg-red-200",
  };

  const getColor = (status: string): string =>
    statusColors[status.toLowerCase()] || "bg-slate-700";

  return (
    <span
      className={cn(
        "inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700",
        getColor(status)
      )}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
