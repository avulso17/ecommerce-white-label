import PageHeader from '@/components/shared/PageHeader'
import Link from 'next/link'
import LoginForm from './_components/LoginForm'

export default function LoginPage() {
  return (
    <main className='pb-36'>
      <PageHeader title='Login' steps={['Login']} className='mb-28' />

      <div className='mx-auto flex w-full max-w-80 flex-col gap-6'>
        <LoginForm />
        <Link
          href='/signup'
          className='text-neutral-black-500 text-center text-sm hover:underline'
        >
          Don&apos;t have an account? <b>Sign up</b>
        </Link>
      </div>
    </main>
  )
}
