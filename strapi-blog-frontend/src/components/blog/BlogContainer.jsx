import './blog.css';
import useGetArticle from '../../hooks/useGetArticle';
import useArticleSummary from '../../hooks/useArticleSummary';
import BlogCard from './BlogCard';
import ArticleView from './ArticleView';

const baseUrl = 'http://localhost:1337';

export default function BlogContainer() {
  const { articles, error } = useGetArticle();
  const { summary, isLoading, fetchSummary } = useArticleSummary();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!articles) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const articleId = Number(params.id);
  const articleToShow = articles.find((article) => article.id === articleId);

  if (articleToShow) {
    return (
      <ArticleView
        articleMarkdown={articleToShow.attributes.articleMarkdown}
        title={articleToShow.attributes.title}
      />
    );
  }

  return (
    <section id="blog-1540">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Strapi-Blog</span>
          <h2 className="cs-title">Feast your eyes on our blog section!</h2>
        </div>

        {isLoading && (
          <div className="summary-container">
            <p>Loading your article summary</p>
          </div>
        )}
        {summary && (
          <div className="summary-container">
            <p>{summary}</p>
          </div>
        )}
        <ul className="cs-card-group">
          {articles.map((article, i) => {
            return (
              <BlogCard
                title={article.attributes.title}
                authorName={article.attributes.author.data.attributes.name}
                authorImage={`${baseUrl}${article.attributes.author.data.attributes.profileImage.data.attributes.url}`}
                articleId={article.id}
                coverImage={`${baseUrl}${article.attributes.coverImage.data.attributes.url}`}
                date={article.attributes.dateAdded}
                getArticleSummary={() =>
                  fetchSummary(article.attributes.articleMarkdown)
                }
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
