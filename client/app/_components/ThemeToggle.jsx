'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import moon from '@public/moon.svg'
import sun from '@public/sun.svg'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color scheme button"
      className="ml-auto rounded p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
    >
      <Image
        src={isDark ? sun : moon}
        alt={isDark ? 'Light mode icon' : 'Dark mode icon'}
        width={28}
        height={28}
        unoptimized
        priority
      />
    </button>
  )
}
