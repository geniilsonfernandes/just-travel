import { cn } from "@/utils"

type BadgeProps = {
  label: string
  color?: "blue" | "green" | "yellow" | "white"
}

const Badge = ({ label, color = "white" }: BadgeProps) => {
  const colors = {
    blue: "bg-brand-color-blue",
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    white: "bg-white",
  }
  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-white rounded-full p-1 px-2 shadow-xl text-xs",
        colors[color]
      )}
    >
      {label}
    </div>
  )
}

export default Badge
