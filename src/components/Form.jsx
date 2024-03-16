import { useContext } from "react";
import { UserContext } from "../App";
import Buttons from "./Buttons";
import Calculations from "./Calculations";

const Form = () => {

    const {bill, setBill, people, setPeople, total, setTotal, totalTip, setTotalTip} = useContext(UserContext);

    const handleBillAmount = (e) => {
        let inputVal = e.target.value;
        if(inputVal >= 0) {
            setBill(inputVal)
            setTotal(inputVal)
        }
    }

    const handlePeopleNumber = (e) => {
        let numOfPeople = e.target.value;
        let calcTotal = bill / numOfPeople;
        setPeople(numOfPeople)
        setTotal(calcTotal)
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