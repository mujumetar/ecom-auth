
import { showAlert } from "./alertSlice";


export const postDataApi = (cartData, auth) => {

    if(!auth){
        return;
    }
    return async (dispatch) => {
        const fetchData = async () => {
           
            const res = await fetch(`https://e-com-e88fa-default-rtdb.firebaseio.com/cart.json`,
                {                    
                    method: "PUT",
                    body: JSON.stringify({cartData})
                })
            const data = await res.json();
            return data;
        }
        try {
            dispatch(showAlert({message:"Pending...!", color:"amber", status:true}))
            const data = await fetchData()
            console.log(data)
            dispatch(showAlert({ message: "Added Successfully", color: "green", status: true }))
        } catch (error) {
            console.error(error)
            dispatch(showAlert({ message: "Something Went Wrong", color: "red", status: true }))
        }
    }
}