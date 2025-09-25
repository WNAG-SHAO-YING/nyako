import { Span } from "next/dist/trace";
import Image from "next/image";
import photo from "../../public/event/island.jpg"

export default function Event(){
    
    return(
        <>
        <main className="bg-white w-1/2">
            <span className="text-3xl">活動關卡</span>
            <div className="grid grid-rows-3">
                <div className="flex flex-1">
                    <Image src="/event/island.jpg" width={300} height={150}/>
                    <div>
                        <span>可獲取角色</span>
                        <div className="flex">
                            <Image src="/cat/EX/summer-01.png" width={104} height={79}/>
                            <Image src="/cat/EX/summer-02.png" width={104} height={79}/>
                            <Image src="/cat/EX/summer-03.png" width={104} height={79}/>
                            <Image src="/cat/EX/summer-04.png" width={104} height={79}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1"></div>
                <div className="flex flex-1"></div>
            </div>
        </main>
        </>
    )
}