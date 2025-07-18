type SVGProps = React.SVGProps<SVGSVGElement>

const ShareIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.96889 13.859L15.04 17.441M15.0311 7.559L8.96889 11.141M20 6.2C20 7.69117 18.8061 8.9 17.3333 8.9C15.8606 8.9 14.6667 7.69117 14.6667 6.2C14.6667 4.70883 15.8606 3.5 17.3333 3.5C18.8061 3.5 20 4.70883 20 6.2ZM9.33333 12.5C9.33333 13.9912 8.13943 15.2 6.66667 15.2C5.19391 15.2 4 13.9912 4 12.5C4 11.0088 5.19391 9.8 6.66667 9.8C8.13943 9.8 9.33333 11.0088 9.33333 12.5ZM20 18.8C20 20.2912 18.8061 21.5 17.3333 21.5C15.8606 21.5 14.6667 20.2912 14.6667 18.8C14.6667 17.3088 15.8606 16.1 17.3333 16.1C18.8061 16.1 20 17.3088 20 18.8Z'
        stroke='currentColor'
        strokeWidth='1.43'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ShareIcon
