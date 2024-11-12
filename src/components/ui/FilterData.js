function filterData(searchTxt, restaurants) {
    
    return restaurants.filter((res) =>
        res?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase()) ?? false
    );
}

export default filterData;
