import React from 'react'
import { HeartPlus } from "lucide-react";
import VideoCard from '/src/components/cards/VideoCard/VideoCard.jsx';
import ImageCard from '../../components/cards/ImageCard/ImageCard.jsx';

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
function TopicPage() {
    return (
        <div className='mt-20'>
            <div className='p-4'>
                <div className='flex '> <h1 className='mr-2'>Topic Name </h1><HeartPlus /></div>

                <p>Description</p>
                {/* description card */}
                <div className=' w-full sm:w-full h-70 lg:h-50 bg-white rounded-md p-2 my-2 align-center' >

                    <div class="flex flex-col  h-full justify-between">

                        <div>

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
                {/* Notes  section */}
                <div className="w-full  flex items-center gap-2 mt-10">
                    <span className="font-medium text-gray-700">Notes</span>
                    <Tags tags={['2']} />
                </div>
                {/* notes container */}
                <div className='grid grid-cols-1 '>

                    {/* notes card */}
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


                </div>
                <div className="w-full  flex items-center gap-2 mt-10">
                    <span className="font-medium text-gray-700">Videos</span>
                    <Tags tags={['12']} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10  mt-4  '>
                    <div className="flex  my-3">
                        <div className="bg-white rounded-md">
                            <VideoCard
                                title="Learn React in 10 Minutes"
                                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
                            />
                        </div>
                    </div>


                    <div className="flex  my-3">
                        <div className="bg-white rounded-md">
                            <VideoCard
                                title="Learn React in 10 Minutes"
                                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
                            />
                        </div>
                    </div>
                    <div className="flex  my-3">
                        <div className="bg-white rounded-md">
                            <VideoCard
                                title="Learn React in 10 Minutes"
                                description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
                                tags={["React", "Frontend", "JavaScript", "Tutorial"]}
                                thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
                            />
                        </div>
                    </div>
                   


                </div>


                <div className="w-full  flex items-center gap-2 mt-10">
                    <span className="font-medium text-gray-700">Images</span>
                    <Tags tags={['4']} />
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

                {/* end of container */}
            </div>



        </div>
    )
}

export default TopicPage