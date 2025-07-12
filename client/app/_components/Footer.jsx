import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-5 px-2 md:px-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 md:gap-7">
          <div className="text-base md:text-xl font-bold italic">
            Check my socials media:
          </div>
          <div className="flex items-center gap-2 md:gap-7">
            <Link href="https://github.com/serlisovyk" target="_blank">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                width="40"
                height="40"
                alt="GitHub icon"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/serhii-lisovyk-b43a4b29b/"
              target="_blank"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                width="40"
                height="40"
                alt="LinkedIn icon"
              />
            </Link>
          </div>
        </div>
        <div className="text-md font-bold">2025 © Serhii Lisovyk</div>
      </div>
    </footer>
  )
}
