import React from 'react'

const FifthComponent = ({ data }) => {
    const rewardsData = [
        {
            id: 1,
            icon: '🚀',
            title: data?.headings[1],
            description: data?.paragraphs[1],
        },
        {
            id: 2,
            icon: '👑',
            title: data?.headings[2],
            description: data?.paragraphs[2],
        },
        {
            id: 3,
            icon: '🌲',
            title: data?.headings[3],
            description: data?.paragraphs[3],
        },
        {
            id: 4,
            icon: '💰',
            title: data?.headings[4],
            description: data?.paragraphs[4],
        },
    ]
    return (
        <div className="bg-gray-900 text-white py-12 px-6">
            {/* Main Heading Section */}
            <div className="max-w-4xl mx-auto lg:text-center mb-12">
                <h1 className="text-[28px] lg:text-4xl font-bold mb-4">
                    {data && data.headings[0]}
                </h1>
                <p className="text-sm lg:text-2xl text-gray-400 mb-6">
                    {data && data.paragraphs[0]}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
                    Become a VIP
                </button>
            </div>

            {/* Rewards Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {rewardsData.map((reward) => (
                    <div
                        key={reward.id}
                        className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg"
                    >
                        {/* Icon Section */}
                        <div className="flex-shrink-0 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl mr-6">
                            {reward.icon}
                        </div>

                        {/* Text Section */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">
                                {reward.title}
                            </h2>
                            <p className="text-gray-400">
                                {reward.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FifthComponent
