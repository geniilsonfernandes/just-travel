type RenderIfProps = {
  condition: boolean
  children: React.ReactNode
}

const RenderIf = ({ condition, children }: RenderIfProps) => {
  return condition ? <>{children}</> : null
}

export default RenderIf
