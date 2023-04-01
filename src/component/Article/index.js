import React from "react";
import './article.css';

export const Article = ({ header, description, children}) => {
    return (
        <article className="article">
            <h2 className="article_header">
                { header }
            </h2>
            <h3 className="article_description">
                { description }
            </h3>
            <div className="article_content">
                { children }
            </div>
        </article>
    );
}
 
export default Article;