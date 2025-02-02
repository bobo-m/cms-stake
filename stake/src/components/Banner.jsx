import bannerBg from '../assets/stake.BFmdy97X.svg'

const Banner = ({ data }) => {
    return (
        <section
            className="bg-contain bg-no-repeat bg-top w-full bg-grey-800 py-12 px-4 md:px-8 "
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            {' '}
            {/* Add overflow-auto here */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto gap-8 items-center md:items-start lg:items-center">
                    <div className="text-center md:text-left lg:max-w-[478px]">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-tight md:mb-6">
                            {data && data.headings[0]}
                        </h2>
                        <button
                            type="button"
                            className="inline-flex relative items-center gap-2 justify-center 
                                    rounded-sm font-semibold whitespace-nowrap ring-offset-background 
                                    transition disabled:pointer-events-none disabled:opacity-50 
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                    active:scale-[0.98] bg-blue-500 text-white 
                                    betterhover:hover:bg-blue-600 betterhover:hover:text-white 
                                    focus-visible:outline-white text-sm leading-none shadow-md 
                                    py-[0.9375rem] px-[1.25rem] mt-5 lg:mt-8 md:mt-4 w-full md:w-auto"
                        >
                            {' '}
                            Sign up
                        </button>

                        <div className="oauth h-full w-full justify-start md:items-start mt-5 md:mt-20">
                            <div className="mb-2">
                                <p className="weight-bold line-height-default align-left size-sm text-size-sm variant-subtle with-icon-space svelte-17v69ua">
                                    Or sign up with
                                </p>
                            </div>
                            <div className="flex gap-2 justify-center md:justify-start">
                                <button className="w-1/4 md:w-min inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 96 96"
                                        className="svg-icon"
                                    >
                                        <title>Facebook Icon</title>
                                        <path
                                            d="M95.94 47.97C95.94 21.467 74.473 0 47.97 0S0 21.467 0 47.97c0 22.486 15.47 41.374 36.397 46.59v-31.9h-9.894V47.97h9.894v-6.296c0-16.31 7.376-23.925 23.446-23.925 3.058 0 8.274.6 10.433 1.2v13.31c-1.14-.12-3.118-.18-5.516-.18-7.856 0-10.914 3-10.914 10.734v5.157h15.65l-2.698 14.69H53.846v32.98C77.591 92.762 96 72.555 96 48.03l-.06-.06Z"
                                            fill="#0866FF"
                                        ></path>
                                        <path
                                            d="m66.738 62.66 2.699-14.69h-15.65v-5.157c0-7.735 3.057-10.733 10.913-10.733 2.458 0 4.437 0 5.516.18V18.948c-2.158-.6-7.375-1.2-10.433-1.2-16.01 0-23.446 7.556-23.446 23.926v6.296h-9.894v14.69h9.894v31.9c3.718.9 7.615 1.44 11.573 1.44a46.6 46.6 0 0 0 5.816-.36V62.66h13.012Z"
                                            fill="#fff"
                                        ></path>
                                    </svg>
                                </button>

                                <button className="w-1/4 md:w-min inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]">
                                    <svg
                                        id="layer-google-logo"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 16 16"
                                        className="svelte-7etqum"
                                    >
                                        <defs>
                                            <style>
                                                {`.cls-google-logo-1 {
                                clip-path: url(#clip-google-logo);
                                }
                                .cls-google-logo-2 {
                                  fill: none;
                                }
                                .cls-google-logo-2,
                                .cls-google-logo-3,
                                .cls-google-logo-4,
                                .cls-google-logo-5,
                                .cls-google-logo-6 {
                                  stroke-width: 0px;
                                }
                                .cls-google-logo-3 {
                                  fill: #34a853;
                                }
                                .cls-google-logo-4 {
                                  fill: #4285f4;
                                }
                                .cls-google-logo-5 {
                                  fill: #e94235;
                                }
                                .cls-google-logo-6 {
                                  fill: #fbbc04;
                                }`}
                                            </style>
                                            <clipPath id="clip-google-logo">
                                                <rect
                                                    className="cls-google-logo-2"
                                                    width="16"
                                                    height="16"
                                                ></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="layer-google-logo-2">
                                            <g className="cls-google-logo-1">
                                                <path
                                                    className="cls-google-logo-4"
                                                    d="M15.68,8.18c0-.57-.05-1.11-.15-1.64h-7.53v3.09h4.31c-.19,1-.75,1.85-1.6,2.41v2.01h2.59c1.51-1.39,2.39-3.44,2.39-5.88Z"
                                                ></path>
                                                <path
                                                    className="cls-google-logo-3"
                                                    d="M8,16c2.16,0,3.97-.72,5.29-1.94l-2.59-2.01c-.72.48-1.63.76-2.71.76-2.08,0-3.85-1.41-4.48-3.3H.85v2.07c1.32,2.61,4.02,4.41,7.15,4.41Z"
                                                ></path>
                                                <path
                                                    className="cls-google-logo-6"
                                                    d="M3.52,9.52c-.16-.48-.25-.99-.25-1.52s.09-1.04.25-1.52v-2.07H.85c-.54,1.08-.85,2.3-.85,3.59s.31,2.51.85,3.59l2.67-2.07Z"
                                                ></path>
                                                <path
                                                    className="cls-google-logo-5"
                                                    d="M8,3.18c1.17,0,2.23.4,3.06,1.2l2.29-2.29c-1.39-1.29-3.2-2.08-5.35-2.08C4.87,0,2.17,1.79.85,4.41l2.67,2.07c.63-1.89,2.39-3.3,4.48-3.3Z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </button>

                                <button className="w-1/4 md:w-min inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 97 96"
                                        className="svg-icon"
                                    >
                                        <path
                                            d="M48.121 96c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48Z"
                                            fill="#06C755"
                                        ></path>
                                        <path
                                            d="M80.161 45.23c0-14.334-14.394-26.018-32.04-26.018s-32.04 11.684-32.04 26.018c0 12.888 11.383 23.608 26.8 25.656 1.024.24 2.47.662 2.831 1.566.301.783.241 2.108.12 2.89 0 0-.36 2.29-.481 2.77-.12.784-.663 3.193 2.77 1.748 3.433-1.446 18.49-10.901 25.175-18.61 4.637-5.12 6.865-10.239 6.865-16.02Z"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M69.501 53.48a.603.603 0 0 0 .602-.602V50.59a.603.603 0 0 0-.602-.603h-6.143V47.64h6.143a.603.603 0 0 0 .602-.603v-2.288a.603.603 0 0 0-.602-.602h-6.143v-2.35h6.143a.603.603 0 0 0 .602-.602v-2.288a.603.603 0 0 0-.602-.602h-9.034a.604.604 0 0 0-.602.602v13.972c0 .362.301.602.602.602h9.034Zm-33.365 0a.603.603 0 0 0 .602-.602V50.59a.603.603 0 0 0-.602-.603h-6.143V38.906a.603.603 0 0 0-.602-.602h-2.289a.604.604 0 0 0-.602.602v13.972c0 .362.301.602.602.602h9.034Zm5.481-15.176h-2.289a.602.602 0 0 0-.602.602v14.032c0 .333.27.603.602.603h2.289c.332 0 .602-.27.602-.602V38.905a.602.602 0 0 0-.602-.602Zm15.478 0h-2.289a.604.604 0 0 0-.602.602v8.311l-6.384-8.672v-.06h-2.289a.604.604 0 0 0-.602.602v13.972c0 .361.301.602.602.602h2.289a.603.603 0 0 0 .602-.602v-8.311l6.384 8.672.18.181h2.471a.604.604 0 0 0 .601-.602V39.026a.604.604 0 0 0-.602-.602l-.361-.12Z"
                                            fill="#06C755"
                                        ></path>
                                    </svg>
                                </button>

                                <button className="w-1/4 md:w-min inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 96 96"
                                        className="svg-icon"
                                        style={{}}
                                    >
                                        <title>Twitch Icon</title>
                                        <path
                                            d="M82.378 44.593 68.69 58.281H55.002L42.987 70.297V58.28H27.565V6.875h54.813v37.718Z"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            d="M24.156 0 7 17.156v61.688h20.563V96l17.156-17.156h13.688L89.25 48V0H24.156Zm58.222 44.593L68.69 58.281H55.002L42.987 70.297V58.28H27.565V6.875h54.813v37.718Z"
                                            fill="#9146FF"
                                        ></path>
                                        <path
                                            d="M72.156 18.89h-6.875v20.563h6.875V18.89Zm-18.89 0H46.39v20.563h6.875V18.89Z"
                                            fill="#9146FF"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            style={{
                                display: 'contents', // CSS custom property
                                '--border-color': '#017aff',
                            }}
                        >
                            <div
                                className=" rounded-2xl overflow-hidden relative basis-6/12 "
                                style={{
                                    border: '2px solid var(--border-color)',
                                }}
                            >
                                {data && (
                                    <img
                                        src={data.images[0]}
                                        alt="Game Preview"
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'contents', // CSS custom property
                                '--border-color': '#00CA51',
                            }}
                        >
                            <div
                                className=" rounded-2xl overflow-hidden relative basis-6/12 "
                                style={{
                                    border: '2px solid var(--border-color)',
                                }}
                            >
                                {data && (
                                    <img
                                        src={data.images[1]}
                                        alt="Team Preview"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
