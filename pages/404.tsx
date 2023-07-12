import Head from "next/head"
import Layout from "../components/layout"

export default function Custom404() {
    return (<Layout>
        <Head>
            <title>Opps</title>
        </Head>
        <section>
            <h1>404 - Page Not Found</h1>
        </section>
        
    </Layout>);
}