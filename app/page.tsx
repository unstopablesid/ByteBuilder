import {Image} from "next/image";
import {clsx} from "clsx";
import  {cn} from "@/lib/utils";
export default function Home() {
  return (
    <div>
      <h1 className={cn ("text-8xl font-Oswald", "")} >Hello my friends</h1>
      <h1 className={cn ("text-8xl")} >Hello my friends</h1>
      <h1 className={cn ("text-8xl font-pixel")} >Hello my friends</h1>
    </div>
  );
}
