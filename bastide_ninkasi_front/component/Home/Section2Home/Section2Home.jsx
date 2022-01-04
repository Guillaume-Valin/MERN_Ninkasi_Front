/* eslint-disable @next/next/no-img-element */
import React from 'react'


const Section2Home = (props) => {


    return (
        // <section>
        //     <div className="mb-5">
        //         <h2 className="text-center text-red-900 text-3xl font-bold py-5">Nos Sélections</h2>
        //         <div className="flex container mx-auto">
        //             <div className="flex flex-col items-center w-1/3 px-2">
        //                 <h3 className="text-red-900 text-2xl pb-4">Vins</h3>
        //                 <div><img src="/images/verre-vin.jpg" alt="verre de vin rouge" /></div>
        //                 <div className="bg-couleur-vin bg-no-repeat bg-cover text-white py-5 px-5 leading-8 text-center rounded-bl-perso">
        //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
        //                     </p>
        //                     <div className="mt-5 mb-2 text-xl text-white font-bold">
        //                         <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-red-900" href="#">Découvrir</a>
        //                     </div>
        //                 </div>
                        
        //             </div>
        //             <div className="flex flex-col items-center w-1/3 px-2">
        //                 <h3 className="text-red-900 text-2xl pb-4">Champagnes</h3>
        //                 <div><img src="/images/verre-champ.jpg" alt="verre de champagne" /></div>
        //                 <div className="bg-couleur-champagne bg-no-repeat bg-cover text-white py-5 px-5 leading-8 text-center">
        //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
        //                     </p>
        //                     <div className="mt-5 mb-2 text-xl text-white font-bold">
        //                         <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-red-900" href="#">Découvrir</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col items-center w-1/3 px-2">
        //                 <h3 className="text-red-900 text-2xl pb-4">Spiritueux</h3>
        //                 <div><img src="/images/verre-whisky.jpg" alt="verre de whisky" /></div>
        //                 <div className="bg-couleur-whisky bg-no-repeat bg-cover text-white py-5 px-5 leading-8 text-center rounded-br-perso">
        //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
        //                     </p>
        //                     <div className="mt-5 mb-2 text-xl text-white font-bold">
        //                         <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-red-900" href="#">Découvrir</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section>
            <div className="mb-6 lg:mb-14">
                <h2 className="text-rouge text-3xl font-bold text-center mb-3">Nos Sélections</h2>
                <div className="md:flex lg:container lg:mx-auto">
                    <div className="sm:flex sm:items-center sm:flex-col md:mx-2 yomstyle">
                        <h3 className="text-rouge text-xl text-center mb-3">Vins</h3>
                        <div className="mx-1 md:m-0"><img src="/images/verre-vin.jpg" alt="verre de vin rouge" /></div>
                        <div className="bg-couleur-vin bg-no-repeat bg-cover py-4 max-w-yom-sm mx-1 sm:w-full lg:rounded-bl-perso">
                            <p className="hidden lg:flex lg:text-white lg:text-center lg:py-2 lg:px-2 lg:leading-6 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
                            </p>
                            <div className="text-xl text-white font-bold text-center my-2">
                                <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-rouge" href="#">Découvrir</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="sm:flex sm:items-center sm:flex-col md:mx-2 yomstyle">
                        <h3 className="text-rouge text-xl text-center my-3 md:my-0 md:mb-3">Champagnes</h3>
                        <div className="mx-1 md:m-0"><img src="/images/verre-champ.jpg" alt="verre de vin rouge" /></div>
                        <div className="bg-couleur-champagne bg-no-repeat bg-cover py-4 max-w-yom-sm mx-1 sm:w-full">
                            <p className="hidden lg:flex lg:text-white lg:text-center lg:py-2 lg:px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
                            </p>
                            <div className="text-xl text-white font-bold text-center my-2">
                                <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-rouge" href="#">Découvrir</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="sm:flex sm:items-center sm:flex-col md:mx-2 yomstyle">
                        <h3 className="text-rouge text-xl text-center my-3 md:m-0 md:mb-3">Spiritueux</h3>
                        <div className="mx-1 md:m-0"><img src="/images/verre-whisky.jpg" alt="verre de vin rouge" /></div>
                        <div className="bg-couleur-whisky bg-no-repeat bg-cover py-4 max-w-yom-sm mx-1 sm:w-full lg:rounded-br-perso">
                            <p className="hidden lg:flex lg:text-white lg:text-center lg:py-2 lg:px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus perspiciatis, magni repudiandae, doloribus porro tempore voluptatibus iusto exercitationem modi esse sint.
                            </p>
                            <div className="text-xl text-white font-bold text-center my-2">
                                <a className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-white hover:text-rouge" href="#">Découvrir</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2Home