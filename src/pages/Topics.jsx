import { useState } from "react";
import ArticleList from "../Components/ArticleList"

function Topics() {

const [selectedTopic, setSelectedTopic] = useState("coding")
 const topics = ["coding", "football", "cooking"];

 const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value)
 }

    return(
        <div>
        <h1 className="welcome">Welcome to NC-News</h1>
        <div className="dropdown-menu">
        <label htmlFor="topic-select">Select a topic:</label>
        <select
            id="topic-select"
            value={selectedTopic}
            onChange={handleTopicChange}
            >
            {topics.map((topic) => (
                <option key={topic} value={topic}>
                    {topic}
                </option>
            ))}
        </select>
        </div>
        <ArticleList topic={selectedTopic}/>
        </div>
    )
}

export default Topics