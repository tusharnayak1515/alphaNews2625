export const getNews = async (myApiKey,page,pageSize,category)=> {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${myApiKey}&category=${category}?page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
}