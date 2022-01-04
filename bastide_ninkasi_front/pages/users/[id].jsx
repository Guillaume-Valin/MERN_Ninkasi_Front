import axios from "axios"
import { useRouter } from "next/router"

export const getServerSideProps = async (ctx) => {
    const {params: {id}} = ctx

    const {data: user} = await axios.get(`http://localhost:5000/api/user/${id}`)

    return {
        props: {
            user
        }
    }
}

const User = ({user}) => {
    console.log(user);
    return user.nomClient ? (
        <div>{user.nomClient}</div>
    ) : null
}

export default User