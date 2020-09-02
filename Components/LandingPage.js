import Link from 'next/link'

const divStyle ={
    backgroundColor : "purple",
    margin : "0 auto",
    width : "50%",
    padding : "10px",
    textAlign : "center",
    marginBottom : "20px",

    borderRadius : "20px",
    boxShadow : "rgba(0,0,0,0.8) 0 0 10px"
}


const LandingPage = () => {
    return ( 
    <div>
        <div style={divStyle}><p>Watch youtube videos linked by anyone online</p>
        <img src="/logo.png" alt="logo" width="90%"/>
        <Link href="/session"><div onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "purple"}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "purple"; e.currentTarget.style.color = "white"}} style={{width : "70px", marginRight :"50%", marginLeft:"50%", cursor : "pointer"}}>Start</div></Link></div>
    </div> );
}
 
export default LandingPage;