const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 bg-gradient-to-r from-black z-10">
      <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 text-base xl:text-lg xl:w-1/2 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 rounded-lg text-lg shadow-lg bg-opacity-100 hover:bg-opacity-80 hover:scale-105">
          ▶️ Play
        </button>
        <button className="mx-4 bg-zinc-500 text-white py-2 px-4 rounded-lg text-lg shadow-lg bg-opacity-80 hover:bg-opacity-100 hover:scale-105">
          ︕ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
