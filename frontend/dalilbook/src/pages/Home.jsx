import React from 'react'
import { HeartPlus } from "lucide-react";
import VideoCard from '/src/components/VideoCard/VideoCard.jsx';
import SearchInput from '../components/SearchInput/SearchInput';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed


function Topics({ count }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="line-clamp-2   w-full h-14 bg-white text-sm rounded-md px-2 py-2 my-2 shadow-sm border border-gray-100"
        >
          <p className="text-gray-700">Topic  Ayish Amarriage about some repettative content </p>
        </div>
      ))}
    </div>
  );
}

function TypeButton({ text }) {
  return (
    <div className="inline-block bg-white text-gray-700 font-medium px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 mx-1 my-1">
      {text}
    </div>
  );
}
function Tags({ tags }) {
  const colors = [
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
    "bg-red-100 text-red-700",
    "bg-teal-100 text-teal-700",
    "bg-cyan-100 text-cyan-700",
    "bg-lime-100 text-lime-700",
    "bg-emerald-100 text-emerald-700",
    "bg-sky-100 text-sky-700",
    "bg-indigo-100 text-indigo-700",
    "bg-violet-100 text-violet-700",
    "bg-fuchsia-100 text-fuchsia-700",
    "bg-rose-100 text-rose-700",
    "bg-amber-100 text-amber-700",
    "bg-stone-100 text-stone-700",
    "bg-neutral-100 text-neutral-700",
    "bg-gray-100 text-gray-700",
    "bg-slate-100 text-slate-700",
    "bg-zinc-100 text-zinc-700",
    "bg-blue-200 text-blue-800",
    "bg-green-200 text-green-800",
    "bg-orange-200 text-orange-800",
    "bg-purple-200 text-purple-800",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 ${getRandomColor()
            }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}


function Home() {
  return (
    < >
      <div className='mt-20'></div>

      {/* main grid */}
      <div class="grid grid-cols-1 sm:grid-cols-8  md:grid-cols-8  gap-4 p-4">

        {/* side bar section */}
        <div class=" col-span-1 sm:col-span-3  md:col-span-1  bg-gray-100 p-1 min-h-screen ">

          <div className="px-2 flex items-center">
            <h1 className="font-inter text-lg font-normal text-gray-800">
              Favorite Topics
            </h1>
            <span className="ml-3">
              <HeartPlus />
            </span>
          </div>

          <div class="border-t-1 border-gray-300 w-full my-4"></div>

          <Topics count={5} />

        </div>

        {/* main content section */}
        <div class="sm:col-span-5 md:col-span-7 bg-gray-100 p-4 min-h-screen">

          {/* Dashboard row  */}
          <div className='w-full h-10  flex items-center justify-center'>
            <h1 className='font-bold text-2xl text-gray-800 '>Dashboard</h1>
          </div>

          {/* search row */}
          <div className='w-full h-10  '>
            <SearchInput />
          </div>

          {/*Type button group  */}
          <div className='w-full h-20 md:h-12 my-3 '>

            <TypeButton text="All" />
            <TypeButton text="Topics" />
            <TypeButton text="Videos" />
            <TypeButton text="Notes" />
            <TypeButton text="E-Books" />

          </div>

          {/* topic  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Topics</span>
            <Tags tags={['4']} />
          </div>




          <div className=' w-full sm:w-160 h-55 lg:h-40 bg-white rounded-md p-2' >

            <h1 className='text-gray-800 text-md font-medium'>Title :ayisha marriage</h1>
            <p className='line-clamp-4 lg:line-clamp-3 text-gray-800 text-md my-2'>that the Prophet (ﷺ) married her when she was six years old and he consummated his marriage when she was nine years old. Hisham said: I have been informed that `Aisha remained with the Prophet (ﷺ) for nine years (i.e. till his death).</p>

            <div className='flex gap-2 flex-wrap'>
              <div className='flex items-center gap-2'>
                <span className="font-medium text-gray-700">Notes</span>
                <Tags tags={['4']} />
              </div>

              <div className='flex items-center gap-2'>
                <span className="font-medium text-gray-700">Videos</span>
                <Tags tags={['4']} />
              </div>

              <div className='flex items-center gap-2'>
                <span className="font-medium text-gray-700">Photos</span>
                <Tags tags={['4']} />
              </div>

              <div className='flex items-center gap-2'>
                <span className="font-medium text-gray-700">E-Book</span>
                <Tags tags={['4']} />
              </div>

              <div className='flex items-center gap-2'>
                <span className="font-medium text-gray-700">Files</span>
                <Tags tags={['4']} />
              </div>


            </div>


          </div>
          <div>
            {/* <VideoCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            /> */}

          </div>


        </div>
      </div>


    </>


  )


}

export default Home;
