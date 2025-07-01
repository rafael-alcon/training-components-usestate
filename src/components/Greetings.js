function Greetings(props){
    const {lang, children}= props
    return(
    <>
       <p>{lang==="es" ? "Hola": lang==="de"? "Hallo": lang==="fr" ? "Bonjour": lang==="en"? "Hello" : "Hola"} {children}</p>
    </>
    )
}
export default Greetings