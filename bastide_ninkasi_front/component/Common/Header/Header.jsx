/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCoffee, faCross, faShoppingBag, faTimes, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import axios from 'axios';



const Header = (props) => {

    const {user} = props
    console.log(user);

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     const getUser = async () => {
    //         await axios.get('http://localhost:5000/api/user/618be5274c279eeaf41d94b6').then((data) => setUser(data)).catch((err) => console.error(err))
    //     }
    //     getUser()
    // })

    // console.log(user);

    const [classNames, setClassNames] = useState('changeClass')

    const handleClasses = (props) => {
        
        classNames === "changeClass" ? setClassNames('newClass') : classNames === "newClass" ? setClassNames('changeClass') : setClassNames(classNames);
        ;
    }
    return (
        <>
        {classNames === "newClass" && <div onClick={handleClasses} className="absolute h-full w-full bg-black bg-opacity-0 top-0 left-0 z-20 block"></div>}
        <header className="relative shadow-lg">
            <nav className="text-white absolute w-full md:static md:text-rouge md:flex">
                <div className="px-10 text-lg md:text-base py-4 md:w-1/4 xl:text-xl logoAnim logoAnim2"><Link href="/"><img src="./images/logo-ninkasi2" alt="logo" /></Link></div>
                {/* <div><p>{user?.nomClient ? user?.nomClient : null}</p></div> */}
                <div className="hidden md:flex md:py-4 md:text-base md:w-2/4 md:justify-around md:-mx-6 md:px-5 xl:text-xl">
                    <div className="hover:underline menu">
                        <Link className="underline" href="/produit">Nos produits</Link><FontAwesomeIcon icon={faCaretDown} />
                        <ul className="hidden transition duration-500 px-3 py-4 rounded-lg">
                            <li className="hover:underline text-base"><Link href="/produit">Vins</Link></li>
                            <li className="hover:underline py-2 text-base"><Link href="/produit">Champagnes</Link></li>
                            <li className="hover:underline text-base"><Link href="/produit">Spiritueux</Link></li>
                        </ul>
                    </div>
                    <div className="hover:underline">Actualités</div>
                    <div className="hover:underline"><Link href="/apropos">A propos</Link></div>
                </div>
                <div className="hidden md:flex md:px-10 md:py-4 md:text-base md:w-1/4 md:mr-2 xl:text-xl">
                    <div className="inline hover:underline xl:mx-4" onClick={handleClasses}>Connexion</div><FontAwesomeIcon onClick={handleClasses} className="md:mt-1 md:mx-2 lg:mx-4 xl:mx-0 xl:mr-4" icon={faUsers} />

{/* ------------------------Module de connexion -----------------------------*/}

                    <div className={`${classNames} z-50 `}>
                        <form className="" action="#" method="POST">
                            <fieldset className="bg-rouge rounded shadow-lg"><legend className="text-center text-2xl text-black"></legend>
                            <div className="flex flex-col w-4/5 mx-auto my-3 text-white text-base">
                                <label className="mb-1" htmlFor="pseudoMail">E-mail ou Pseudo :</label>
                                <input className="border-b border-r border-rouge pl-1 outline-none focus:ring-2 focus:ring-rouge" type="text" name="pseudoMail" id="pseudoMail" placeholder="john.doe@contact.fr"/>
                            </div>
                            <div className="flex flex-col w-4/5 mx-auto my-3 text-white text-base">
                                <label htmlFor="mdp">Mot de passe :</label>
                                <input className="border-b border-r border-rouge pl-4 outline-none focus:ring-2 focus:ring-rouge" type="password" name="mdp" id="mdp" placeholder="****"/>
                            </div>
                            <div className="w-4/5 mx-auto text-center mb-3 transform hover:scale-x-110"><input className="bg-transparent text-white border-b-2 border-r-2 px-2 py-1 border-rouge" type="button" value="Se connecter" /></div>
                            <div className="mr-4 mx-auto w-4/5 pb-4 text-center" onClick={handleClasses} ><a className="hover:underline text-blue-200" href="#"><Link href="/contact">S'inscrire ?</Link></a></div>
                            </fieldset>
                        </form>
                    </div>
{/* ---------------------------------Fin module de connexion------------------------------- */}

                    
                    <div className="inline hover:underline xl:mx-4">Panier</div><FontAwesomeIcon className="md:mt-1 md:mx-2 lg:mx-4 xl:mx-0" icon={faShoppingBag} />
                </div>
                {/*------------------------ Menu burger -------------------------------*/}
                <div className="lg:hidden">
                <input className="md:hidden" type="checkbox" name="" id="menu-toggler" />
                <span className="text-3xl md:hidden relative " id="menu-bars">
                    <FontAwesomeIcon className="ouvre" icon={faBars} />
                    <FontAwesomeIcon className="hidden ferme mt-1" icon={faTimes} />
                </span>
                <div className="menuBurger text-rouge py-2 px-4 leading-8 text-lg hidden absolute bg-white opacity-80 top-2 right-16 rounded-xl md:hidden">
                    <p className=""><Link href="/produit">Nos produits</Link></p>
                    <p>Actualités</p>
                    <p><Link href="/apropos">A propos</Link></p>
                    <p>Connexion</p>
                    <p>Panier</p>
                </div>
                </div>

            </nav>


        </header></>
    )
}

export default Header