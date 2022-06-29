import Layout from '../components/Layout'
import Image from 'next/image'
import satu from '../public/logobb.png'
import dua from '../public/1046.png'
import tiga from '../public/4839.png'
import empat from '../public/4104.png'
import lima from '../public/843.png'
import enam from '../public/3296.png'
import tujuh from '../public/4742.png'
import lapan from '../public/4557.png'
import alpha from '../public/alpha.png'
import fugazi from '../public/patrik.png'
import mantha from '../public/mantha.png'
import oawzz from '../public/oawzz.png'
import patrick from '../public/patrick.png'
import president from '../public/president.png'
import tape from '../public/tape.png'
import yoppa from '../public/imkaotik.png'
import nine from '../public/1928.png'
import xanatos from '../public/xan.png'
import kingjab from '../public/kingjab.png'
import zaenmv from '../public/zaenmv.png'
export default function Home() {
  return (
    <Layout>
      <div className='relative'>
        <div className='sticky top-0 min-h-screen flex flex-col items-center justify-center bg-gray-200'>
          <h2 className='text-5xl md:text-6xl lg:text-7xl mb-2'>
            BANDIT BOYS DAO
          </h2>
          <div className='flex space-x-3 items-center'>
            <a
              href='https://raffle-banditboys.vercel.app'
              rel='noopener noreferrer'
              target='_blank'
              className='bg-red-200 py-1 px-4 rounded-lg tracking-wider'
            >
              Go to raffle page
            </a>
            <p>or</p>

            <p className='tracking-wider'>Pls Scroll Down..</p>
          </div>
        </div>
        <div className='-mt-10 p-4 min-h-screen sticky top-0 flex flex-col items-center justify-center bg-stone-200'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl mb-8'>OUR ROADMAP</h2>
          <div className='flex md:w-11/12 space-x-2 md:space-x-5'>
            <div className='flex flex-col md:flex-row'>
              <div>
                <h2 className='md:text-3xl mb-3 md:-ml-4'>Bandit DAO</h2>
                {/* <p className='text-sm leading-normal md:text-[18px] mb-2 md:-ml-4'>
                  The Bandit DAO will be a firmly established DAO in the Solana
                  space.
                </p> */}
                <p className='text-sm leading-normal md:text-[18px] mb-3 md:-ml-4'>
                  Our DAO will consist of various programs intended to benefit
                  and look after our holders. Things such as holder raffles, WL
                  collaborations with other projects, alpha discussions/calls
                  and plenty more community based incentives. Beyond the scope
                  of incentives that our DAO will hold, our community will make
                  the Bandit DAO a fun place where bandits can hang out and
                  vibe.
                </p>
              </div>
              <div>
                <h2 className='md:text-3xl mb-3'>Staking</h2>
                <p className='text-sm leading-normal md:text-[18px] mb-3'>
                  Yes, you will be able to stake your Bandit Boy which will be
                  setup in the near future. You will be staking for a utility
                  token that will be used for various different occasions.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row'>
              <div>
                <h2 className='md:text-3xl mb-3'>The Neighborhood</h2>
                <p className='text-sm leading-normal md:text-[18px] mb-3'>
                  The Bandit Boys come from the neighborhood. Everyone will want
                  to join the neighborhood because it will foster one of the
                  greatest communities on Solana. Everyone who owns a Bandit is
                  a member of the neighborhood, and every fellow Bandit is a
                  neighbor. The neighborhood will serve as the stomping grounds
                  for all Bandit Boys and their following generations.
                </p>
              </div>
              <div>
                <h2 className='md:text-3xl mb-3 md:ml-4'>
                  1/1 Bandit Auctions
                </h2>
                <p className='text-sm leading-normal md:text-[18px] mb-2 md:ml-4'>
                  There are no 1/1 Bandit Boys in the collection of the original
                  5000 Bandits. We will host auctions for 1/1 Legendary Bandits
                  and all proceeds will go directly back into the community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky top-0 min-h-screen flex flex-col items-center justify-center bg-zinc-200'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 -mt-40'>
            ABOUT
          </h2>
          <div className='flex flex-col md:flex-row  items-center justify-center w-11/12 mx-auto md'>
            <div className='flex mb-5 md:mr-4'>
              <div className=' grid grid-cols-3 gap-2 px-2 drop-shadow'>
                <Image
                  src={dua}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={tiga}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={satu}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={empat}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={lima}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={enam}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={tujuh}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={lapan}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
                <Image
                  src={nine}
                  alt='Picture of the author'
                  width={120}
                  height={120}
                  className='drop-shadow-sm hover:scale-105 duration-500'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 items-center justify-center gap-2 md:gap-4 mt-2 md:-mt-4'>
              <button className='w-40 md:w-72 h-24 md:h-44 bg-gray-400 hover:scale-105 duration-500 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-400 rounded'>
                <p className='md:text-3xl'>SUPPLY</p>
                <p className='md:text-3xl'>5000 BANDITS</p>
              </button>
              <button className='w-40 md:w-72 h-24 md:h-44 bg-gray-400 hover:scale-105 duration-500 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-400 rounded'>
                <p className='md:text-3xl'>RELEASED</p>
                <p className='md:text-3xl'>JUNE, 3 2022</p>
              </button>
              <button className='w-40 md:w-72 h-24 md:h-44 bg-gray-400 hover:scale-105 duration-500 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-400 rounded'>
                <p className='md:text-3xl'>Price 0.025◎</p>
                <p className='md:text-3xl'>SOLD OUT</p>
              </button>
              <button className='w-40 md:w-72 h-24 md:h-44 bg-gray-400 hover:scale-105 duration-500 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-400 rounded'>
                <p className='md:text-3xl'>1500+</p>
                <p className='md:text-3xl'>STAKED IN VAULT</p>
              </button>
            </div>
          </div>
        </div>
        <div className='sticky top-0 min-h-screen flex flex-col items-center justify-center bg-neutral-200'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl'>WEB3 TEAM</h2>
          <div className='grid-cols-2 grid md:grid-cols-4 md:p-0 w-11/12'>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-litegold via-golden to-gold rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={yoppa}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-900 text-md text-start text-sm md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      IMKAOTIK
                    </label>
                    <p className='absolute text-gray-900 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Comm Buildooorrr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-litegold via-golden to-gold rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={patrick}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-900 text-md text-start text-sm md:text-2xl drop-shadow top-2 md:top-5 left-8 sm:left-14'>
                      Patrick C
                    </label>
                    <p className='absolute text-gray-900 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Goblin Advisor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={president}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      President DMNTD
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Investor / Kings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={alpha}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      Alpha-Nugget711
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod / Collab
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={fugazi}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-sm md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      -Patrik-
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod / 3D Artist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={oawzz}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-sm md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      Oawzz
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-24 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={mantha}
                        alt='Picture of the author'
                        width={240}
                        height={240}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-sm md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      Mantha
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Night Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={tape}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      Tape the ghost
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={zaenmv}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      zaenmv
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Night Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={xanatos}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      Xanatos
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-4 ml-5 md:p-6'>
              <div className='w-full flex items-center justify-center bg-transparent'>
                <div className='relative w-48 md:w-52 h-12 sm:h-12 md:h-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center'>
                  <div className='absolute rounded-full bg-transparent w-16 md:w-24 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-9 md:-left-20 transition '>
                    <div className='rounded-full bg-transparent w-16 sm:w-18 md:w-28 overflow-auto'>
                      <Image
                        src={kingjab}
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='drop-shadow-sm scale-95 hover:scale-100 duration-700'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 md:space-y-4'>
                    <label className='absolute text-gray-100 text-md text-start text-xs md:text-2xl top-2 md:top-5 left-8 sm:left-14'>
                      KingJab
                    </label>
                    <p className='absolute text-gray-200 text-sm mt-1 top-4 md:top-7 leading-relaxed left-8 sm:left-14 md:text-xl'>
                      Mod
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
