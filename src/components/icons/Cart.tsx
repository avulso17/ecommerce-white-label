type SVGProps = React.SVGProps<SVGSVGElement>

const CartIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 1.5H4.38321L5.58853 13.4769C5.63862 13.8071 5.80643 14.108 6.06102 14.3243C6.31561 14.5406 6.63984 14.6576 6.97395 14.6538H15.7021C16.0042 14.6696 16.3032 14.5861 16.5534 14.4161C16.8035 14.2461 16.9912 13.9989 17.0875 13.7123L18.9302 8.17385C18.999 7.96564 19.0173 7.74406 18.9836 7.52739C18.9498 7.31072 18.865 7.10517 18.7362 6.92769C18.6021 6.73894 18.4227 6.58681 18.2146 6.48522C18.0065 6.38362 17.7761 6.33581 17.5447 6.34615H4.8681'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4666 19.5C15.2829 19.5 15.1067 19.427 14.9768 19.2972C14.8469 19.1674 14.7739 18.9913 14.7739 18.8077C14.7739 18.6241 14.8469 18.448 14.9768 18.3181C15.1067 18.1883 15.2829 18.1154 15.4666 18.1154C15.6504 18.1154 15.8266 18.1883 15.9565 18.3181C16.0864 18.448 16.1594 18.6241 16.1594 18.8077C16.1594 18.9913 16.0864 19.1674 15.9565 19.2972C15.8266 19.427 15.6504 19.5 15.4666 19.5Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.46127 19.5C6.27755 19.5 6.10135 19.427 5.97145 19.2972C5.84154 19.1674 5.76855 18.9913 5.76855 18.8077C5.76855 18.6241 5.84154 18.448 5.97145 18.3181C6.10135 18.1883 6.27755 18.1154 6.46127 18.1154C6.64499 18.1154 6.82118 18.1883 6.95109 18.3181C7.081 18.448 7.15398 18.6241 7.15398 18.8077C7.15398 18.9913 7.081 19.1674 6.95109 19.2972C6.82118 19.427 6.64499 19.5 6.46127 19.5Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.56201 9.11536V11.8846'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.7183 9.11536V11.8846'
        stroke='currentColor'
        strokeWidth='1.42857'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CartIcon
