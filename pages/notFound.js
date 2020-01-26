import TopNav from "../Components/TopNav"


const divStyle ={
    color : "red",
    backgroundColor : "purple",
    margin : "0 auto",
    width : "50%",
    padding : "80px",
    textAlign : "center",
    marginBottom : "50px",
    marginTop : "150px",
  
    borderRadius : "20px",
    boxShadow : "rgba(0,0,0,0.8) 0 0 10px"
  }

const NotFound = () => {
    return ( <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
        <TopNav />
        <div style={divStyle}>Session not found</div>
    </div> );
}
 
export default NotFound;