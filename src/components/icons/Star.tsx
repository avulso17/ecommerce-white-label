type SVGProps = React.SVGProps<SVGSVGElement>

const StarIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 4.5L14.472 9.43691L20 10.2334L16 14.0741L16.944 19.5L12 16.9369L7.056 19.5L8 14.0741L4 10.2334L9.528 9.43691L12 4.5Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default StarIcon
