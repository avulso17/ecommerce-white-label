import { loadCookie } from '@/lib/utils/cookies'
import { ShippingSuccess } from '../../../actions/getShipping'
import ProductShippingAddress from './ProductShippingAddress'
import ProductShippingForm from './ProductShippingForm'

export default async function ProductShipping() {
  const cookie = await loadCookie('shipping')
  const cookieValue = cookie?.value
  const savedState = (cookieValue ? JSON.parse(cookieValue) : undefined) as
    | ShippingSuccess
    | undefined

  return (
    <>
      <ProductShippingForm />
      {savedState && (
        <ProductShippingAddress
          cep_details={savedState.cep_details}
          estimated_date={savedState.estimated_date}
          price={savedState.price}
        />
      )}
    </>
  )
}
