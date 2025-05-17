import * as params from "@params";
import * as React from "react";
import * as ReactDOM from "react-dom";

const tracks: {
  title: string;
  year?: number;
  link: string;
}[] = params.tracks;

const descriptions: string[] = params.descriptions;

document.body.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("audio-player"));
  root.render(<AudioPlayer />);
};

const AudioPlayer = () => {
  const [playing, setPlaying] = React.useState(0);
  return (
    <>
      <Tracklist playing={playing} setPlaying={setPlaying} />
      <Player playing={playing} />
    </>
  );
};

const Tracklist = (props: {
  playing: number;
  setPlaying: (n: number) => void;
}) => {
  return (
    <div id="audio-tracklist">
      {tracks.map((track, i) => (
        <div
          key={i}
          className="audio-track"
          onClick={() => {
            props.setPlaying(i);
          }}
          style={{
            position: "relative",
            fontWeight: i === props.playing ? "bold" : undefined,
          }}
        >
          <div style={{ flexGrow: 1, paddingRight: "0.5em" }}>
            {track.title}
          </div>
          {track.year ? <div style={{ opacity: 0.6 }}>{track.year}</div> : null}
          {i === props.playing ? (
            <div
              style={{
                position: "absolute",
                inset: "-0.5em -1em",
                borderRadius: 999,
                border: "1px solid seagreen",
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const Player = (props: { playing: number }) => {
  const { playing } = props;
  return (
    <div>
      <audio
        style={{ width: "100%", marginBottom: "0.5em" }}
        controls
        src={tracks[playing].link}
      />
      <div dangerouslySetInnerHTML={{ __html: descriptions[playing] }} />
    </div>
  );
};
