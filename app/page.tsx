import {Image} from "next/image";
import {clsx} from "clsx";
import  {cn} from "@/lib/utils";
import {WaterWaveWrapper} from "react-water-wave";
export default function Home() {
  return (
    <WaterWaveWrapper
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
      {()=> <div className="h-screen"></div>}
    </WaterWaveWrapper>
  );
}
