import HomeFeaturesSection from './_components/features'
import HomeBestSeller from './_components/HomeBestSeller'
import HomeCategoriesCTA from './_components/HomeCategoriesCTA'
import HomeHero from './_components/HomeHero'
import HomeProductList from './_components/HomeProductList'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <div className='flex flex-col gap-32 py-20 pb-40'>
        <HomeFeaturesSection />
        <HomeBestSeller />
      </div>
      <HomeCategoriesCTA />
      <div className='pt-40 pb-48'>
        <HomeProductList />
      </div>
    </main>
  )
}
