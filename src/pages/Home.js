import useWindowWidth from "../hooks/useWindowWidth";

const Home = ({ data }) => {
  const width = useWindowWidth();
  const sheet = data.find((sheet) => sheet.id === "content");
  if (!sheet) return null;
  const home = sheet.data[0]['Home'].split('\n').map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  })
  return (
    <section className="hero is-fullheight-with-navbar">
      {width >= 1023 ? (
        <div className="hero-body">
          <div style={{ fontSize: width < 1280 ? "2rem" : "3rem" }}>
            <div className="columns is-flex is-align-items-center">
              <div className="column is-2"></div>
              <div className="column is-3 is-flex is-align-items-center">
                <img src="https://github.com/casey-lenhart/casey-lenhart.github.io/blob/main/public/IMG_2290.jpg" />
              </div>
              <div className="column is-5 pl-5">
                <b>Casey Lenhart</b>
                <div className="is-size-4">{home}</div>
              </div>
              <div className="column is-2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container px-5 mt-2 mb-5 has-text-centered">
          <img
            src="https://github.com/casey-lenhart/casey-lenhart.github.io/blob/main/public/IMG_2290.jpg"
            style={{ maxHeight: 300 }}
          />
          <div className="my-3" style={{ fontSize: "1rem" }}>
            <b>Casey Lenhart</b>
            {home}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
