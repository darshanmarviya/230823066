function Suggestion(props) {
    return (
        <>
            <div style={{ height: "50px", width: "300px", border:"0px" , padding:"0px", marginLeft:"50px"}}>
                <img
                    src={props.suggestionPic}
                    alt="image"
                    height="50px" 
                    width="50px"
                    style={{ float: "left", border:"0px", borderRadius:"16px"}}
                />
                    <p style={{fontSize:"20px",paddingTop:"9px",fontWeight:"normal",marginLeft:"80px"}}>
                        {props.suggestionName}
                    </p>
                
            </div>
        </>
    );
}
export default Suggestion;