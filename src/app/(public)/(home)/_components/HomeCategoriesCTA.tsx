import ChevronRightIcon from '@/components/icons/ChevronRight'
import Bleed from '@/components/layout/Bleed'
import Button from '@/components/ui/Button'

export default function HomeCategoriesCTA() {
  return (
    <Bleed
      background='bg-linear-to-r from-neutral-white-100 to-white'
      className='h-[19rem] justify-center'
    >
      <section className='flex max-w-[28rem] flex-col'>
        <h2 className='text-neutral-black-900 mb-6 text-2xl font-bold'>
          Browse Our Fashion Paradise!
        </h2>
        <p className='text-neutral-black-500 mb-8 text-sm'>
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </p>
        <Button size='sm' className='w-fit'>
          Start Browsing
          <ChevronRightIcon className='ml-1 text-2xl' />
        </Button>
      </section>
    </Bleed>
  )
}
