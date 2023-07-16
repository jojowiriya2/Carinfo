import exp from "constants";
import React, { MouseEventHandler } from "react";

export interface CustomButtonProps { 
    title: string; 
    containerStyles?: string; 
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps{
    ManuFacturer: string;
    setManuFacturer: (ManuFacturer: string ) => void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
   
}

export interface filterProps{
    ManuFacturer: string;
     year: number;
     fuel: string;
     limit: number;
     model: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomfilterProps{
    title: string;
    options: OptionProps[];
}