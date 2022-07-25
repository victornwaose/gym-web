export const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "1533e9e944mshb233b7d636f4fd3p1caa39jsnb9f3cb7ec8f5",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
