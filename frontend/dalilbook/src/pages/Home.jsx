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
import FilterButton from '../components/FilterButton/FilterButton.jsx';

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
            <div onClick={navTopic}>
              <TopicsCard
                title="Aisha's Marriage"
                description="The Prophet (ﷺ) married Aisha when she was six years old and consummated the marriage when she was nine. She remained with him for nine years until his death."
                stats={{
                  notes: 4,
                  videos: 2,
                  photos: 5,
                  ebooks: 1,
                  files: 3,
                }}
              />
            </div>


            <TopicsCard
              title="Aisha's Marriage"
              description="The Prophet (ﷺ) married Aisha when she was six years old and consummated the marriage when she was nine. She remained with him for nine years until his death."
              stats={{
                notes: 4,
                videos: 2,
                photos: 5,
                ebooks: 1,
                files: 3,
              }}
            />


          </div>

          {/* Notes  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Notes</span>
            <Tags tags={['2']} />
          </div>

          {/* notes container */}
          <div className='grid grid-cols-1 '>

            {/* notes card */}
            <NotesCard
              title="Aisha’s Marriage"
              summary="Brief overview of Aisha's marriage and related historical notes."
              content="Permitted to you, on the night of the fasts, is the approach to your wives. They are your garments and ye are their garments. Allah knoweth what ye used to do secretly among yourselves; but He turned to you and forgave you..."
              tags={["Quran", "Marriage", "Islamic History"]}
            />


          </div>

          {/* Videos  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Videos</span>
            <Tags tags={['12']} />
          </div>

          {/* Video container */}
          <div className='grid grid-cols-1 md:grid-cols-3 3xl:bg-red-100 gap-4 md:gap-10  mt-4  '>
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
          {/* Images  section */}
          <div className="w-full  flex items-center gap-2 mt-10">
            <span className="font-medium text-gray-700">Images</span>
            <Tags tags={['14']} />
          </div>

          {/* Images container */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-4  '>
           <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
              <ImageCard
                title="Learn React in 10 Minutes"
                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
              />
          </div>

          {/* end main content   */}
        </div>

      </div>
    </>
  )


}

export default Home;
