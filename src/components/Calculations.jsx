const Calculations = () => {
    return (
        <div className="calculations">
            <div className="amount-parent">
                <div className="amount-cont">
                    <span className="amount-label">
                        <p>Tip Amount</p>
                        <p>/ person</p>
                    </span>
                    <span className="amount">0.00</span>
                </div>
                <div className="amount-cont">
                    <span className="amount-label">
                        <p>Total</p>
                        <p>/ person</p>
                    </span>
                    <span className="amount">0.00</span>
                </div>
            </div>
            <button id="reset">RESET</button>
        </div>
    ) 
}

export default Calculations;