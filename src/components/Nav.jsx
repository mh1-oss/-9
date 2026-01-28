import React, { useEffect, useState } from 'react'
import "../App.css"

const Nav = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=4")
            .then(response => response.json())
            .then(data => setArticles(data.photos))
    }, [])
    return (
        <div className="block">
            <div className="line-text container">
                <div className="line"></div>
                <div className="text">
                    <p>We share our thoughts on design</p>
                </div>
            </div>
            <div className="grid container">
                {articles.map(article => (
                    <div className="card" key={article.id}>
                        <div className="card-image image1">
                            <img src={article.url} alt={article.title} />
                        </div>
                        <div className="card-text">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Nav