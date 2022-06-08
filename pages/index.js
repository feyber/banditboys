import Head from 'next/head'
// import Image from 'next/image'
import TextyAnim from 'rc-texty'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bandit Boys DAO - NFT</title>
        <meta
          name='description'
          content='LFG! We Create Best DAO in Solana Network '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <TextyAnim className='z-10 text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-gray-50 drop-shadow-sm'>
          Hello Bandish
        </TextyAnim>
      </main>
      <footer></footer>
    </div>
  )
}
