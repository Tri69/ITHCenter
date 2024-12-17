import { useCallback, useReducer, useState } from "react";

const PackagePulsa = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <InputPulsa />
        </>
    )
}
export default PackagePulsa;

const InputPulsa = () => {
   
    function logicNumber(n) {
        
      
    }
    function ReducerNumber(state, action) {
      let logic =  logicNumber(state.number);
    }
    const [state, dispatch] = useReducer(ReducerNumber, {number: 0})
    function InputGetNumber(event) {
        dispatch("cari", { number: event.target.value })
    }

    return (
        <>
            <div>
                <center>
                    <div class="shadow-md shadow-zinc-300 number-input">
                        <input
                            type="number"
                            onClick={() => InputGetNumber()}
                            inputMode="numeric"
                            
                            placeholder="0812345678"
                            class="input"
                        />
                        <button
                            onClick={() => logic()}
                            class="cari-nomer"
                            placeholder="Cari"
                        >Cari</button>
                    </div>
                </center>
            </div>
        </>
    )
}
