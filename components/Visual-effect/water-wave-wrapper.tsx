"use client"
import { Children } from "react";
import { FC, ReactNode } from "react";
import WaterWave from "react-water-wave";



interface WaterWaveWrapper {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: ()=>ReactNode;
}


const WaterWaveWrapper :FC<WaterWaveWrapper> = ({
    imageUrl = {imageUrl},
    dropRadius = {dropRadius}, 
    perturbance = {perturbance},
    resolution = {resolution}, 
    
}) => { 
return <WaterWave> {Children} </WaterWave>

}