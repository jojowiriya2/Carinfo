import { CarProps, filterProps } from "@/types";
import { type } from "os";

export async function fetchCars(filters: filterProps) {
    const {ManuFacturer, year, model, limit, fuel} = filters;
    const headers = {
        'X-RapidAPI-Key': '4510deb558msh4bde8baada9ddbdp113e6ajsna40e9fc1ba02',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await fetch(
        
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${ManuFacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
        , {
        headers: headers,
      });

    const result = await response.json();
  
    return result;
  }

  export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


  export const generateCarImageUrl = (car: CarProps, angle?: string ) =>{
    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make, year, model} = car;

    url.searchParams.append('customer', 'thcarhub')
    url.searchParams.append('make', make)
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)
    
    return `${url}`

  }

  export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;

  }

  