/* c8 ignore start */

import { Providers } from "@/providers"
import Search from "."

const meta = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
}

export default meta

export const Default = () => {
  return (
    <Providers>
      <Search />
    </Providers>
  )
}
