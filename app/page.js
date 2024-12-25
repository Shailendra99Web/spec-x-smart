'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Raleway, Oswald } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway", // Define a CSS variable
  weight: "700", // Choose the required weight
  display: "swap", // Use "swap" for better UX
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-raleway", // Define a CSS variable
  weight: "700", // Choose the required weight
  display: "swap", // Use "swap" for better UX
});
export default function Home() {

  const [activeChart, setActiveChart] = useState('SpecXSizer')
  const [chartContent, setChartContent] = useState(['1', 'SpecXSizer', 'Use AI To Fit Your Face And Get The Perfect Data For Frames That Suit You.',])

  const allChartVarData = {
    'SpecXSizer': 'Use AI To Fit Your Face And Get The Perfect Data For Frames That Suit You.',
    'Portal Registration': 'About Portal Registration Lorem ipsum dolor sit amet, consectetur.',
    'SpecXViewer': 'About SpecXViewer Lorem ipsum dolor sit amet, consectetur.',
    'SpecXSorter': 'About SpecXSorter Lorem ipsum dolor sit amet, consectetur.',
    'SpecXFusion': 'About SpecXFusion Lorem ipsum dolor sit amet, consectetur.',
    Ordering: 'About Ordering Lorem ipsum dolor sit amet, consectetur.',
  }

  const selectChartVar = (e) => {
    const varText = e.target.textContent //1. SpecXSizer
    const varTextNumber = e.target.textContent.slice(0, 1) //1
    const varTextForDesIdentify = e.target.textContent.slice(3) //SpecXSizer

    console.log('varText :', varText)
    console.log('varTextNumber :', varTextNumber)
    console.log('varTextForDesIdentify :', varTextForDesIdentify)
    console.log('which one is selected:', allChartVarData[varTextForDesIdentify])

    const newChartContent = [varTextNumber, varTextForDesIdentify, allChartVarData[varTextForDesIdentify]]
    console.log(newChartContent)

    setActiveChart(varTextForDesIdentify);
    setChartContent(newChartContent);
  }

  return (
    <main>
      {/* Main Viewer */}
      <section className="md:flex md:justify-evenly md:items-center md:m-8">
        <div className="flex flex-col justify-evenly items-center md:items-start">

          <div className=' bg-white rounded-xl md:hidden mt-8'>
            <Image width={250} height={200} className="h-auto w-auto bg-customColor2 rounded-lg" src='/images/whiteGirl.png' alt="girlPic"></Image>
          </div>

          <div className="mt-8 mx-8 md:mt-auto md:mx-auto">
            <p className="text-3xl text-[#0e0e0e]">Discover The Future With</p>
            <p className="text-5xl text-primary font-bold">SpecXSmart</p>
            <p className="text-sm text-[#818288] font-bold">Discover the Innovative Process Of Customizing Your Glasses</p>
          </div>
          <div id='get-start' className='flex space-x-4 my-8'>
            <Button className='font-bold'>Get Started</Button>
            <Button className='font-bold bg-customColor3 text-customColor'>Log In</Button>
          </div>
        </div>

        <div className='hidden bg-white rounded-xl md:block'>
          <Image width={250} height={200} className="h-auto w-auto bg-customColor2 rounded-lg" src='/images/whiteGirl.png' alt="girlPic"></Image>
        </div>
      </section>

      {/* Brands */}
      <section className="band bg-gray-50 text-[#c1c1c1] flex items-center p-2 md:p-3 mb-8">
        <div
          className="grid grid-row-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 w-full justify-evenly items-center">
          <div className="text-center noselect"><span className="pr-2"><Image width={45} height={16} className="inline w-auto h-auto" src="/images/brands/brand-4-g.png" alt=""></Image></span>AVON</div>
          <div className="text-center noselect"><span className="pr-2"><Image width={45} height={16} className="inline w-auto h-auto" src="/images/brands/brand-1-g.png" alt=""></Image></span>BIGMG</div>
          <div className="text-center noselect"><span className="pr-2"><Image width={45} height={16} className="inline w-auto h-auto" src="/images/brands/brand-2-g.png" alt=""></Image></span>REPTOO</div>
          <div className="text-center noselect"><span className="pr-2"><Image width={45} height={16} className="inline w-auto h-auto" src="/images/brands/brand-3-g.png" alt=""></Image></span>FEATHER</div>
        </div>
      </section>

      {/* Analaysis (for Desktop) */}
      <section className=" h-96 mx-auto my-14 hidden md:flex flex-col justify-center items-center font-semibold text-gray-500">

        <div className="">
          <div className="flex justify-between">

            <div className="pl-[20%] flex px-2 py-0">
              <button className={`w-[107px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'Ordering' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>6. Ordering</button>
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'Ordering' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className="pr-[30%] flex px-2 py-0">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXSizer' ? 'visible' : 'invisible'}`}></span>
              <button className={`w-[132px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXSizer' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>1. SpecXSizer</button>
            </div>

          </div>
          <div className='flex items-center'>

            <div className="flex pr-1">
              <button className={`w-[149px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXFusion' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>5. SpecXFusion</button>
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXFusion' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div style={{ background: 'radial-gradient(circle, rgba(145,209,240,1) 0%, rgba(22,172,241,1) 100%)' }} className='flex flex-col justify-center items-center text-center h-[230px] w-[340px] rounded-[50%]'>
              <h1 className={`text-customColor4 text-8xl font-bold`}>{chartContent[0]}</h1>
              <h2 className={`text-customColor4 text-lg font-bold ${raleway.className}`}>{`${chartContent[0]}. ${chartContent[1]}`}</h2>
              <p className="w-[250px] text-xs text-gray-500 font-semibold">{chartContent[2]}</p>
            </div>

            <div className="flex pl-1">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'Portal Registration' ? 'visible' : 'invisible'}`}></span>
              <button className={`w-[202px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'Portal Registration' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>2. Portal Registration</button>
            </div>
          </div>

          <div className='flex justify-between'>

            <div className="pl-[15%] flex px-2 py-0">
              <button className={`w-[148px] h-[28px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXViewer' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>4. SpecXViewer</button>
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXViewer' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className="pr-[20%] flex px-2 py-0">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXSorter' ? 'visible' : 'invisible'}`}></span>
              <button className={`w-[143px] h-[28px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXSorter' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>3. SpecXSorter</button>
            </div>

          </div>
        </div>

      </section>


      {/* Analaysis (for Mobiles) */}
      <section className="mx-24 my-14 flex md:hidden flex-col justify-center items-center font-semibold text-gray-500">

        <div className="">

          <div className="my-7 flex justify-between">
            <div style={{ background: 'radial-gradient(circle, rgba(145,209,240,1) 0%, rgba(22,172,241,1) 100%)' }} className='flex flex-col justify-center items-center text-center h-72 w-72 rounded-[50%] transition-all'>
              <h1 className={`text-customColor4 text-8xl font-bold`}>{chartContent[0]}</h1>
              <h2 className={`text-customColor4 text-lg font-bold ${raleway.className}`}>{`${chartContent[0]}. ${chartContent[1]}`}</h2>
              <p className="w-[250px] text-xs text-gray-500 font-semibold">{chartContent[2]}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between">

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXSizer' ? 'visible' : 'invisible'}`}></span>
              <button className={`inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXSizer' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>1. SpecXSizer</button>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'Portal Registration' ? 'visible' : 'invisible'}`}></span>
              <button className={`inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'Portal Registration' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>2. Portal Registration</button>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXSorter' ? 'visible' : 'invisible'}`}></span>
              <button className={`h-[28px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXSorter' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>3. SpecXSorter</button>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXViewer' ? 'visible' : 'invisible'}`}></span>
              <button className={`h-[28px] inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXViewer' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>4. SpecXViewer</button>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'SpecXFusion' ? 'visible' : 'invisible'}`}></span>
              <button className={`inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'SpecXFusion' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>5. SpecXFusion</button>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <span style={{ background: 'radial-gradient(circle, rgba(193,230,240,1) 0%, rgba(93,185,224,1) 100%)' }} className={`inline-block w-9 h-9 rounded-full border border-primary ${activeChart == 'Ordering' ? 'visible' : 'invisible'}`}></span>
              <button className={`inline-block scale-100 hover:scale-110 hover:text-customColor4 !transition-all ${activeChart == 'Ordering' ? 'scale-110 text-customColor4' : ''}`} onClick={(e) => { selectChartVar(e) }}>6. Ordering</button>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
