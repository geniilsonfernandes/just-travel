type ButtonProps = {
  icon?: JSX.Element
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <button
      className='text-brand-color-blue rounded flex items-center gap-[2px] font-bold'
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
