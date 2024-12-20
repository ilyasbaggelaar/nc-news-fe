import { useState } from "react";
import ArticleList from "../Components/ArticleList"


function Topics() {
    const [selectedTopic, setSelectedTopic] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");

    const topics = ["coding", "football", "cooking"];

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };

    return (
        <div>
            <h1 className="welcome">Welcome to NC-News</h1>

            <div className="controls">
                <label htmlFor="topic-select">Select a topic:</label>
                <select id="topic-select" value={selectedTopic} onChange={handleTopicChange}>
                    <option value="">All Topics</option>
                    {topics.map((topic) => (
                        <option key={topic} value={topic}>
                            {topic.charAt(0).toUpperCase() + topic.slice(1)}
                        </option>
                    ))}
                </select>

                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select" value={sortBy} onChange={handleSortChange}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comments</option>
                </select>

                <label htmlFor="order-select">Order:</label>
                <select id="order-select" value={order} onChange={handleOrderChange}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>

            <ArticleList topic={selectedTopic} sort_by={sortBy} order={order} />
        </div>
    );
}

export default Topics;