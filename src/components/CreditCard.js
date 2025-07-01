import "./components.css"
function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props    
    return(
        <div style={{background:bgColor, color:color}} className="creditcard">
            <img src={type==="Visa"? "https://e7.pngegg.com/pngimages/308/426/png-clipart-visa-logo-credit-card-visa-logo-payment-visa-blue-text-thumbnail.png":
            "https://w7.pngwing.com/pngs/693/688/png-transparent-logo-mastercard-scalable-graphics-font-mastercard-text-logo-bitmap-thumbnail.png"
            } alt="type" className="logocard"/>
            <span className="cardnumber">**** **** **** {number.slice(-4)}</span><br/>
            <span>Expires {expirationMonth}/{expirationYear} {bank}</span><br/>
            <span>{owner}</span>
        </div>
    )
}
export default CreditCard