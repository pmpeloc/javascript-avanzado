import "https://vjs.zencdn.net/7.11.4/video.min.js";

console.log("se importo el player");

ps5.classList.remove("hidden");

const player = videojs("ps5", {
  controls: true,
  preload: "auto",
});

export { player };
