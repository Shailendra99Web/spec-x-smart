import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function MyCarousel() {

    const testemonialsData = [
        {
            name: 'Judith Black',
            img: '/images/brownHair.png',
            des: `"My experience with Ceramic Impliant Guy products has been amazing. The high quality and meticulous design made me feel confident and satisfied, knowing I was using products crafted with precision and care."`,
            who: 'CEO of CafeStation',
        },
        {
            name: 'Nisha Gupta',
            img: '/images/checkShirtGirl.png',
            des: `"My experience with Ceramic Impliant Guy products has been amazing. The high quality and meticulous design made me feel confident and satisfied, knowing I was using products crafted with precision and care."`,
            who: 'Employee at WorkGlobal'
        }
    ]

    return (
        <Carousel id='mainCarousel' className="flex flex-col space-y-4" opts={{ align: "start", loop: true, }}
        // plugins={[
        //     Autoplay({
        //         delay: 5000,
        //     }),
        // ]}
        >
            <CarouselContent id='CarouselContent' className='md:w-full m-4 lg:pr-6'>

                {testemonialsData.map((testemonial) => (
                    <CarouselItem className='p-0 flex justify-center'>
                        <div className='lg:w-[735px] my-4 p-4 flex justify-evenly rounded-lg sm:space-x-4 lg:space-x-0 shadow-lg'>
                            <div className="hidden sm:block w-[280px] h-[400px] relative rounded-[50%] border-4 border-customColor3 overflow-hidden">
                                <Image src={testemonial.img} layout="fill" objectFit="cover" className=''></Image>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='sm:shadow-md p-4 rounded-lg'>
                                    <p className='w-52 text-gray-500 text-sm'>{testemonial.des}</p>
                                    <div className='pt-4 flex space-x-4 sm:space-x-0'>
                                        <div className="sm:hidden w-10 h-10 relative rounded-full border-4 border-customColor3 overflow-hidden">
                                            <Image src={testemonial.img} layout="fill" objectFit="cover" objectPosition="top" className=''></Image>
                                        </div>
                                        <div>
                                            <p className='text-sm text-customColor4'>{testemonial.name}</p>
                                            <p className='text-sm text-customColor4'>{testemonial.who}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}

                {/* <CarouselItem className='p-0 flex justify-center'>
                    <div className='lg:w-[735px] my-4 p-4 flex justify-evenly rounded-lg sm:space-x-4 lg:space-x-0 shadow-lg'>
                        <div className="hidden sm:block w-[280px] h-[400px] relative rounded-[50%] border-4 border-customColor3 overflow-hidden">
                            <Image src='/images/brownHair.png' layout="fill" objectFit="cover" className=''></Image>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className='sm:shadow-md p-4 rounded-lg'>
                                <p className='w-52 text-gray-500 text-sm'>&quot;My experience with Ceramic Impliant Guy products has been amazing. The high quality and meticulous design made me feel confident and satisfied, knowing I was using products crafted with precision and care.&quot;</p>
                                <div>
                                    <p className='text-sm'>Judith Black</p>
                                    <p className='text-sm'>CEO of CafeStation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem> */}
            </CarouselContent>
            <div className="flex space-x-4">
                <CarouselPrevious className='!text-customColor top-auto left-4 sm:left-8 lg:left-12 translate-x-0 translate-y-0' />
                <CarouselNext className='!text-customColor top-auto right-4 sm:right-8 lg:right-8 translate-x-0 translate-y-0' />
            </div>
        </Carousel>
    )
}
