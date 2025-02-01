import React from 'react'
import '../components/MainContent.css'
import Banner from './Banner'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import FifthComponent from './FifthComponent'
import SixthComponent from './SixthComponent'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import SeventhComponent from './SeventhComponent'
import EighthComponent from './EighthComponent'
import NinthComponent from './NinthComponent'
import FAQs from './FAQs'

const MainContent = ({ componentData }) => {
    console.log(componentData)
    return (
        <main class="flex flex-col font-monteserrat mt-16">
            <Banner
                data={
                    componentData
                        ? componentData.find(
                              (service) => service.title === 'banner'
                          )
                        : null
                }
            />
            <section class="w-full py-7 md:py-9 lg:px-8 m-auto flex flex-col content-center lg:mt-24 lg:mb-10 bg-[#1a2c38]">
                <div class="slider  overflow-hidden w-full max-w-[1200px] relative m-auto">
                    <ul class="slider-track flex items-center animate-slide">
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/drake.C1S9VFRt.svg"
                                alt="Drake"
                                class="w-[100px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/stake-f1-team-partner-label.Dn-6p8lJ.svg"
                                alt="Stake F1 Team"
                                class="w-[51px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/ufc.BlG4twI0.svg"
                                alt="UFC"
                                class="w-[78px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/davis-cup.2ozNmnfW.svg"
                                alt="Davis Cup"
                                class="w-[101px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/everton.CkPHQEMd.svg"
                                alt="Everton"
                                class="w-[55px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/billie-jean-king-cup.DFDdNsJj.svg"
                                alt="Billie Jean King Cup"
                                class="w-[101px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/juventude.DYj6mKZE.svg"
                                alt="Juventude"
                                class="w-[49px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/team-secret.BH46cAxZ.svg"
                                alt="Team Secret"
                                class="w-[70px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/enyimba-fc.Bk1l78K5.svg"
                                alt="Enyimba FC"
                                class="w-[58px]"
                            />
                        </li>

                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/stake-f1-team-partner-label.Dn-6p8lJ.svg"
                                alt="Stake F1 Team"
                                class="w-[51px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/ufc.BlG4twI0.svg"
                                alt="UFC"
                                class="w-[78px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/davis-cup.2ozNmnfW.svg"
                                alt="Davis Cup"
                                class="w-[101px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/everton.CkPHQEMd.svg"
                                alt="Everton"
                                class="w-[55px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/billie-jean-king-cup.DFDdNsJj.svg"
                                alt="Billie Jean King Cup"
                                class="w-[101px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/juventude.DYj6mKZE.svg"
                                alt="Juventude"
                                class="w-[49px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/team-secret.BH46cAxZ.svg"
                                alt="Team Secret"
                                class="w-[70px]"
                            />
                        </li>
                        <li>
                            <img
                                src="https://stake.com/_app/immutable/assets/enyimba-fc.Bk1l78K5.svg"
                                alt="Enyimba FC"
                                class="w-[58px]"
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <FirstComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'first component'
                    )
                }
            />
            <SecondComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'second component'
                    )
                }
            />
            <ThirdComponent />
            <FourthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'fourth component'
                    )
                }
            />
            <FifthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'fifth component'
                    )
                }
            />
            <SixthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'sixth component'
                    )
                }
            />
            <SeventhComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'seventh component'
                    )
                }
            />

            <NinthComponent />

            <EighthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'eighth component'
                    )
                }
            />

            <FAQs />
        </main>
    )
}

export default MainContent
