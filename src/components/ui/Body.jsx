import { useEffect, useState } from "react";
// import { restro } from "../../config";
import filterData from "./FilterData";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import "./Body.css"; 
import { AllResto_Web_Listing } from "../../config";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    async function getRestro() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879042&lng=73.7373439&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        
        // const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;         // Night data


        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }

    useEffect(() => {
        getRestro();
    }, []);

    if (!allRestaurants) return null;

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchTxt, allRestaurants);
                    setFilteredRestaurants(data);
                }}>
                    Search
                </button>
            </div>

            <div className="restaurant-grid" data-testid="res-list">
                {filteredRestaurants && filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    ))
                ) : (
                    <p className="no-restaurant">No restaurant found</p>
                )}
            </div>
        </>
    );
}

export default Body;



























// import { useEffect, useState } from "react";
// import { restro } from "../../config";
// import filterData from "./FilterData";
// import Shimmer from "./Shimmer";
// import RestaurantCard from "./RestaurantCard";
// import { Link } from "react-router-dom";

// const Body = () => {
//     const [allRestaurants, setAllRestaurants] = useState([]);
//     // const [restaurant, setRestaurant] = useState(restro.restaurants);
//     const [searchTxt, setSearchTxt] = useState("");
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//     // const [searchClicked, setSearchClicked] = useState("false");



//     // function filterData(searchTxt, restaurants) {
//     //     return restaurants.filter((res)=>
//     //         res.name.includes(searchTxt)
//     //     );
//     // }

//     // function filterData(searchText, restaurants) {
//     //     return restaurants.filter((res) =>
//     //       res.name.toLowerCase().includes(searchText.toLowerCase())
//     //     );
//     //   }

//     // async function getRestro(){
//     //     const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879042&lng=73.7373439&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     //     const json = await data.json();
//     //     const names = json?.data?.cards[4]?.data?.gridElements?.infoWithStyle?.restaurants.map(
//     //         (restaurant) => restaurant.info.name
//     //     );
//     //                 // const names = json?.data?.cards[4]?.data?.gridElements?.infoWithStyle?.restaurants
//     //     console.log(names)

//     // }


//     // useEffect(()=>{
//     //     getRestro();    
//     // },[]);

//     async function getRestro() {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879042&lng=73.7373439&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         const json = await data.json();

//         // Extract restaurant names from card 4, ensure the structure matches
//         const restaurantNames = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
//             (restaurant) => restaurant.info.name
//         );
//         console.log("Restaurant Names:", restaurantNames);
//         // setRestaurant(restaurantNames);

//         // setAllRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         // setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         // console.log("ALL Restaurants:", json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



//                 // Extract restaurants
//                 const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//                 setAllRestaurants(restaurants);
//                 setFilteredRestaurants(restaurants);
//                 console.log("ALL Restaurants:",+restaurants);
//     }

//     useEffect(() => {
//         getRestro();
//     }, []);

//     if (!allRestaurants) return null;



//     return allRestaurants.length === 0 ? (<Shimmer />) : (
//         <>




//             <div className="search-container">
//                 <input
//                     type="text"
//                     className="search-input"
//                     placeholder=" Search"
//                     value={searchTxt}

//                     // onChange={(e)=>{
//                     //     setshopName(e.target.value)
//                     // }}

//                     onChange={(e) => {
//                         setSearchTxt(e.target.value)
//                     }}

//                 />



//                 <button className="search-btn" onClick={() => {
//                     const data = filterData(searchTxt, allRestaurants);     // imported from other file
//                     setFilteredRestaurants(data);

//                     // if(searchClicked === "false"){        ///toggle feature
//                     //     setSearchClicked("true");
//                     // }else{
//                     //     setSearchClicked("false");
//                     // }
//                 }}>
//                     Search
//                 </button>


//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-testid="res-list">
//                 {filteredRestaurants && filteredRestaurants.length > 0 ? (
//                         filteredRestaurants.map((restaurant) => (
//                             <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
//                                 <RestaurantCard {...restaurant.info} /> {/* Pass restaurant info to RestaurantCard */}
//                             </Link>
//                         ))
//                     ) : (
//                         <p className="col-span-full text-center">No restaurant found</p>
//                     )}
//                 </div>



//             </div>


//         </>
//     );
// }

// export default Body;


// {/* <h5>Filtered Restaurants:</h5>        ALSO WORKS
// <div className="restaurant-list">
//     {restaurant.map((res, index) => (
//         <div key={index}>
//             <h3>{res.name}</h3>
//             <p>{res.cuisine}</p>
//             {/* Add any other restaurant details you want to display */}




{/* <h5>Filtered Restaurants:</h5>
<div className="restaurant-list">
    {Array.isArray(restaurant) && restaurant.length > 0 ? (
        restaurant.map((res) => (
            <div key={res.id}>
                <h3>{res.name}</h3>
                <p>{res.cuisine_type}</p>
                <p>{res.address}</p>
                <p>{res.neighborhood}</p>

//                 {/* Add any additional restaurant details you want to display */}
//             </div>
//         ))
//     ) : (
//         <p>No restaurants available.</p>
//     )}
// </div> */}