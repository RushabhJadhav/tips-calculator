import { useContext } from "react";
import { UserContext } from "../App";

const Calculations = () => {
    const {tip, total, setTip, setTotal, setBill, setPeople} = useContext(UserContext);

    const handleReset = () => {
        setTip(0)
        setTotal(0)
        setBill(0)
        setPeople(0)
    }

    return (
        <div className="calculations">
            <div className="amount-parent">
                <div className="amount-cont">
                    <span className="amount-label">
                        <p>Tip Amount</p>
                        <p>/ person</p>
                    </span>
                    <span className="amount">{tip.toFixed(2)}</span>
                </div>
                <div className="amount-cont">
                    <span className="amount-label">
                        <p>Total</p>
                        <p>/ person</p>
                    </span>
                    <span className="amount">{total.toFixed(2)}</span>
                </div>
            </div>
            <button id="reset" onClick={handleReset}>RESET</button>
        </div>
    ) 
}

export default Calculations;