import React from 'react'
import newReleasesIcon from '.././assets/new-releases-icon.BWnV6JM9.svg' // Adjust the path based on the file's location

const FirstComponent = ({ data }) => {
    return (
        <section
            className="bg-grey-800 px-4 md:px-8 md:pt-4 pt-8"
            style={{ maxHeight: '400px' }}
        >
            {/* Wrapper for Content */}
            <div className="  overflow-hidden md:flex flex-col  px-4 md:px-8 ">
                {/* Left Section: Text and Categories */}
                <div className=" banner2 min-h-[390px] w-full inset-0 overflow-hidden  m-auto mr-1  max-w-[1400px]">
                    {/* Text Section */}
                    <div className=" rounded-lg  justify-between ">
                        {/* Text Section */}
                        <div>
                            <h2 className="font-bold text-left text-4xl text-white leading-tight mt-10 ml-20">
                                {data &&
                                    data.headings[0]
                                        .split('\r\n')
                                        .map((heading, index) => (
                                            <React.Fragment key={index}>
                                                {heading}
                                                <br />
                                            </React.Fragment>
                                        ))}
                            </h2>
                        </div>

                        {/* Categories Section */}
                        <div class="w-1/2 gap-x-4 gap-y-4 isolate grid md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid-cols-2 md:my-6 mb-2 md:mb-6 md:py-5 p-4 rounded backdrop-blur-md bg-black/15 absolute ml-10">
                            {/* New Releases */}
                            <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                                <img
                                    src={newReleasesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                            </div>
                            {/* Slots */}
                            <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                                <img
                                    src={newReleasesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                            </div>
                            {/* Live Casino */}
                            <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                                <img
                                    src={newReleasesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                            </div>
                            {/* Table Games */}
                            <div className="grid grid-cols-[40px_auto] gap-2 rounded items-center">
                                <img
                                    src={newReleasesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section: Image */}
                <div
                    className="absolute right-10"
                    style={{ transform: 'translateY(-10px)' }}
                >
                    {data && (
                        <img
                            className="self-end hidden md:block"
                            src={data.images[0]}
                            alt="casino hero banner"
                            loading="lazy"
                            decoding="async"
                            srcSet={`${data.images[0]} 382w,
                                    ${data.images[1]} 640w,
                                    ${data.images[2]} 750w,
                                    ${data.images[3]} 764w`}
                            sizes="(min-width: 382px) 382px, 100vw"
                            style={{
                                objectFit: 'cover',
                                maxWidth: '382px',
                                maxHeight: '400px',
                                aspectRatio: '0.955 / 1',
                                width: '100%',
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default FirstComponent
