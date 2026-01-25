export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="container">
      {/* Intro */}
      <section className="aboutIntro">
        <h2 className="categoryTitle">About</h2>
        <p className="categoryHint">
          Hi! I’m Yacine. Welcome to my little corner of the internet.
          <br />
          I post art, projects, and a bit of gaming content. Feel free to explore!
        </p>
      </section>

      {/* Video + Discord */}
      <section className="aboutSplit">
        <div className="aboutCard">
          <h3 className="aboutH3" align="center">Watch my latest video:</h3>
          <p className="aboutMuted">
          <br/>Get a look at my channel, I post regularly!
          <br/> You will find video games clips, art processes, let's plays and more.
          <br/> Don&apos;t forget to like and subscribe!
          <br/>
          <br/>
          </p>

          <div className="embed">
            {/* Replace the src with your YouTube embed link */}
            <iframe
              className="embed__iframe"
              src="https://www.youtube.com/embed/X_Tv8WAxsxE?start=41"
              title="Latest video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="aboutCard">
          
        

          <div className="embed embed--tall">
            {/* Replace this with YOUR Discord widget iframe embed */}
            <iframe
              className="embed__iframe"
              src="https://discord.com/widget?id=883083171829276703&theme=dark"
              title="Discord"
              frameBorder="0"
              allowTransparency="true"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </div>
        </div>
      </section>

      {/* Find me online */}
      <section className="aboutCenter">
        <h3 className="aboutBigTitle">Find me Online!</h3>
        <p className="aboutMuted">
          A sub, a challenge or even a friend request would make me happy! Click the links below to see my profiles.
        </p>
      </section>

      <section className="linkTiles">
        <a className="linkTile" href="https://www.chess.com/member/yacinelakka7" target="_blank" rel="noreferrer">
          <div className="linkTile__bg" style={{ backgroundImage: `url(${base}about/chess.webp)` }} />
          <div className="linkTile__overlay">
            {/* <div className="linkTile__label">Chess</div> */}
          </div>
        </a>

        <a className="linkTile" href="https://psnprofiles.com/erasersleeves" target="_blank" rel="noreferrer">
          <div className="linkTile__bg" style={{ backgroundImage: `url(${base}about/playstation.webp)` }} />
          <div className="linkTile__overlay">
            
          </div>
        </a>

        <a className="linkTile" href="https://steamcommunity.com/id/yacinejeager/" target="_blank" rel="noreferrer">
          <div className="linkTile__bg" style={{ backgroundImage: `url(${base}about/steam.webp)` }} />
          <div className="linkTile__overlay">
            {/* <div className="linkTile__label">Steam</div> */}
          </div>
        </a>

        <a className="linkTile" href="https://www.twitch.tv/erasersleeves" target="_blank" rel="noreferrer">
          <div className="linkTile__bg" style={{ backgroundImage: `url(${base}about/twitch.png)` }} />
          <div className="linkTile__overlay">
            {/* <div className="linkTile__label">Twitch</div> */}
          </div>
        </a>
      </section>
    </div>
  );
}
