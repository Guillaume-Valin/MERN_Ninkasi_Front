import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head';

const Layout = (props) => {
console.log(props);

    return(
        <div>
            <Head>
                {props.title && <title>{props.title}</title>}
            </Head>
            <Header user={props.user}/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}

export default Layout