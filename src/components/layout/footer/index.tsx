import AmexIcon from '@/components/icons/Amex'
import GithubIcon from '@/components/icons/Github'
import InstagramIcon from '@/components/icons/Instagram'
import LogoIcon from '@/components/icons/Logo'
import MastercardIcon from '@/components/icons/Mastercard'
import VisaIcon from '@/components/icons/Visa'
import YoutubeIcon from '@/components/icons/Youtube'
import Bleed from '../Bleed'
import FooterLinkGroup from './FooterLinkGroup'

export default function Footer() {
  return (
    <footer>
      <Bleed background='bg-neutral-white-100' className='flex flex-col'>
        <div className='flex justify-between pt-18 pb-28'>
          <div>
            <div className='mb-3 flex items-center gap-4'>
              <picture className='border-neutral-black-100 flex h-11 w-11 items-center justify-center rounded-md border'>
                <LogoIcon className='text-3xl' />
              </picture>
              <strong className='font-manrope text-xl font-extrabold'>
                Ecommerce
              </strong>
            </div>
            <p className='text-neutral-black-500 mb-8 max-w-72 text-sm'>
              Luna is a white label ecommerce for practical project-based
              learning.
            </p>
            <div className='flex items-center gap-6'>
              <button className='text-neutral-black-500 text-2xl'>
                <GithubIcon />
              </button>
              <button className='text-neutral-black-500 text-2xl'>
                <InstagramIcon />
              </button>
              <button className='text-neutral-black-500 text-2xl'>
                <YoutubeIcon />
              </button>
            </div>
          </div>

          <div className='flex gap-14'>
            <FooterLinkGroup
              title='SUPPORT'
              config={[
                {
                  href: '/',
                  label: 'FAQ',
                },
                {
                  href: '/',
                  label: 'Terms of use',
                },
                {
                  href: '/',
                  label: 'Privacy Policy',
                },
              ]}
            />

            <FooterLinkGroup
              title='COMPANY'
              config={[
                {
                  href: '/',
                  label: 'About us',
                },
                {
                  href: '/',
                  label: 'Contact',
                },
                {
                  href: '/',
                  label: 'Careers',
                },
              ]}
            />

            <FooterLinkGroup
              title='SHOP'
              config={[
                {
                  href: '/',
                  label: 'My Account',
                },
                {
                  href: '/',
                  label: 'Checkout',
                },
                {
                  href: '/',
                  label: 'Cart',
                },
              ]}
            />
          </div>

          <div className='flex flex-col gap-10'>
            <span className='text-medium text-neutral-black-300 text-sm'>
              ACCEPTED PAYMENTS
            </span>

            <div className='flex items-center gap-6'>
              <MastercardIcon className='text-4xl grayscale-100' />
              <AmexIcon className='text-6xl grayscale-100' />
              <VisaIcon className='text-5xl grayscale-100' />
            </div>
          </div>
        </div>

        <div className='border-neutral-black-100 flex h-20 items-center border-t'>
          <span className='text-neutral-black-500 mx-auto text-sm'>
            © 2025 Luna - Ecommerce. All rights reserved.
          </span>
        </div>
      </Bleed>
    </footer>
  )
}
