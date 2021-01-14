import anime from "animejs/lib/anime.es.js";
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

const App = () => {
  const me = useRef();
  const [zoom, setZoom] = useState(0);
  const [zoomies, setZoomies] = useState();

  useEffect(() => {
    setZoomies(
      anime({
        targets: me.current,
        translateY: "80vh",
        autoplay: false
      })
    );
  }, [setZoomies]);

  useEffect(() => {
    if (!zoomies) return;
    zoomies.seek(zoomies.duration * (zoom / 100));
  }, [zoom, zoomies]);

  return (
    <>
      <div className="me" ref={me} />
      <input
        className="progress"
        step=".001"
        type="range"
        min="0"
        max="100"
        value={zoom}
        onChange={event => setZoom(event.target.value)}
      />
    </>
  );
};

export default App;
