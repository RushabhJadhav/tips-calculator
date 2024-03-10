import { useContext } from "react";
import { UserContext } from "../App";


const Buttons = () => {
    const [setTip] = useContext(UserContext)

    const handleCustom = (e) => {
        setTip(e.target.value)
    }

    return (
        <ul>
            <li>
                <input type="button" value="5%" />
            </li>
            <li>
                <input type="button" value="10%" />
            </li>
            <li>
                <input type="button" value="15%" />
            </li>
            <li>
                <input type="button" value="25%" />
            </li>
            <li>
                <input type="button" value="50%" />
            </li>
            <li>
                <input type="number" placeholder="custom" onChange={handleCustom} />
            </li>
        </ul>
    )
}

export default Buttons;