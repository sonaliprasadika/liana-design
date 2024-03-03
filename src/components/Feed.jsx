import { useEffect, useState } from "react";

const Feed = () => {
  const feed_url = "https://www.lianatech.com/resources/blog.rss";
  const [feedItems, setFeedItems] = useState([]);

  const fetchFeed = async () => {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(feed_url)}`
      );
      const data = await response.json();
      console.log(data);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(
        data.contents,
        "application/rss+xml"
      );
      console.log(xmlDoc);
      const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => ({
        title: item.querySelector("title").textContent,
        link: item.querySelector("link").textContent,
        description: item.querySelector("description").textContent,
        // You can include other fields from the RSS feed as needed
      }));
      console.log(items);
      setFeedItems(items);
    } catch (error) {
      console.error("Error fetching or parsing RSS feed:", error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div>
      <h2>Feed section</h2>
      {feedItems.map((item, index) => (
        <div key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
