import React from 'react'
import { Inscrit } from '../component/Contact'
import FormulaireContact from '../component/Contact/Inscription/FormulaireContact.tsx'


export async function getStaticProps() {
  return {
    props: {
      title: 'La Bastide de Ninkasi - Inscription',
      description: 'suhfsdfbsdf'
    }
  }
}

export default function Contact({title, description}) {
  return (
    <div>
      
      <FormulaireContact/>
    </div>
  )
}


