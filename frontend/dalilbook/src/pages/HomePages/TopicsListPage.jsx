import React from 'react'
import TopicsCard from '../../components/cards/TopicsCard/TopicsCard'

function TopicsListPage() {
  return (
    <div className='grid grid-col-1 md:grid-cols-3 gap-2 mt-10'>
     {Array.from({ length: 6 }).map((_, i) => (
        <TopicsCard
          key={i}
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
      ))}
      

  

    </div>
  )
}

export default TopicsListPage