import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, Resto_Info_URL } from "../../config";
import Cart from "./cart";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    const [visibleItems, setVisibleItems] = useState(12);
    const [cartItems, setCartItems] = useState([]); // Track items in the cart

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=" + id, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',  // Add this header
                    'Origin': 'https://bite-box-food-app.vercel.app/'  // Replace with your actual site URL
                }
            });
            const json = await response.json();
            console.log("Fetched Restaurant: ", json.data);
            setRestaurant(json.data?.cards[2]?.card?.card?.info);

            const dishCards = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            if (dishCards && Array.isArray(dishCards)) {
                const dishes = dishCards
                    .filter(card => card.card?.card?.itemCards)
                    .flatMap(card => card.card.card.itemCards);
                setMenu(dishes);
            } else {
                setMenu([]);
            }

        } catch (error) {
            console.error("Failed to fetch restaurant info:", error);
        }
    }

    const handleSeeMore = () => {
        setVisibleItems(prev => prev + 15);
    };

    const addToCart = (dish) => {
        setCartItems((prevCartItems) => [...prevCartItems, dish]);
    };

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
                    <p>Restaurant id - {id}</p>
                </div>
            </div>

            <div className="dish-list">
                <h2>Recommended Dishes</h2>
                {menu && menu.length > 0 ? (
                    menu.slice(0, visibleItems).map((item, index) => (
                        <div key={index} className="dish-item">
                            <h3>{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                            <p className="price">Price: ₹{item.card.info.price / 100}</p>
                            <button 
                                onClick={() => addToCart(item)} 
                                className="add-to-cart-button">
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="loading">Loading...</p>
                )}

                {visibleItems < menu.length && (
                    <button onClick={handleSeeMore} className="see-more-button">
                        See More
                    </button>
                )}
            </div>

            <Cart cartItems={cartItems} />
        </div>
    );
};

export default RestaurantMenu;
