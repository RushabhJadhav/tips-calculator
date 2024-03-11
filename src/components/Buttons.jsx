import { useContext } from "react";
import { UserContext } from "../App";


const Buttons = () => {
    const {setTip, bill, total, setTotal} = useContext(UserContext)

    const handleTips = (e) => {
        let tipNum = parseFloat(e.target.value)
        let perTip = (tipNum * bill) / 100;
        setTip(perTip)
        setTotal(parseFloat(bill) + perTip)
    }

    const handleCustomTips = (e) => {
        let customTip = parseFloat(e.target.value);
        if(customTip > 0 && customTip < 100) {
            setTip(customTip)
            setTotal(parseFloat(bill) + customTip)
        } else {
            alert("This number cannot be greater than 100 or smaller than 0")
        }
    }

    return (
        <ul>
            <li>
                <input type="button" value="5%" onClick={handleTips} />
            </li>
            <li>
                <input type="button" value="10%" onClick={handleTips} />
            </li>
            <li>
                <input type="button" value="15%" onClick={handleTips} />
            </li>
            <li>
                <input type="button" value="25%" onClick={handleTips} />
            </li>
            <li>
                <input type="button" value="50%" onClick={handleTips} />
            </li>
            <li>
                <input type="number" placeholder="custom" onChange={handleCustomTips} />
            </li>
        </ul>
    )
}

export default Buttons;