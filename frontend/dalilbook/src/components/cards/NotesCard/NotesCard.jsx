import React from "react";
import Tags from '/src/components/Tags/Tags.jsx';

const NotesCard = () => {


  return (
    <div className=' w-full sm:w-full h-70 lg:h-70 bg-white rounded-md p-2 my-2 align-center' >

      <div class="flex flex-col  h-full justify-between">

        <div>
          <h1 className='text-gray-800 text-md font-medium'>Title :ayisha marriage</h1>

          <p className='line-clamp-1 lg:line-clamp-1 text-gray-800 text-md mt-2 mb-4'>that the Prophet (ﷺ) married her when she was six years old and he consummated his marriage when she was nine years old. Hisham said: I have been informed that `Aisha remained with the Prophet (ﷺ) for nine years (i.e. till his death).</p>
          <p className='line-clamp-6 lg:line-clamp-6 text-gray-800 text-md'>Permitted to you, on the night of the fasts, is the approach to your wives. They are your garments and ye are their garments.
            Allah knoweth what ye used to do secretly among yourselves; but He turned to you and forgave you; so now associate with them,
            and seek what Allah Hath ordained for you, and eat and drink, until the white thread of dawn appear to you distinct from its black thread;
            then complete your fast Till the night appears; but do not associate with your wives while ye are in retreat in the mosques.
            Those are Limits (set by) Allah: Approach not nigh thereto. Thus doth Allah make clear His Signs to men: that they may learn self-restraint.</p>

        </div>

        <div>

          <Tags tags={['quran ', 'kill', 'marriage']} />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
