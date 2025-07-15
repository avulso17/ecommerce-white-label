import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginForm() {
  return (
    <form action=''>
      <div className='flex flex-col gap-4'>
        <Input id='email' name='email' label='Email' />
        <Input id='password' name='password' label='Password' type='password' />
      </div>

      <Button
        variant='text'
        size='xs'
        className='text-neutral-black-600 mt-3 mb-6 ml-auto'
      >
        Forgot Password?
      </Button>

      <Button block>Login</Button>
    </form>
  )
}
