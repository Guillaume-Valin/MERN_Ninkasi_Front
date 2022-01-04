/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section3Home = (props) => {


    return (
        <section className="lg:container lg:mx-auto mb-10">
            <h2 className="text-rouge text-3xl font-bold text-center mb-10">Nos Promotions</h2>
            <div className="lg:flex">
                <div className="border-b-2 border-r-2 border-rouge mx-2 shadow-xl">
                    <div>
                        <h3 className="text-center text-2xl text-rouge mb-1 sm:text-3xl lg:mb-4">Chateau du Lort</h3>
                    </div>
                    <div className="flex">
                        <div className="">
                            <img src="/images/produit/chateau-du-lort.png" alt="bouteille de vin" />
                        </div>
                        <div className="text-right text-rouge flex flex-col items-right justify-around mr-4">
                            <p className="sm:text-2xl lg:text-xl">Grand cru classé</p>
                            <p className="text-2xl font-bold">1994</p>
                            <p className="sm:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="pt-2 text-3xl sm:text-5xl lg:text-3xl font-bold">19,90 €</p>
                            <div>
                                <button className="border-b-2 border-r-2 border-red-900 py-1 px-3 yomstyle font-bold mt-5 mb-2 text-xl sm:text-3xl lg:text-2xl">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 border-r-2 border-rouge mx-2 my-10 lg:my-0 shadow-xl">
                    <div>
                        <h3 className="text-center text-2xl text-rouge mb-1 sm:text-3xl lg:mb-4">Canard Duchêne</h3>
                    </div>
                    <div className="flex">
                        <div className="">
                            <img src="/images/produit/canard-duchene-leonie.png" alt="bouteille de champagne" />
                        </div>
                        <div className="text-right text-rouge flex flex-col items-right justify-around mr-4">
                            <p className="sm:text-2xl lg:text-xl">Millesimé</p>
                            <p className="text-2xl font-bold">2021</p>
                            <p className="sm:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="pt-2 text-3xl sm:text-5xl font-bold lg:text-3xl">24,90 €</p>
                            <div>
                                <button className="border-b-2 border-r-2 border-red-900 py-1 px-3 font-bold mt-5 mb-2 text-xl sm:text-3xl lg:text-2xl yomstyle">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 border-r-2 border-rouge mx-2 shadow-xl">
                    <div>
                        <h3 className="text-center text-2xl text-rouge mb-1 sm:text-3xl lg:mb-4">Bourbon Makers</h3>
                    </div>
                    <div className="flex">
                        <div className="">
                            <img src="/images/produit/bourbon-makers-v2.png" alt="bouteille de whisky" />
                        </div>
                        <div className="text-right text-rouge flex flex-col items-right justify-around mr-4">
                            <p className="sm:text-2xl lg:text-xl">Pur malt</p>
                            <p className="text-2xl font-bold">2011</p>
                            <p className="sm:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="pt-2 text-3xl sm:text-5xl font-bold lg:text-3xl">49,90 €</p>
                            <div>
                                <button className="border-b-2 border-r-2 border-red-900 py-1 px-3 font-bold mt-5 mb-2 text-xl sm:text-3xl lg:text-2xl yomstyle">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3Home