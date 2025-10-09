import { Span } from "next/dist/trace";
import Image from "next/image";
import photo from "../../public/event/island.jpg"

export default function Event() {

    return (
        <>
            <main className=" relative px-4 py-5 bg-white w-1/2">
                <span className="block text-lg text-center md:text-left md:text-3xl  ">活動關卡</span>
                <section> {/* map這邊 */}
                    <div className="hidden text-3xl md:block  bg-lightbg ">限時活動:貓咪的暑假-野外求生篇</div>
                    <div className="grid grid-rows-3">
                        <div className="flex flex-col md:flex-row flex-1 relative  gap-2.5 w-full h-auto">
                            <figure className="flex w-full md:w-1/2 items-center ">
                                <Image src="/event/island.jpg" width={960} height={480} alt="貓咪的暑假" className="rounded-2xl w-full " />
                            </figure>
                            <div className="w-full md:w-1/2 ">
                                <span className=" hidden text-xs md:block md:text-2xl  ">可獲取角色</span>
                                <div className="grid grid-cols-4  gap-2.5 ">
                                    <Image src="/cat/EX/summer-01.png" width={104} height={79} alt="扇貝貓" />
                                    <Image src="/cat/EX/summer-02.png" width={104} height={79} alt="沙丁魚" />
                                    <Image src="/cat/EX/summer-03.png" width={104} height={79} alt="烏賊" />
                                    <Image src="/cat/EX/summer-04.png" width={104} height={79} alt=" 巨大擬濱蟹" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}