import Bleed from '../layout/Bleed'
import Breadcrumb from '../ui/Breadcrumb'

type PageHeader = {
  title: string
  steps: Array<string>
}

export default function PageHeader({ title, steps }: PageHeader) {
  return (
    <Bleed
      background='bg-neutral-white-100'
      className='mb-14 h-40 justify-center'
    >
      <div className='flex flex-col gap-2'>
        <h2 className='text-neutral-black-900 text-2xl font-bold'>{title}</h2>
        <Breadcrumb prefix='Ecommerce' steps={steps} />
      </div>
    </Bleed>
  )
}
