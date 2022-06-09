import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/logobbkuning.png'
import magiceden from '../public/me.png'
import opensea from '../public/opensea.png'
import discord from '../public/discord.png'
import staking from '../public/staking.png'
import twitter from '../public/twitter.png'
import rare from '../public/rare.png'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bandit Boys DAO - NFT</title>
        <meta
          name='description'
          content='LFG! We Create Best DAO in Solana Network '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='w-full fixed z-10 justify-between'>
        <nav className='flex justify-between w-11/12 mx-auto'>
          <div className='py-2 md:py-6 cursor-pointer scale-75 md:scale-100'>
            <Image
              src={profilePic}
              alt='Picture of the author'
              width={100}
              height={100}
              className='drop-shadow-sm'
            />
          </div>
          <div className='flex py-2 md:py-6 scale-75 md:scale-100 space-x-2 md:space-x-2'>
            <a href='https://www.magiceden.io/marketplace/bandit_boys'>
              <Image
                src={magiceden}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>
            <a href='https://opensea.io/collection/bandit-boys-solana'>
              <Image
                src={opensea}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>

            <a href='https://www.discord.gg/npuf3zk2uV'>
              <Image
                src={discord}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>
            <a href='https://www.twitter.com/BanditBoysDAO'>
              <Image
                src={twitter}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>

            <a href='https://diamondvaults.io/vault/BanditBoys'>
              <Image
                src={staking}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>
            <a href='https://howrare.is/banditboys'>
              <Image
                src={rare}
                alt='Picture of the author'
                width={35}
                height={35}
                className='drop-shadow-sm'
              />
            </a>
          </div>
        </nav>
      </header>
      <div className='flex flex-col justify-between'>
        <main>{children}</main>
        <footer className='text-sm md:text-2xl text-center py-2'>
          Copyright &copy; Bandit Boys NFT 2022
        </footer>
      </div>
    </>
  )
}
