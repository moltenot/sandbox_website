import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Navigation({children}) {
    return <>
    <Head>
        <title> Sandbox Studios </title>
    </Head>
    <Navbar/>
    {children}
    <Footer/>
    </>
}