import React from 'react'

const EighthComponent = ({ data }) => {
    return (
        <div className="px-40 flex py-16 gap-20">
            <div className="w-1/2 flex justify-end">
                <img src={data?.images[0]} alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 leading-normal">
                    {data && data.headings[0]}
                </h1>
                <p className="font-semibold text-gray-400 mb-6">
                    {data && data.paragraphs[0]}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded w-min">
                    Join the Community
                </button>
            </div>
        </div>
    )
}

export default EighthComponent
