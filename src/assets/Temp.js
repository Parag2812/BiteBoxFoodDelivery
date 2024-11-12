import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, Resto_Info_URL } from "../../config";
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(Resto_Info_URL + id);
        const json = await data.json();
        setRestaurant(json.data?.cards[2]?.card?.card?.info);

        const dishes = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        if (dishes) {
            setMenu(dishes);
        }
    }

    return (
        <div className="restaurant-menu">
            <div className="restaurant-details">
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="Restaurant" />
                <div className="restaurant-info">
                    <h1>{restaurant?.name}</h1>
                    <p>Location: {restaurant?.locality}, {restaurant?.areaName}</p>
                    <p>City: {restaurant?.city}</p>
                    <p>Cost for Two: {restaurant?.costForTwoMessage}</p>
                    <p>Cuisines: {restaurant?.cuisines?.join(", ")}</p>
                </div>
            </div>

            <div className="dish-list">
                <h2>Recommended Dishes</h2>
                {menu.length > 0 ? (
                    menu.map((item, index) => (
                        <div key={index} className="dish-item">
                            <h3>{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                            <p className="price">Price: ₹{item.card.info.price / 100}</p>
                        </div>
                    ))
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;

























// MINE


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL, Resto_Info_URL } from "../../config";
// import './RestaurantMenu.css';



// const RestaurantMenu = () => {

//     const { id } = useParams();
//     const [restaurant, setRestaurant] = useState({});
//     const [menu, setMenu] = useState({});

//     useEffect(() => {
//         getRestaurantInfo();
//     }, []);

//     async function getRestaurantInfo() {
//         const data = await fetch(Resto_Info_URL + id);
//         const json = await data.json();
//         console.log(json.data);
//         console.log("name  " + json.data?.cards[2]?.card?.card?.info?.name)

//         setRestaurant(json.data?.cards[2]?.card?.card?.info)
//         console.log("DISH NAME:" + json.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);


//         const dishes = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

//         if (dishes) {
//             setMenu(dishes);
//         }

//     }

//     <p>Restaurant id - {id}</p>

//     return (
//         <div className="restaurant-menu">
//         <div className="restaurant-details">
//             <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="Restaurant" />
//             <div className="restaurant-info">
//                 <h1>{restaurant?.name}</h1>
//                 <p>Location: {restaurant?.locality}, {restaurant?.areaName}</p>
//                 <p>City: {restaurant?.city}</p>
//                 <p>Cost for Two: {restaurant?.costForTwoMessage}</p>
//                 <p>Cuisines: {restaurant?.cuisines?.join(", ")}</p>
//                 <p>Restaurant id - {id}</p>
//             </div>
//         </div>

//         <div className="dish-list">
//                 <h2>Recommended Dishes</h2>
//                 {menu.length > 0 ? (
//                     menu.map((item, index) => (
//                         <div key={index} className="dish-item">
//                             <h3>{item.card.info.name}</h3>
//                             <p>{item.card.info.description}</p>
//                             <p className="price">Price: ₹{item.card.info.price / 100}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="loading">Loading...</p>
//                 )}
//             </div>
//         </div>
//     );

// }

// export default RestaurantMenu;  















<div className="guest-login">
<h3>Guest Login</h3>
<p>Email: guest@food.com</p>
<p>Password: guestPassword</p>
</div>









