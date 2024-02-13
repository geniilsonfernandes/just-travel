import { useEffect, useRef } from 'react'

const useClickOutside = (isOpen: boolean, callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      event.target !== ref.current
    ) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return ref
}

export default useClickOutside
