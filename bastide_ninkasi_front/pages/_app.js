import { Layout } from '../component/Common'
import '../styles/globals.css'
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import axios from 'axios';

function MyApp({ Component, pageProps, user }) {
  console.log(user);
  const {title} = pageProps
  console.log(title);
  return (
  <Layout title={title} user={user}>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

// MyApp.getInitialProps = async (ctx) => {

//   const {data: user} = await axios.get('http://localhost:5000/api/user/618be5274c279eeaf41d94b6')

//   return {
//       user
//     }
// }