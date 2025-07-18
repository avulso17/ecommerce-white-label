type SVGProps = React.SVGProps<SVGSVGElement>

const ShieldCheckIcon: React.FC<SVGProps> = ({ ...props }) => {
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
        d='M15.7272 8.27901L10.7633 13.8604L8.28131 11.9999M12.443 19.9176C12.1579 20.0275 11.842 20.0275 11.5569 19.9176C9.33201 19.0638 7.41857 17.5557 6.06934 15.5921C4.7201 13.6287 3.99856 11.3024 4 8.92041V5.2301C4 4.90386 4.12967 4.59097 4.36048 4.36029C4.5913 4.1296 4.90435 4 5.23077 4H18.7692C19.0956 4 19.4087 4.1296 19.6395 4.36029C19.8703 4.59097 20 4.90386 20 5.2301V8.92041C20.0014 11.3024 19.2799 13.6287 17.9307 15.5921C16.5814 17.5557 14.6679 19.0638 12.443 19.9176Z'
        stroke='currentColor'
        strokeWidth='1.43'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ShieldCheckIcon
