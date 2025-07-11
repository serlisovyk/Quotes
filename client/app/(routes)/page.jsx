'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import сhurchillImage from '@public/сhurchill.jpg'
import Quote from '@components/Quote'
import Loader from '@components/Loader'
import Button from '@components/Button'
import { MY_QUOTE_ID, ROUTES } from '@config/constants'
import { useGetSingleQuote } from '@queries/useGetSingleQuote'

export default function HomePage() {
  const router = useRouter()

  const { quote, isLoading } = useGetSingleQuote(MY_QUOTE_ID)

  if (isLoading) return <Loader isFullHeight={true} />

  const routeToRandomQuotesPage = () => router.push(ROUTES.RANDOM)
  const routeToSearchPage = () => router.push(ROUTES.SEARCH)

  return (
    <>
      <section className="flex justify-center items-center gap-20 py-[50px]">
        <div className="max-w-xl mt-10">
          <div className="text-4xl font-bold italic text-violet-900 mb-5">
            Success is not final, failure is not fatal: it is the courage to continue
            that counts. <br />
            <span className="text-violet-600">&nbsp; — Winston Churchill</span>
          </div>
        </div>
        <div>
          <Image
            src={сhurchillImage}
            alt="Churchill photo"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
      </section>
      <section className="pt-[150px] pb-[40px] flex justify-center items-center gap-20">
        <div className="max-w-xl text-xl text-indigo-400">
          <div className="mb-5">
            These are the words of a politician, soldier, journalist, and true leader
            — who traversed a long road of trials; his words and steely will reshaped
            the course of history. He proved that a single resolute voice, tempered
            in adversity, can ignite an entire nation.
          </div>
          <div className="mb-5">
            It was these words by Winston Churchill that inspired me to create this
            huge and interesting project with searching, creating, editing quotes.
          </div>
          <div>
            This project is not just a collection of quotes, it is a place where
            everyone can find inspiration, improve their English, find quotes for
            their social networks) and much more.
          </div>
        </div>
        <div className="w-[500px]">
          <Quote quote={quote} />
        </div>
      </section>
      <section className="flex justify-center mb-10">
        <Button onClick={routeToRandomQuotesPage} text="Check random quotes" />
        <Button
          onClick={routeToSearchPage}
          text="Go to search page"
          variant="secondary"
        />
      </section>
    </>
  )
}
