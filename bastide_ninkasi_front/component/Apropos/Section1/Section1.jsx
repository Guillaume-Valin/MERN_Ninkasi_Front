/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image'
import img1 from '../../../public/images/raisin-blanc-detoure-600x434-v3.png'

const Section1 = () => {
    return (
        <section className="lg:mx-32 lg:relative section lg:mt-10 xl:-mb-32">
            
            <div className="bg-red-200 effetDiamant2 absolute right-44 xl:right20 top-24 opacity-50 hidden xl:block"></div>
            <div className="lg:container lg:mx-auto lg:flex lg:w-full lg:items-center xl:justify-between lg:h-5/6">
                
                <div className="lg:w-10/12 lg:px-10 ">
                    <h2 className="text-center lg:text-left text-3xl font-bold text-rouge my-5">Une sélection de grand cru pour vous</h2>
                    <p className="text-rouge text-center lg:text-left px-3 xl:leading-8 lg:ml-auto lg:px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum atque culpa minus. Eius debitis hic voluptatem, voluptas facilis odio quidem, veniam, sunt ut eos accusamus facere corporis praesentium iste!
                    Nemo quibusdam suscipit neque veniam voluptatibus voluptas accusantium ipsam harum nisi! Quia dicta sapiente rerum, repellat voluptatum nihil minimeffetDiamant effetDiamant effetDiamant a sint cupiditate ullam assumenda doloribus eaque labore sequi mollitia pariatur facilis!
                    Odio veniam eos at libero deleniti expedita praesentium natus eaque, dicta mollitia fugit illum sed minus sint voluptatem similique impedit dolores animi enim. Accusamus sed commodi et ducimus quam nostrum?
                    </p>
                </div>
                <div className="lg:w-2/12 lg:mr-5 lg:mt-16 ">
                    <img className="opacity-90 hidden lg:block" src="./images/raisin-rouge.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Section1;