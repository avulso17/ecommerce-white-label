type SVGProps = React.SVGProps<SVGSVGElement>

const ChevronDownIcon: React.FC<SVGProps> = ({ ...props }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5327 15.3117C12.2557 15.561 11.8042 15.563 11.5243 15.3163L6 10.4486L7.00331 9.54604L12.0207 13.9672L16.9863 9.5L18 10.3932L12.5327 15.3117Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default ChevronDownIcon
