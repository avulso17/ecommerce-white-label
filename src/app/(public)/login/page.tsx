import PageHeader from '@/components/shared/PageHeader'
import Button from '@/components/ui/Button'
import LoginForm from './_components/LoginForm'

export default function LoginPage() {
  return (
    <main className='pb-36'>
      <PageHeader title='Login' steps={['Login']} className='mb-28' />

      <div className='mx-auto flex w-full max-w-80 flex-col gap-4'>
        <LoginForm />
        <Button
          size='sm'
          variant='text'
          className='text-neutral-black-500 text-center text-sm hover:underline'
        >
          Don&apos;t have an account? <b>Sign up</b>
        </Button>
      </div>
    </main>
  )
}
