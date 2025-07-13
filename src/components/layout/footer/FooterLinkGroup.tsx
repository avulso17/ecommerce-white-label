import Link from 'next/link'

type FooterLinkGroupConfig = {
  href: string
  label: string
}

type FooterLinkGroupProps = {
  title: string
  config: Array<FooterLinkGroupConfig>
}

export default function FooterLinkGroup({
  title,
  config,
}: FooterLinkGroupProps) {
  return (
    <div className='flex flex-col gap-10'>
      <span className='text-medium text-neutral-black-300 text-sm'>
        {title}
      </span>

      <div className='flex flex-col gap-4'>
        {config.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className='text-medium text-neutral-black-500 h- text-sm'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
