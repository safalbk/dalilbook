import React from 'react'
import Tags from '/src/components/Tags/Tags.jsx';

const TopicsCard = () => {
  return (
    <div className=' w-full sm:w-150 h-55 lg:h-43 bg-white rounded-md p-2 my-2 ' >


      <div class="flex flex-col  h-full justify-between">

        <div>
          <h1 className='text-gray-800 text-md font-medium'>Title :ayisha marriage</h1>

          <p className='line-clamp-4 lg:line-clamp-3 text-gray-800 text-md my-2'>that the Prophet (ﷺ) married her when she was six years old and he consummated his marriage when she was nine years old. Hisham said: I have been informed that `Aisha remained with the Prophet (ﷺ) for nine years (i.e. till his death).</p>

        </div>

        <div className='flex gap-2 flex-wrap  '>
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



    </div>
  )
}

export default TopicsCard