import Button from '@/components/ui/Button'

export default function ProductDescription() {
  return (
    <div className='flex gap-8'>
      <div className='flex max-w-56 grow flex-col gap-4 pt-18'>
        <Button variant='ghost' size='sm'>
          Details
        </Button>
        <Button variant='ghost' size='sm'>
          Reviews
        </Button>
      </div>

      <div>WIP - product details</div>
    </div>
  )
}
