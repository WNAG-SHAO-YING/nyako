import Carousel from "@/components/carousel"
import Event from "@/components/event"
export default function Home() {
  return (
    <>
    <Carousel/>
    <div className="flex flex-col items-center w-svw">
    <Event/>
    </div>
    </>
  )
}