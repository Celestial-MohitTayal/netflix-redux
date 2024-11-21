import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-80 pr-6">
      <img
        className="rounded hover:scale-110 duration-150 cursor-pointer"
        alt="Movie Card"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
