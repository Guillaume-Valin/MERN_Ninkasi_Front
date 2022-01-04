/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


const Hero = (props) => {

    return (
        <section>
            <div className="md:relative">
                <div><img src="/images/image-header-1920-1080.jpg" alt="paysage mer vignes" /></div>
                <div className="hidden yomstyle md:block md:absolute md:bottom-1/4 md:w-full md:text-center md:text-lg lg:text-xl xl:bottom-1/3 xl:text-2xl"><a className="md:text-white md:border-b-2 md:border-r-2 md:border-white md:px-1 md:py-1 md:hover:border-rouge" href="#"><Link href="/produit">Accéder à la boutique</Link></a></div>
            </div>
        </section>
    )
}
export default Hero