import Image from 'next/image'
import { CarCard, CustomFilter, Hero, Searchbar } from '@/compoents'
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';


export default async function Home({searchParams}) {   

  const allcars = await fetchCars({
    
    ManuFacturer: searchParams.ManuFacturer || 
    '', fuel: searchParams.fuel || 
    2022, year: searchParams.year || 
    '', limit: searchParams.limit || 
    10, model: searchParams.model || ''});

  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p>Explore the car you might like</p>
        </div>

        <div className='home__filters'>
          <Searchbar/>
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year"options={yearsOfProduction}/>

          </div>
        </div>

        {!isDataEmpty ? (
        <section>
           <div className='home__cars-wrapper'>
            {allcars?.map((car) => (<CarCard car={car}/>))}
           </div>
        </section>
        
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops no car</h2>
            <p>{allcars?.message}</p>
          </div>
        )}

       


      </div>
    </main>
  )
}
