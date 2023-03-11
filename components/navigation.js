import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import {useRouter} from "next/router";

export default function Navigation({children}) {
    const router = useRouter()

    let pageName;
    if (router.asPath === "/") {
        pageName = null;
    } else {
        pageName = router.asPath.substring(1).toUpperCase()
    }


    return <>
        <Head>
            <title> {pageName ? pageName + ' · ' : ""} Sandbox Studio </title>
        </Head>
        <Navbar/>
        {children}
        <Footer/>
    </>
}