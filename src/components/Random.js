function Random(props){
    const {min, max}=props
    const randomizer = (min,max)=>{
        return Math.floor(Math.random() * (max - min) + min)
    }
    return(
        <>
            <p>Random value between {min} and {max} =&gt; {randomizer(min,max)}</p>
        </>
    )
}
export default Random