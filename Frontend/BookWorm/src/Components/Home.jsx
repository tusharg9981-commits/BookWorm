import "./Home.css";
import BookFilters from "./BookFilters";
import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <h1>Discover Your Next Adventure</h1>

        <SearchBar />

        <div className="home-trending">
          <span>Trending:</span>
          <span className="chip">#SciFi</span>
          <span className="chip">#Audiobooks</span>
          <span className="chip">#BestSellers</span>
        </div>
      </section>

      {/* CONTENT */}
      <div className="home-content">

        {/* FILTERS */}
        <BookFilters />

        {/* GRID */}
        <section className="book-grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="book-card" key={i}>
              <div className="book-img"></div>
              <h4>The Silent Echo</h4>
              <p>by Elena Ferrante</p>
              <div className="price">$14.99</div>
              <button>Buy Now</button>
            </div>
          ))}
        </section>
      </div>

    </div>
  );
}
