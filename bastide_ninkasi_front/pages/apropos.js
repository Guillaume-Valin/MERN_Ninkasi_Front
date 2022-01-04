import React from 'react'
import { Section1, Section2, Section3 } from '../component/Apropos'
import SlideHero from '../component/Apropos/Hero/SlideHero'




export async function getStaticProps() {
  return {
    props: {
      title: 'La Bastide de Ninkasi - A propos',
      description: 'suhfsdfbsdf'
    }
  }
}

export default function Apropos({title, description}) {
  return (
    <div>
       <SlideHero/>
       <Section1/>
       <Section2/>
       <Section3/>
    </div>
  )
}