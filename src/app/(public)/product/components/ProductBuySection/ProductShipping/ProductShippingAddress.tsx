import { ShippingSuccess } from '../../../actions/getShipping'

type ProductShippingAddressProps = Omit<ShippingSuccess, 'status'>

export default function ProductShippingAddress(
  props: ProductShippingAddressProps
) {
  if (!props) return

  return (
    <>
      <p className='mt-1 text-sm'>
        Chegará {props.estimated_date} por R$ {props.price.toFixed(2)}
      </p>
      <p className='mt-2 text-sm'>
        <b>Endereço:</b> {props.cep_details.logradouro},{' '}
        {props.cep_details.bairro} - {props.cep_details.localidade}{' '}
        {props.cep_details.uf} - {props.cep_details.cep}
      </p>
    </>
  )
}
