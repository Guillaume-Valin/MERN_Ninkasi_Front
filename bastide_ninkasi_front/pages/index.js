import React from 'react'
import { Section1Home, Section2Home, Section3Home } from '../component/Home'
import Hero from '../component/Home/Hero'


export async function getStaticProps() {
  return {
    props: {
      title: 'La Bastide de Ninkasi - Accueil',
      description: 'suhfsdfbsdf'
    }
  }
}

export default function Home({title, description}) {
  return (
    <div>
      <Hero/>
      <Section1Home/>
      <Section2Home/>
      <Section3Home/>
    </div>
  )
}
