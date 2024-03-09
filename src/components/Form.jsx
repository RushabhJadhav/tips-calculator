import Buttons from "./Buttons";
import Calculations from "./Calculations";

const Form = () => {
    return (
        <div className="form-cont">
            <form>
                <div className="bill">
                    <label>Bill</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Select Tip %</label>
                    <Buttons />
                </div>
                <div className="bill">
                    <label>Number of People</label>
                    <input type="number" />
                </div>
            </form>
            <Calculations />
        </div>
    )
}

export default Form;