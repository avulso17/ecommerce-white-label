type SVGProps = React.SVGProps<SVGSVGElement>

const HeartIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.5048 19.5L5.291 13.0513C1.37045 9.18258 7.13333 1.75337 12.5048 7.76384C17.8763 1.75337 23.6141 9.20729 19.72 13.0513L12.5048 19.5Z'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default HeartIcon
