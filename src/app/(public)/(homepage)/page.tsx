export default function Home() {
  return (
    <main className='px-8 py-16'>
      home
      {/* <div className='grid grid-cols-4 gap-6'>
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.brand}/${product.id}`}
            className='flex cursor-pointer flex-col rounded-lg border border-black/10 p-4 transition-colors hover:border-indigo-600 hover:bg-indigo-600/10'
          >
            <Image
              className='mx-auto h-40 w-40 object-contain mix-blend-multiply'
              src={product.images[0]}
              alt={product.title}
              height={174}
              width={174}
              priority
            />
            <span className='mt-6 w-full overflow-hidden text-sm text-ellipsis whitespace-nowrap'>
              {product.title}
            </span>
            <span className='mt-2 text-2xl'>R$ {product.price}</span>
            <p className='text-xs'>
              em {product.installments.times}x R$ {product.installments.value}
            </p>
          </Link>
        ))}
      </div> */}
    </main>
  )
}
