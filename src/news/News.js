import React, { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../components/LoadingSpinner";

import styles from "./news.module.css";
import NewsItem from "./NewsItem";

const News = ({ category = "general", pageSize, apiKey, setProgress }) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const getNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1 className={styles.header}>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      {loading && <LoadingSpinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingSpinner />}
      >
        <div className={styles.news_container}>
          {articles &&
            articles.map((news) => {
              return (
                <NewsItem
                  title={news.title ? news.title.slice(0, 50) : "No Title"}
                  key={news.title}
                  description={
                    news.description ? news.description.slice(0, 80) : "No Description"
                  }
                  imageUrl={news.urlToImage}
                  newsUrl={news.url}
                />
              );
            })}
        </div>
      </InfiniteScroll>
    </Fragment>
  );
};

export default News;
