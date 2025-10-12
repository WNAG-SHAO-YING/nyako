import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";

export default function Event() {
    // const uid = useParams();

    const data = [{ event_name: "貓咪的暑假-野外求生篇", event_url: "/event/island.jpg", reward: "/cat/EX/ex-09.png", uid: "ex09" },
    { event_name: "貓咪的暑假-蟲蟲王者相撲", event_url: "/event/summer.jpg", reward: "/cat/EX/ex-05.png", uid: "ex05" },
    { event_name: "貓咪的暑假-享樂天堂篇", event_url: "/event/vacation.jpg", reward: "/cat/EX/summer-04.png", uid: "ex04" }
    ]
    return (
        <>
            <main className=" relative px-4 py-5 bg-white w-1/2">
                <span className="block text-lg text-center md:text-left md:text-3xl  ">活動關卡</span>
                <section> {/* map這邊 */}
                    {
                        data.map((data) => {
                            return (
                                <div className="text-xs md:text-2xl" key={data.uid}>
                                    <div className="hidden text-3xl md:block  bg-lightbg " >限時活動:{data.event_name}</div>
                                    <div className="grid " >
                                        <div className="flex flex-col md:flex-row flex-1 relative  gap-2.5 w-full h-auto">
                                            <figure className="flex w-full md:w-1/2 items-center ">
                                                <Image src={`${data.event_url}`} width={960} height={480} alt="貓咪的暑假" className="rounded-2xl w-full " />
                                            </figure>
                                            <div className="w-full md:w-1/2 ">
                                                <span className=" hidden text-xs md:block md:text-2xl  ">可獲取角色</span>
                                                <div className="grid grid-cols-4  gap-2.5 ">
                                                    <Link href={`/cat/${data.uid}`}>
                                                        <Image src={`${data.reward}`} width={104} height={79} alt="通關獎勵" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })


                    }
                </section>
            </main>
        </>
    )
}