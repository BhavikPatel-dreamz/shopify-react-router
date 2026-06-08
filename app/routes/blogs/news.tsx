import type { Route } from "../+types/home";
import "../../styles/news.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News & Blog - The House Of Rare" },
    {
      name: "description",
      content: "Latest updates, fashion stories, style guides and announcements from The House Of Rare.",
    },
  ];
}

export default function NewsBlogPage() {
  const articles = [
    {
      id: 1,
      title: "Step into Style: Best Sneakers for Men in 2026",
      excerpt: "Step into Style: Best Sneakers for Men in 2026. 2026 is a year of bringing back trends that were not just fashion-forward but functional. Just like ...",
      image: "https://cdn.shopify.com/s/files/1/0752/6435/articles/ChatGPT_Image_May_8_2026_12_20_04_PM_5f665e2b-fded-4e1c-9013-7ac24ac52bdb.png?v=1778223921",
      link: "/blogs/news/best-sneakers-for-men-in-2026",
      date: "May 8, 2026"
    },
    {
      id: 2,
      title: "Cracking the Color Code by Rare Rabbit: Spring Summer 2024's Menswear style guide.",
      excerpt: "Spring has sprung, and with it comes a vibrant shift in the menswear landscape. Gone are the days of muted winter tones; it's time to embrace the s...",
      image: "https://cdn.shopify.com/s/files/1/0752/6435/articles/blog_5.jpg?v=1717244471",
      link: "/blogs/news/cracking-the-color-code-by-rare-rabbit-spring-summer-2024s-menswear-style-guide",
      date: "June 1, 2024"
    },
    {
      id: 3,
      title: "A Garden Of Time: Hits, Misses, and Blooms at the 2024 Met Gala",
      excerpt: "The 2024 Met Gala transported us to a fantastical \"Garden of Time,\" a theme that bloomed with possibilities for historical and futuristic interpret...",
      image: "https://cdn.shopify.com/s/files/1/0752/6435/articles/Untitled-1_67a966d7-709b-4190-801b-23d07a52e825.jpg?v=1767082339",
      link: "/blogs/news/a-garden-of-time-hits-misses-and-blooms-at-the-2024-met-gala",
      date: "May 6, 2024"
    }
  ];

  return (
    <main className="news-blog-page">
      <section className="section section--spacingNormal">
        <div className="container">
          <header className="section-header section-header--center">
            <h2 className="section-header__heading">BLOG POSTS</h2>
          </header>

          <div className="article-list-wrapper">
            <div className="article-list">
              {articles.map((article) => (
                <div key={article.id} className="grid__cell">
                  <article className="article-item">
                    <a className="article-item__image-wrapper" href={article.link}>
                      <div className="aspect-ratio">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="article-item__image"
                          loading="lazy"
                        />
                      </div>
                    </a>
                    <div className="article-item__content">
                      <h2 className="article-item__title">
                        <a href={article.link}>{article.title}</a>
                      </h2>
                      <p className="article-item__excerpt">{article.excerpt}</p>
                      <a href={article.link} className="article-item__link">
                        Read more
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="section-footer">
            <a href="/blogs/news" className="button button--primary">
              View all articles
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}