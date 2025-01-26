import React from 'react'

const SeventhComponent = ({ data }) => {
    return (
        <div className="px-40 flex py-16">
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 leading-normal">
                    {data && data.headings[0]}
                </h1>
                <p className="font-semibold text-gray-400 mb-6">
                    {data && data.paragraphs[0]}
                </p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src={data?.images[0]} alt="" />
            </div>
        </div>
    )
}

export default SeventhComponent
