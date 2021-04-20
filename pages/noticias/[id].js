import React from 'react';
import Layout from "../../components/Layout/layout";
import { useRouter } from "next/router";

const Noticias = () => {

    const router = useRouter();

    const { query: { id } } = router;

    return ( 
        <Layout>
            <h1> Hola pagina nueva </h1>
        </Layout>
     );
}
 
export default Noticias;