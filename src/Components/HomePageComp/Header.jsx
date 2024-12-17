import '../../assets/Styles/Home.css'
const Header = () => {
    return (
        <>
            <div class="main-header px-30"><center>
                <h1>Alasan Memilih Kami</h1>
                <div class="grid grid-cols-2 gap-3 colom md:grid-cols-4 lg:grid-cols-4">
                    <div class="container-header">
                        <img src="/24jam.png" width="130" />
                        <div class="caption-header">
                            <h2>24 JAM</h2>
                            <p>
                                Lorem ipd tenetur maiores minima
                                modi autem veniam consequuntur!
                            </p>
                        </div>
                    </div>
                    <div class="container-header-active">
                        <img src="/murah.png" width="130" />
                        <div class="caption-header">
                            <h2>Jerjangkau</h2>
                            <p>
                                Lorem ipd tenetur maiores minima
                                modi autem veniam consequuntur!
                            </p>
                        </div>
                    </div>
                    <div class="container-header">
                        <img src="/secure.png" width="130" />
                        <div class="caption-header">
                            <h2>Transaksi Aman</h2>
                            <p>
                                Lorem ipd tenetur maiores minima
                                modi autem veniam consequuntur!
                            </p>
                        </div>
                    </div>
                    <div class="container-header">
                        <img src="location.png" width="130" />
                        <div class="caption-header">
                            <h2>Flexsibel</h2>
                            <p>
                                Lorem ipd tenetur maiores minima
                                modi autem veniam consequuntur!
                            </p>
                        </div>
                    </div>

                </div></center>
            </div>
        </>
    )
}
export default Header;