import style from "./Calc.module.css"
import Menu from "./components/Menu"

import { useEffect, useState } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [resp, setResp] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDiv, setRespDiv] = useState()

    // useEffect(()=> {
    //     if( numero1 !== undefined && numero2 !== undefined){
    //         setResp(parseFloat(numero1) + parseFloat(numero2))
    //         setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //         setRespMult(parseFloat(numero1) * parseFloat(numero2))
    //         setRespDiv(parseFloat(numero1) / parseFloat(numero2))
    //     }
    // }, [numero1, numero2])

    const handleCalc = () => {
        const num1 = parseFloat(numero1)
        const num2 = parseFloat(numero2)

        if(!isNaN(num1) && !isNaN(num2)){
            setResp(num1 + num2)
            setRespSub(num1 - num2)
            setRespMult(num1 * num2)
            setRespDiv(num1 / num2)
        }
        // else{
        //     setResp("Insira números válidos")
        //     setRespSub("Insira números válidos")
        //     setRespMult("Insira números válidos")
        //     setRespDiv("Insira números válidos")
        // }
    }

    const handleSoma = () => setResp(parseFloat(numero1) + parseFloat(numero2))
    const handleSubtracao = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
    const handleMulti = () => setRespMult(parseFloat(numero1) * parseFloat(numero2))
    const handleDiv = () => setRespDiv(parseFloat(numero1) / parseFloat(numero2))

    return(
        <div className={style.sectionCalc}>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                    <div className={style.wrapInputsCalc}>
                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o primeiro número" 
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                        />
                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o segundo número" 
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                        />
                        <button onClick={handleCalc}>Calcular tudo</button>
                    </div>
                    <div className={style.wrapInputsCalc}>
                        <div className={style.wrapEach}>
                            <h1>Soma</h1>
                            {!isNaN(resp) && <p>{resp.toFixed(2)}</p>}
                            <button onClick={handleSoma}>Calcular soma</button>
                        </div>
                        <div className={style.wrapEach}>
                            <h1>Subtração</h1>
                            {!isNaN(respSub) && <p>{respSub.toFixed(2)}</p>}
                            <button onClick={handleSubtracao}>Calcular subtração</button>
                        </div>
                        <div className={style.wrapEach}>
                            <h1>Multiplicação</h1>
                            {!isNaN(respMult) && <p>{respMult.toFixed(2)}</p>}
                            <button onClick={handleMulti}>Calcular multiplicação</button>
                        </div>
                        <div className={style.wrapEach}>
                            <h1>Divisão</h1>
                            {!isNaN(respDiv) &&  <p>{respDiv.toFixed(2)}</p>}
                            <button onClick={handleDiv}>Calcular divisão</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
