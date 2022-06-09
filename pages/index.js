import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className='relative'>
        <div className='sticky top-0 min-h-screen flex flex-col items-center justify-center bg-gray-200'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl'>BANDIT BOYS DAO</h2>
          <p>Pls Scroll Down...</p>
        </div>
        <div className='p-4 min-h-screen sticky top-0 flex flex-col items-center justify-center bg-stone-200'>
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
                <h2 className='md:text-3xl mb-3'>Stacking</h2>
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
          <h2 className='text-4xl'>The Third Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className='sticky top-0 min-h-screen flex flex-col items-center justify-center bg-neutral-200'>
          <h2 className='text-4xl'>The Fourth Title</h2>
        </div>
      </div>
    </Layout>
  )
}
