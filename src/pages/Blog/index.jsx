/*import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import articlesData from '../../data/articles.json';
import './blog.css';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Trier les articles par date (du plus récent au plus ancien)
        const sortedArticles = articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sortedArticles);
    }, []);

    return (
        <>
            <Helmet>
                <title>Blog d'Armor Web Creations | Articles et conseils en développement web</title>
                <meta 
                    name="description" 
                    content="Explorez le blog d'Armor Web Creations pour des articles sur le développement web, les tendances actuelles et des conseils pratiques pour améliorer votre présence en ligne." 
                />
                <meta 
                    name="keywords" 
                    content="développement web, création de sites internet, conseils web, tendances web, hébergement web, optimisation SEO, sites vitrines, e-commerce, articles, blog Armor Web Creations" 
                />
            </Helmet>
            <section className="blog-container">
                <h1 className="blog-title">Le blog d'Armor Web Creations</h1>
                {articles.length === 0 ? (
                    <p>Chargement des articles...</p>
                ) : (
                    articles.map((article) => (
                        <article key={article.id} className="blog-article">
                            <div className="box-title-id">
                                <span className="article-number">{article.id}</span>
                                <h2 className="article-title">{article.title}</h2>
                            </div>
                            <p className="article-date">{article.date}</p>
                            <p className="article-intro">{article.intro}</p>
                            {article.content.map((paragraph, index) => (
                                <p key={index} className="article-content">{paragraph}</p>
                            ))}
                            <p className="article-sign">{article.sign}</p>
                        </article>
                    ))
                )}
            </section>
        </>    
    );
}

export default Blog;*/


import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import articlesData from '../../data/articles.json';
import './blog.css';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Trier les articles par date (du plus récent au plus ancien)
        const sortedArticles = articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sortedArticles);
    }, []);

    // Gestion de l'ouverture/fermeture d'un article
    const toggleArticle = (id) => {
        setArticles(articles.map(article => 
            article.id === id ? { ...article, expanded: !article.expanded } : article
        ));
    };

    return (
        <>
            <Helmet>
                <title>Blog d'Armor Web Creations | Articles et conseils en développement web</title>
                <meta 
                    name="description" 
                    content="Explorez le blog d'Armor Web Creations pour des articles sur le développement web, les tendances actuelles et pratiques pour améliorer votre présence en ligne." 
                />
                <meta 
                    name="keywords" 
                    content="développement web, création de sites internet, conseils web, tendances web, hébergement web, optimisation SEO, sites vitrines, e-commerce, articles, blog Armor Web Creations" 
                />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/blog" />
                {/* Open Graph */}
                <meta property="og:title" content="Blog | Armor Web Creations" />
                <meta property="og:description" content="Découvrez les dernières tendances et conseils en création de sites web sur le blog d'Armor Web Creations." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/blog-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/blog" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog | Armor Web Creations" />
                <meta name="twitter:description" content="Découvrez les dernières tendances et conseils en création de sites web sur le blog d'Armor Web Creations." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/blog-page.png" />
            </Helmet>
            <section className="blog-container">
            <i className="fas fa-blog icon-blog-intro"></i>
                <h1 className="blog-title">Le blog d'Armor Web Creations</h1>
                {articles.length === 0 ? (
                    <p>Chargement des articles...</p>
                ) : (
                    articles.map((article) => (
                        <article 
                            key={article.id} 
                            className={`blog-article ${article.expanded ? 'expanded' : ''}`} 
                            onClick={() => toggleArticle(article.id)}
                        >
                            <div className="box-title-id">
                                <span className="article-number">{article.id}</span>
                                <h2 className="article-title">{article.title}</h2>
                            </div>
                            <p className="article-date">{article.date}</p>
                            <p className="article-intro">{article.intro}</p>
                            <div className="read-more">
                                {article.expanded ? '✖' : 'Lire +++'}
                            </div>
                            <div className="article-content">
                                {article.content.map((paragraph, index) => (
                                    <p key={index} className="article-content">{paragraph}</p>
                                ))}
                            </div>
                            <p className="article-sign">{article.sign}</p>
                        </article>
                    ))
                )}
            </section>
        </>
    );
}

export default Blog;
