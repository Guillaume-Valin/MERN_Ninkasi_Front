/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section1Home = (props) => {


    return(

<section className="md:bg-section1-home md:bg-no-repeat md:bg-contain my-5 lg:mb-14">
<div className="lg:container mx-auto">
    <h2 className="text-rouge text-xl font-bold text-center my-2 xl:text-left lg:text-3xl">Un savoir faire ancestral</h2>
    <div className="text-rouge lg:flex items-center">
        <div className="mx-1 px-1 text-center xl:text-left xl:w-3/4 xl:px-32 lg:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat neque adipisci nobis, repudiandae iste similique optio officia, laboriosam animi ut ratione in nostrum saepe labore veritatis. Atque, quo odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt architecto cumque iusto aliquid, deserunt nostrum, accusamus expedita, veniam officia fugit! Cumque quam et eveniet, fugit modi esse delectus ullam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sed! Delectus corrupti, asperiores porro distinctio soluta ducimus inventore velit unde deleniti aut temporibus nam facilis autem quas eaque dolores earum! </div>
        <div className="hidden xl:flex xl:w-1/4 xl:pr-2">
            <img className="" src="/images/cave-tonneau.jpg" alt="Une cave à vin" />
        </div>
    </div>
    <div className="yomstyle flex justify-center mt-3 text-2xl text-red-900 font-bold xl:pl-80">
        <a className="border-b-2 border-r-2 border-rouge py-1 px-3" href="#">En savoir +</a>
    </div>
</div>
</section>
    )
}

export default Section1Home