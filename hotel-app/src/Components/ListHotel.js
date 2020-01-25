import react from "react";
import data from "./data";
class ListHotel extends React.Component {
constructor(){
    super(props);
    this.state= {
        HotelName:'',
        Rating:'',
        Address:''
    }

}
render(){
    return (
        <div>
            <div className="hotel-image">
                <img src="" alt="HotelImage"/>
            </div>
            <ul>
                {
                    
                }
                <li>

                </li>
            </ul>
        </div>
    )
}
}
export default ListHotel;