import DeliveryIcon from '@/components/icons/Delivery'
import ShieldCheckIcon from '@/components/icons/ShieldCheck'
import StarBadgeIcon from '@/components/icons/StarBadge'
import HomeFeaturesCard from './HomeFeaturesCard'

export default function HomeFeaturesSection() {
  return (
    <section className='flex justify-between gap-14'>
      <HomeFeaturesCard
        icon={<DeliveryIcon />}
        title='Free Shipping'
        description="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
      />
      <HomeFeaturesCard
        icon={<StarBadgeIcon />}
        title='Satisfaction Guarantee'
        description='Shop confidently with our Satisfaction Guarantee: Love it or get a refund.'
      />
      <HomeFeaturesCard
        icon={<ShieldCheckIcon />}
        title='Secure Payment'
        description='Your security is our priority. Your payments are secure with us.'
      />
    </section>
  )
}
