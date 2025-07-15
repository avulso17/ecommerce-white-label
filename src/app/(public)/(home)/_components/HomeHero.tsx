import ChevronRightIcon from '@/components/icons/ChevronRight'
import Bleed from '@/components/layout/Bleed'
import Button from '@/components/ui/Button'

export default function HomeHero() {
  return (
    <Bleed
      background='bg-neutral-white-100'
      className='h-[27.5rem] justify-center'
    >
      <section className='flex max-w-[28rem] flex-col'>
        <h2 className='text-neutral-black-800 mb-3 text-3xl font-semibold'>
          Fresh Arrivals Online
        </h2>
        <p className='text-neutral-black-600 mb-12 text-sm'>
          Discover Our Newest Collection Today.
        </p>
        <Button size='sm' className='w-fit'>
          View Collection
          <ChevronRightIcon className='ml-1 text-2xl' />
        </Button>
      </section>
    </Bleed>
  )
}
