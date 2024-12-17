import '../../assets/Styles/CheckOut.css';

const CheckOut = (props) => {
    let DataProps = props.DataHarga;
    let ope = DataProps.operator;
    let logi = ope;
    console.log();
    if (logi == "XL") {
        return (
            <>
                <center>
                <div class="container ">
                    <h3>Check Out</h3>
                    <ul class="flex justify-around ">
                        <li>
                            <select>
                                <option>Metode</option>
                                <option>Dana</option>
                                <option>Saldo Member</option>
                                <option>M-Banking</option>
                            </select>
                        </li>
                        <li>
                            Harga : {DataProps.harga}
                        </li>
                        <li>
                            Pulsa : {DataProps.pulsa}
                        </li>
                        <li>
                            <button>Bayar</button>
                        </li>
                    </ul>
                    <br></br>
                </div>
                </center>
            </>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }
}
export default CheckOut;