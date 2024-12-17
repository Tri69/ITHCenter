import { useCallback, useEffect, useState } from "react";
import CheckOut from "./CheckOut";

const Card = () => {
    //State Get  Fetch API
    const [dataPulsa, setDataPulsa] = useState([]);
    async function FetchData() {
        const resultData = await fetch('./HargaPulsaXL.json');
        const getResult = await resultData.json();
        const getResultData = getResult
        console.log(getResult);
        setDataPulsa(getResultData);
    }
    useEffect(() => {
        FetchData()
    }, [])

    //State Get Data User Check
    const [datas, setDatas] = useState('');
    const getData = (das) => {
        return setDatas(das)
    }


    return (

        <>
            <div class="container-input">
                <center>
                    <br></br>
                    <h1>Pulsa</h1>
                    <br />
                    <div class="container-package">
                        <div class="grid grid-cols-1 gap-3 colom md:grid-cols-2 lg:grid-cols-2">
                            {dataPulsa.map((da) => (
                                <div class="card-package shadow-md shadow-zinc-300" id="card-produk" onClick={() => getData(da)} >
                                    <ul class="Harga-produk" >
                                        <li>{da.operator}</li>
                                        <li><b>{da.pulsa}</b></li>
                                        <li>Harga:<b> {da.harga}</b></li>
                                    </ul>
                                </div>)
                            )
                            }
                        </div>
                    </div><br />
                    {
                        dataPulsa.length < 0 ? <div> </div> : <CheckOut DataHarga={datas} />
                    }
                </center>
            </div>
        </>
    )
}
export default Card;