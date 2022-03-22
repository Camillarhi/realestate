import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from './navBar';
import Footer from './footer'
export default function Layout({ childern }) {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <NavBar />
                </header>
                <main>
                    {childern}
                </main>
                <footer>
                   
                   <Footer />
                </footer>
            </Box>
        </>
    );
}
