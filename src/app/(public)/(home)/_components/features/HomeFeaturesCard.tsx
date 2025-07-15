type HomeFeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function HomeFeaturesCard({
  icon,
  title,
  description,
}: HomeFeatureCardProps) {
  return (
    <article className='min-h-52'>
      <div className='bg-neutral-white-100 text-neutral-black-900 mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl'>
        {icon}
      </div>

      <h3 className='text-neutral-black-800 mb-3 text-base font-semibold'>
        {title}
      </h3>
      <p className='text-neutral-black-500 max-w-72 text-sm leading-[175%]'>
        {description}
      </p>
    </article>
  )
}
