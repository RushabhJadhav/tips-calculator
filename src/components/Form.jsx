import { useContext } from "react";
import { UserContext } from "../App";
import Buttons from "./Buttons";
import Calculations from "./Calculations";

const Form = () => {

    const {bill, setBill, people, setPeople} = useContext(UserContext);

    const handleBillAmount = (e) => {
        setBill(e.target.value)
    }

    const handlePeopleNumber = (e) => {
        setPeople(e.target.value)
    }

    return (
        <div className="form-cont">
            <form>
                <div className="bill">
                    <label>Bill</label>
                    <input type="number" value={bill} onChange={handleBillAmount} />
                </div>
                <div className="btn-cont">
                    <label>Select Tip %</label>
                    <Buttons />
                </div>
                <div className="bill">
                    <label>Number of People</label>
                    <input type="number" value={people} onChange={handlePeopleNumber} />
                </div>
            </form>
            <Calculations />
        </div>
    )
}

export default Form;