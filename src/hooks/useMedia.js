import { useState, useEffect } from 'react'

export default function useMedia() {
  const [isMobile, setIsMobile] = useState(false)

  function isMobileFn() {
    if (matchMedia('(max-width: 768px)').matches) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    isMobileFn()
    window.addEventListener('resize', isMobileFn)
    window.addEventListener('load', isMobileFn)

    return () => {
      window.removeEventListener('resize', isMobileFn)
      window.removeEventListener('load', isMobileFn)
    }
  }, [])

  return { isMobile }
}
