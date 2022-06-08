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
        {/* <TextyAnim className='text-4xl'>Hello Bandish</TextyAnim> */}
        <h1 className='text-3xl tracking-wide font-bold uppercase p-8'>
          &#128075; Hello #Bandish. Our website very soon! &#128513;
        </h1>
      </main>
      <footer></footer>
    </div>
  )
}
