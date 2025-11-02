import React from 'react'
import { HeartPlus } from "lucide-react";
import VideoCard from '../components/cards/VideoCard/VideoCard.jsx';
import SearchInput from '../components/SearchInput/SearchInput';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
import ImageCard from '../components/cards/ImageCard/ImageCard.jsx';
import { useNavigate } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar.jsx';
import Tags from '/src/components/Tags/Tags.jsx';
import TopicsCard from '../components/cards/TopicsCard/TopicsCard.jsx';
import NotesCard from '../components/cards/NotesCard/NotesCard.jsx';



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

function FilterButton({ text }) {
  return (
    <div className="inline-block bg-white text-gray-700 font-medium px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 mx-1 my-1">
      {text}
    </div>
  );
}



function Home() {
  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  };

  return (
    < >
      <div className='mt-20'></div>

      {/* main grid */}
      <div class="grid grid-cols-1 sm:grid-cols-8  md:grid-cols-8  gap-4 p-4">

        {/* side bar section */}
        <SideBar />

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

            <FilterButton text="All" />
            <FilterButton text="Topics" />
            <FilterButton text="Videos" />
            <FilterButton text="Notes" />
            <FilterButton text="E-Books" />

          </div>

          {/* topic  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Topics</span>
            <Tags tags={['4']} />
          </div>


          {/* topic container */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2  '>

            {/* topic card */}
            <TopicsCard />
            <TopicsCard />

          </div>

          {/* Notes  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Notes</span>
            <Tags tags={['2']} />
          </div>

          {/* notes container */}
          <div className='grid grid-cols-1 '>

            {/* notes card */}
            <NotesCard />


          </div>

          {/* Videos  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Videos</span>
            <Tags tags={['12']} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 3xl:bg-red-100 md:gap-10  mt-4  '>
            <VideoCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            />

            <VideoCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            />
            <VideoCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            />

          </div>
          {/* topic  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Images</span>
            <Tags tags={['14']} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2  mt-4  '>
            <div className=' w-full sm:w-100 bg-white rounded-md  my-3' >
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
            </div>
            <div className=' w-full sm:w-100 bg-white rounded-md  my-3' >
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
            </div>
            <div className=' w-full sm:w-100 bg-white rounded-md  my-3' >
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
            </div>
          </div>


          {/* end main content   */}
        </div>

      </div>


    </>


  )


}

export default Home;
