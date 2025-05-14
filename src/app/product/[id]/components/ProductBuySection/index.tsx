import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ProductBuySection() {
  return (
    <section className='grow'>
      <div className='h-full rounded-lg border-[1px] border-black/10 px-4 py-6'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='cep-input'>Calcular frete:</label>
          <Input
            id='cep-input'
            type='text'
            placeholder='CEP'
            className='h-10 rounded-md border-2 border-indigo-600 p-3'
          />
        </div>
        {/* <p className='text-base'>Chegará sexta-feira por R$ 22,90</p> */}

        <div className='mt-6 flex flex-col gap-2'>
          <Button type='submit' variant='primary' block>
            Comprar agora
          </Button>
          <Button variant='secondary' block>
            Adicionar
          </Button>
        </div>
      </div>
    </section>
  )
}
