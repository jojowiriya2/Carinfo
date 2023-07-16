"use client"
import React, {  useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { manufacturers } from "@/constants"
import { useRouter } from "next/navigation"



const SearchButton = ({otherClasses}: {otherClasses: string}) => (

  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg' alt="magnifying glass" width={40} height={40} className=" object-contain"/>
  </button>
)



const Searchbar = () => {
    const [ManuFacturer, setManuFacturer] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(ManuFacturer === '' && model === '' ){return alert('Please fill in the search bar')} ;
      

      updateSearchParams(model.toLowerCase(), ManuFacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, ManuFacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if(model){
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(ManuFacturer){
        searchParams.set('ManuFacturer', ManuFacturer)
      } else {
        searchParams.delete('ManuFacturer')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname)
    }

    const [model, setModel] = useState('')
  return (
    <>
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            ManuFacturer={ManuFacturer}
            setManuFacturer={setManuFacturer}
            />

            <SearchButton otherClasses="sm:hidden"/>
        </div>

        <div className="searchbar__item">
            <Image src="/model-icon.png" alt="model icon" width={25} height={25} className=" absolute w-[20px] h-[20] ml-4"/>
            <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input"/>
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
    </>
  )
}

export default Searchbar