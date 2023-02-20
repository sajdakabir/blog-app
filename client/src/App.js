
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg" />
        </div>

        <div className="texts">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="info">
            <a className="author">Sajda Kabir</a>
            <time>2023-2-20 23:53</time>

          </p>
          <p className="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quaerat eius expedita cum, nobis a velit omnis repellat quas consectetur ut vitae quos.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg" />
        </div>

        <div className="texts">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="info">
            <a className="author">Sajda Kabir</a>
            <time>2023-2-20 23:53</time>

          </p>
          <p className="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quaerat eius expedita cum, nobis a velit omnis repellat quas consectetur ut vitae quos.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
