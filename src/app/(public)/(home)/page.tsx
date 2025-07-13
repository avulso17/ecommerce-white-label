import HomeFeaturesSection from './components/features'
import HomeBestSeller from './components/HomeBestSeller'
import HomeHero from './components/HomeHero'
import HomeProductList from './components/HomeProductList'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <div className='flex flex-col gap-32 py-20 pb-40'>
        <HomeFeaturesSection />
        <HomeBestSeller />
      </div>
      <div>categories cta</div>
      <div className='pt-40 pb-48'>
        <HomeProductList />
      </div>
    </main>
  )
}
