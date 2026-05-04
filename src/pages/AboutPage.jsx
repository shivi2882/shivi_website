// Photo asset: public/images/about-me.jpeg (sync from images and files/image4.jpeg)
export function AboutPage() {
  const photoSrc = process.env.PUBLIC_URL + "/images/about-me.jpeg";

  return (
    <main className="about-page page-transition">
      <article className="about-shell glass-card">
        <div className="about-grid">
          <div className="about-copy">
            <h1 className="about-heading">About Me</h1>
            <p className="about-body">
              Hello! My name is Shivi Shrivastava. I am currently attending the
              University of Texas at Austin in the Canfield Business Honors
              Program. I am interested in developing technology that helps those in
              underserved communities — and with my experience in business and
              economics, I hope to implement the technologies I build through
              business partnerships and public policy.
            </p>
            <p className="about-body">
              I am also interested in music (I play the double bass in a jazz
              band!), travelling, and hiking. Please reach out to{" "}
              <a className="about-link" href="mailto:shivi2882@gmail.com">
                shivi2882@gmail.com
              </a>{" "}
              with any questions — I love collaborating on new projects and meeting
              new people!
            </p>
          </div>
          <div className="about-photo">
            <img
              src={photoSrc}
              alt="Shivi Shrivastava"
              className="about-photo-img"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
