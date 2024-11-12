import fetch from 'node-fetch';

export default async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Restaurant ID is required' });
    }

    try {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=${id}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};
