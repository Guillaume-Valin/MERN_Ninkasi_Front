/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Footer = (props) => {

    const anim = () => {
        let navLink = document.querySelectorAll('.reseau-soc div')

        navLink.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX -20;
                let attrY = e.offsetY -13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })

            link.addEventListener('mouseleave', () =>{
                link.style.transform = '';
            })
        })
    }


    return(
        <footer className="bg-img-footer-mob bg-no-repeat bg-center bg-cover lg:bg-img-footer lg:bg-no-repeat lg:bg-top lg:bg-cover">
            <div className="text-white">
                <div className="lg:flex lg:pt-32 xl:mx-40">
                    <div className="pt-32 lg:pt-0 lg:w-1/3">
                        <div className="py-6 flex flex-col items-center lg:py-0">
                            <p className="font-bold text-2xl mb-2">Nous contacter :</p>
                            <p className="">contact@bastideninkasi.com</p>
                            <p className="">+33 6.75.12.45.98</p>
                            <p className="">Route de la joie 83999 Modération</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl lg:mt-7">Suivez notre actualité :</p>
                            <div className="flex mr-3 mt-4 reseau-soc">
                                <div onMouseOver={anim} className="transition duration-1000 ease-in-out "><img src="/images/facebook-40px.png" alt="logo facebook" /></div>
                                <div onMouseOver={anim} className="transition duration-1000 ease-in-out px-5"><img src="/images/twitter-40px.png" alt="logo twitter" /></div>
                                <div onMouseOver={anim} className="transition duration-1000 ease-in-out"><img src="/images/instagram-40px.png" alt="logo instagram" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 lg:mt-0 lg:w-1/3">
                        <p className="font-bold text-2xl mb-2">Nos Produits :</p>
                        <ul className="">
                            <li className="hover:underline">Vins</li>
                            <li className="lg:py-2 hover:underline">Champagnes</li>
                            <li className="hover:underline">Spiritueux</li>
                            <li className="lg:py-2 hover:underline">Nouveautés</li>
                            <li className="hover:underline">Promotions</li>
                        </ul>
                    </div>

                    <div className="mt-10 flex flex-col items-center lg:mt-0 lg:w-1/3">
                        <p className="font-bold text-2xl mb-2">Newsletter :</p>
                        <div className="">
                            <input className="px-2 py-2 rounded-lg" type="email" name="email" id="email" placeholder="john.doe@email.fr" size="29" required />
                        </div>
                        <div className="">
                            <button className="border-b-2 border-r-2 border-white py-1 px-3 hover:bg-rouge hover:text-white font-bold my-6 text-xl sm:text-3xl lg:text-2xl">Envoyer</button>
                        </div>
                        <div className="flex mx-6 pb-10 lg:pb-32">
                            <input className="mr-2 h-5 w-5" type="checkbox" name="checkmail" id="checkmail" />
                            <p className="mb-5">En cochant cette case, vous acceptez notre <a className="text-blue-300 underline" href="#"><Link href="rgpd">politique de confidentialité</Link></a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-fond-bleu text-white">
                <div className="text-center py-4 lg:flex lg:justify-around">
                    <div className="lg:w-1/3">&copy; Copyright Guillaume Valin 2021</div>
                    <Link href="/rgpd" className="lg:w-1/3">Politique de confidentialité</Link>
                    <div className="lg:w-1/3">Conditions Générales</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer