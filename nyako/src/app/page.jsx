import Carousel from "@/components/carousel"
import Event from "@/components/event"
let images = [
  { src: "/banner-01.png" },
  { src: "/banner-02.jpg" },
  { src: "/banner-03.jpg" },
  { src: "/banner-04.jpg" },

]
export default function Home() {
  return (
    <>
      <Carousel images={images} />
      <div className="flex flex-col items-center w-svw">
        <Event />
      </div>
    </>
  )
}