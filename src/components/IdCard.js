import "./components.css"
function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props
 return(
    <section className="card">
        <img src={picture} alt="imagen"/><br/>
        <div>
            <span><b>First Name:</b> {firstName}</span><br/>
            <span><b>Last Name:</b> {lastName}</span><br/>
            <span><b>Gender:</b> {gender}</span><br/>
            <span><b>Height:</b> {height}</span><br/>
            <span><b>Birth:</b> {birth.toDateString()}</span>
        </div>


    </section>
 )
}

export default IdCard