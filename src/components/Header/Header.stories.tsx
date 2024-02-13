/* c8 ignore start */

import { Providers } from "@/providers"
import Header from "."

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
}

export default meta

export const Default = () => {
  return (
    <Providers>
      <Header />
    </Providers>
  )
}
