/* eslint-disable @next/next/no-img-element */

function ButtonImagePreview({ index }) {
  return (
    <button className='h-24 w-full rounded-md bg-gray-100'>
      <img
        className='h-full w-full object-contain'
        src={`/products/product01/image0${index}.jpg`}
        alt={index}
      />
    </button>
  )
}

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <main className='h-full px-8 py-16'>
      <p className='mb-7 text-xs'>product &gt; product0{id}</p>

      <div className='flex'>
        <div className='mr-6 flex flex-col gap-6'>
          <img
            src='/products/product01/image01.jpg'
            alt=''
            className='aspect-square w-[35vw] rounded-lg bg-gray-100 object-contain'
          />

          <div className='flex items-center justify-between gap-6'>
            <ButtonImagePreview index={1} />
            <ButtonImagePreview index={2} />
            <ButtonImagePreview index={3} />
            <ButtonImagePreview index={4} />
            <ButtonImagePreview index={5} />
          </div>
        </div>

        <div className='mr-6 grow'>
          <h1 className='text-3xl font-bold'>Title</h1>
          <span className='mt-3 text-3xl'>$141</span>

          <p className='mt-3 text-base'>product description</p>
        </div>

        <div className='grow'>checkout + frete + buy</div>
      </div>
    </main>
  )
}
