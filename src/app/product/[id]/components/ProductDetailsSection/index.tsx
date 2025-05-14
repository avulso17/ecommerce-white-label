export default function ProductDetailsSection() {
  return (
    <section className='mr-6 grow'>
      <h1 className='text-2xl font-bold'>Title</h1>
      <div>estrelinhas</div>
      <span className='mt-3 block text-4xl'>$141</span>
      <span className='block text-base'>
        em 12x R$ 6,79 com cartões de crédito
      </span>

      <span className='mt-6 block text-base font-normal'>
        Cor: <b className='font-semibold'>Branco com cinza</b>
      </span>
      <div className='mt-2 flex items-center gap-2'>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
      </div>

      <span className='mt-6 block text-base font-normal'>
        Tamanho: <b className='font-semibold'>L</b>
      </span>
      <div className='mt-2 flex items-center gap-2'>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
        <div className='aspect-square w-10 rounded-sm bg-gray-200'></div>
      </div>

      <h2 className='mt-6 text-sm font-semibold'>
        O que você precisa saber sobre este produto
      </h2>
      <ul className='mt-4 list-inside list-disc text-sm'>
        <li>detalhe 1</li>
        <li>detalhe 2</li>
        <li>detalhe 3</li>
        <li>detalhe 4</li>
        <li>detalhe 5</li>
        <li>detalhe 6</li>
      </ul>
    </section>
  )
}
