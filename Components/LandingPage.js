import Link from 'next/link'

const divStyle ={
    backgroundColor : "purple",
    margin : "0 auto",
    width : "50%",
    padding : "50px",
    textAlign : "center",
    marginBottom : "50px",

    borderRadius : "20px",
    boxShadow : "rgba(0,0,0,0.8) 0 0 10px"
}


const LandingPage = () => {
    return ( <div>
        <div style={divStyle}><p>Watch youtube videos suggested by your viewers</p></div>
        <button onClick={() => {
            fetch(`/api/test${"maxim"}`).then(d => {console.log(d)})
        }}>Testing this</button>
        <div style={divStyle}><img src="/logo.png" alt="logo" width="500px"/> <Link href="/session"><div onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "purple"}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "purple"; e.currentTarget.style.color = "white"}} style={{width : "70px", marginRight :"50%", marginLeft:"50%", cursor : "pointer"}}>Start</div></Link></div>
    </div> );
}
 
export default LandingPage;