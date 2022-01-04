/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
    civiliteClient: string,
    nomClient: string,
    prenomClient: string,
    pseudoClient: string,
    emailClient: string,
    passwordClient: string,
    telephoneClient: number,
    adresseClient: string,
    compAdresseClient: string,
    codePostalClient: number,
    villeClient: string,
    checkmail: boolean,
}

const FormulaireContact = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data) => {
        console.log(data);

        await axios.post('http://localhost:5000/api/user/register', data,{headers: {'Accept':'application/json','Content-Type':'application/json'}}).then((res) => console.log(res)).catch((err) => console.error(err))
    }

    
    return(
        <section className="my-10 lg:container mx-auto shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="" name="formContact" id="formContact">
                <fieldset className="border border-rouge mx-5 lg:mx-0 rounded"><legend className="ml-3 text-rouge text-2xl lg:text-center">Formulaire de contact</legend>
                    <div className="w-3/4 mx-auto text-center mt-7 md:text-left md:mx-auto lg:w-5/6 lg:mx-auto">
                        <div>
                        <input className="btnRadio" type="radio" {...register("civiliteClient", {required:'Veuillez choisir votre civilité'})} id="monsieur" value="monsieur"/>
                        <label className="mr-3 lg:ml-4" htmlFor="monsieur">Monsieur</label>
                        <input className="btnRadio" type="radio" {...register("civiliteClient", {required:'Veuillez choisir votre civilité'})} id="madame" value="madame"/>
                        <label className="mx-3" htmlFor="madame">Madame</label>
                        {errors.civiliteClient && <p className="w-1/2 mx-4 mt-2 text-rouge italic text-sm">{errors.civiliteClient.message} </p>}
                        </div>
                        
                        
                    </div>
                
                <div className="lg:flex lg:w-5/6 lg:mx-auto">
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="nom">Nom* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("nomClient", {required:'Veuillez saisir votre nom'})} id="nom" placeholder="Nom" />
                        {errors.nomClient && <p className="italic text-sm">{errors.nomClient.message} </p>}
                    </div>
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="prenom">Prénom* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("prenomClient", {required:'Veuillez saisir votre prénom'})} id="prenom" placeholder="Prénom" />
                        {errors.prenomClient && <p className="italic text-sm">{errors.prenomClient.message} </p>}
                    </div>
                </div>
                <div className="lg:flex lg:w-5/6 lg:mx-auto">
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="adresse">Votre adresse* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("adresseClient", {required:'Veuillez saisir votre adresse'})} id="adresse" placeholder="N°, Rue/Avenue..."/>
                        {errors.adresseClient && <p className="italic text-sm">{errors.adresseClient.message} </p>}
                    </div>
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="compAdresse">Complément d'adresse :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("compAdresseClient")} id="compAdresse" placeholder="Bat, Etage, N°porte ..." />
                    </div>
                </div>
                <div className="lg:flex lg:w-5/6 lg:mx-auto">
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">                
                        <label className="hidden lg:block font-bold" htmlFor="codePostal">Code postal* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="number" {...register("codePostalClient", {valueAsNumber:true, minLength: 5, maxLength: 5, required:'Veuillez saisir votre code postal'})} id="codePostal" placeholder="Code postal" />
                        {errors.codePostalClient && <p className="italic text-sm">{errors.codePostalClient.message} </p>}
                    </div>
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="ville">Ville* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("villeClient", {required:'Veuillez saisir votre ville'})} id="ville" placeholder="Ville"/>
                        {errors.villeClient && <p className="italic text-sm">{errors.villeClient.message} </p>}
                    </div>
                </div>
                <div className="lg:flex lg:w-5/6 lg:mx-auto">
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="email">E-mail* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="email" {...register("emailClient", {required:'Veuillez saisir votre adresse e-mail'})} id="email" placeholder="john.doe@contact.fr"/>
                        {errors.emailClient && <p className="italic text-sm">{errors.emailClient.message} </p>}
                    </div>
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="telephone">Téléphone* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="number" {...register("telephoneClient", {valueAsNumber:true, maxLength : {value:10, message:"Le numéro ne doit pas excéder 10 chiffres"}, minLength: {value:10, message:"Votre numéro doit comporter 10 chiffres minimum"}, required:'Veuillez saisir votre numéro de téléphone'})} id="telephone" placeholder="0612345678"/>
                        {errors.telephoneClient && <p className="italic text-sm">{errors.telephoneClient.message} </p>}
                    </div>
                </div>
                <div className="lg:flex lg:w-5/6 lg:mx-auto">
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="pseudo">Pseudonyme* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="text" {...register("pseudoClient", {required:'Veuillez saisir votre pseudo'})} id="pseudo" placeholder="Pseudonyme"/>
                        {errors.pseudoClient && <p className="italic text-sm">{errors.pseudoClient.message} </p>}
                    </div>
                    <div className="flex flex-col text-rouge my-6 w-3/4 mx-auto lg:mx-5">
                        <label className="hidden lg:block font-bold" htmlFor="mdp">Mot de passe* :</label>
                        <input className="border-b border-rouge pl-3 py-1 outline-none focus:ring-2 focus:ring-rouge" type="password" {...register("passwordClient", {required:'Veuillez saisir votre mot de passe'})} id="mdp" placeholder="Saisissez un mot de passe"/>
                        {errors.passwordClient && <p className="italic text-sm">{errors.passwordClient.message} </p>}
                    </div>
                </div>
                <p className="text-sm italic -mt-5 mb-5 w-3/4 lg:w-5/6 mx-auto lg:px-5">Les champs avec * sont obligatoires</p>
                <div className="flex w-3/4 mx-auto lg:w-5/6 lg:px-5">
                    <input className="mr-2 w-5 h-5" type="checkbox" {...register("checkmail", {required:'Merci de cocher la case de notre politique de confidentialité'})} id="checkmail" />
                    <p className="mb-5">En cochant cette case, vous acceptez notre <a className="text-blue-500 underline" href="#"><Link href="/rgpd">politique de confidentialité</Link></a> 
                    </p>
                    {errors.checkmail && <p className="italic text-sm">{errors.checkmail.message} </p>}
                </div>
                    <div className="w-5/6 mx-auto text-right mb-5 mt-3">
                        <input className=" bg-transparent border-b-2 border-r-2 border-rouge font-bold text-lg px-2 py-1 hover:bg-rouge hover:text-white text-rouge lg:mx-5 " type="submit" value="Envoyer" />
                    </div> 
                    <div className="mr-4 pb-4 text-center"><a className="underline text-blue-500" href="#">Déjà inscrit ?</a></div>
                </fieldset>              
            </form>
            
        </section>
    )
}

export default FormulaireContact