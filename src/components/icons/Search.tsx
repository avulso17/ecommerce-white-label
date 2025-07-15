type SVGProps = React.SVGProps<SVGSVGElement>

const SearchIcon: React.FC<SVGProps> = ({ ...props }) => {
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
        d='M11.2252 18.9799C13.28 18.9799 15.2507 18.1636 16.7037 16.7106C18.1566 15.2577 18.9729 13.287 18.9729 11.2322C18.9729 9.17737 18.1566 7.20672 16.7037 5.75374C15.2507 4.30077 13.28 3.4845 11.2252 3.4845C9.1704 3.4845 7.19974 4.30077 5.74677 5.75374C4.2938 7.20672 3.47752 9.17737 3.47752 11.2322C3.47752 13.287 4.2938 15.2577 5.74677 16.7106C7.19974 18.1636 9.1704 18.9799 11.2252 18.9799Z'
        stroke='currentColor'
        strokeWidth='1.44'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5225 21.5155L16.5782 17.5712'
        stroke='currentColor'
        strokeWidth='1.44'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SearchIcon
