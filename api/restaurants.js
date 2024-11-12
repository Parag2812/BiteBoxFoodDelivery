import fetch from 'node-fetch';

export default async (req, res) => {
    try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879042&lng=73.7373439&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};
