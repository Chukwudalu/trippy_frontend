class ResHandler{
    constructor(res, errMsg){
        this.response = res;
        this.errorMessage = errMsg
    }

    displayErrorMsg(){
        if(this.errorMessage){
            return (
                <div className="resMessage errMessage">
                    <p>{this.errorMessage}</p>
                </div>
            )
        }
        return
    }

    displaySuccessMsg(){
        if(this.response){
            return(
                <div className="resMessage successMessage">
                    <p>{this.response}</p>
                </div>
            )
        }
        
    }
}

export default ResHandler