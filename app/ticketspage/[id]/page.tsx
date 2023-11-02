import TicketForm from "@/components/TicketForm";

interface TicketPageParams {
  params: { id: string };
}

export default function TicketPage({ params }: TicketPageParams) {
  return (
    <div className="flex items-center flex-col mt-3">
      <TicketForm />
    </div>
  );
}
