import Layout from "../Layout/Layout";
import '../assets/Styles/Home.css';
import Menu from "../Components/HomePageComp/Menu";
import Header from "../Components/HomePageComp/Header";

const HomePage = () => {
    return (
        <>
            <Layout>
                <main class="main1"><br/><br/>
                    <div class="Caption">
                        <h1>Agen Pulsa Online Termurah<br/> di Pulau Jawa</h1><br />
                        <p>Agen Pulsa termurah dan flexsibel hanya di ITH Center</p>
                        <button class="bg-yellow-400 text-sm text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2">Get Started</button>
                        <button class="button">Promo</button>
                    </div><br /><br />
                </main>
                <div>
                   <Menu />
                </div>
                <div>
                    <Header/>
                </div>
            </Layout>
        </>
    )
}
export default HomePage;