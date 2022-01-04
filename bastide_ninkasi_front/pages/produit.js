/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import { SliderApropos } from '../component/Apropos'
import axios from 'axios';
import Image from 'next/image';



export async function getStaticProps() {
  return {
    props: {
      title: 'La Bastide de Ninkasi - Produits',
      description: 'suhfsdfbsdf'
    }
  }
}



export default function Produits({title, description}) {

  const [produit, setProduit] = useState([])

    useEffect(() => {
        const getProduit = async () => {
            await axios.get('http://localhost:5000/api/produit/').then(({data}) => setProduit(data)).catch((err) => console.error(err))
        }
        getProduit()
      }, [setProduit])
      
      console.log(produit);

  return (
    
    <div className="lg:container lg:mx-auto lg:my-10  lg:flex flex-wrap justify-center">
      {produit && produit.map((p, i) => (
        <>
      <div className="border-b-2 border-r-2 border-rouge mx-2 shadow-md w-1/4 my-4">
                    <div>
                        <h3 key={i} className="text-center text-2xl text-rouge mb-1 sm:text-3xl lg:mb-4">{p.nomProduit}</h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <Image key={i} src={`/images/produit/${p.imgProduit}.png`} alt={p.imgProduit} width={120} height={180}></Image>
                        </div>
                        <div className="text-right text-rouge flex flex-col items-right justify-between mr-6">
                            <p key={i} className="sm:text-2xl lg:text-xl">{p.provenance}</p>
                            <p key={i} className="text-2xl font-bold">{p.annee}</p>
                            <p key={i} className="sm:text-2xl lg:text-base">{p.volume} cl</p>
                            <p key={i} className="pt-2 text-3xl sm:text-5xl lg:text-3xl font-bold">{p.prix} €</p>
                            <div>
                                <button className="border-b-2 border-r-2 border-red-900 py-1 px-3 yomstyle font-bold mt-5 mb-2 text-xl sm:text-3xl lg:text-2xl">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
      ))} 
    </div>
  )

 
}