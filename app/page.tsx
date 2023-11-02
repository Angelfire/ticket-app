import TicketCard from "@/components/TicketCard";
import { TicketInterface } from "@/types";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    const tickets = await res.json();

    return tickets;
  } catch (error) {
    console.error("Failed to get tickets", error);
  }
};

export default async function Home() {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets.map((ticket: { category: string }) => ticket.category)),
  ] as string[];

  return (
    <main className="m-5 flex flex-col gap-7">
      {tickets &&
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-bold mb-3 capitalize">
              {uniqueCategory}
            </h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-3">
              {tickets
                .filter(
                  (ticket: TicketInterface) =>
                    ticket.category === uniqueCategory
                )
                .map((filteredTicket: TicketInterface) => (
                  <TicketCard
                    key={filteredTicket._id}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          </div>
        ))}
    </main>
  );
}
