import SearchIcon from '@/components/icons/Search'
import Input from '@/components/ui/Input'

export default function NavbarSearch() {
  return (
    <Input
      leftAddon={<SearchIcon className='text-2xl' />}
      placeholder='Search products'
    />
  )
}
