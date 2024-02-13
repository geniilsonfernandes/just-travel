import { ticketsAPI } from "@/api"
import Ticket from "@/views/Ticket"
async function getData(id: string) {
  const res = await ticketsAPI.getTicket(id)

  if (res === undefined) {
    throw new Error("Failed to fetch data")
  }

  return res
}

export const revalidate = 3600

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id)

  return <Ticket data={data} />
}
