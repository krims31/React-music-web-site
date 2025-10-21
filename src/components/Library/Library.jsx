import "./Library.css";
import book from "../../assets/book.png";
import searchLibrary from "../../assets/search.png";
import pins from "../../assets/pins.png";
import pins2 from "../../assets/pins.png";
import top from "../../assets/region_us_default.jpg";
import juiceW from "../../assets/Legends_Never_Die.png";
import fp from "../../assets/images.jpeg";

export default function Library() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const bookItem = {
    library: {
      title: "Your Library",
    },
    playlist: {
      title: "Playlist",
    },
    album: {
      title: "Albums",
    },
    podcast: {
      title: "Podcasts",
    },
    likeSong: {
      img: "https://misc.scdn.co/liked-songs/liked-songs-300.jpg",
      title: "Liked Songs",
      text: "Playlist • 0 songs",
    },
    topSongs: {
      img: "assets/region_us_default.jpg",
      title: "Top Songs - Global",
      text: "Playlist • 0 songs",
    },
    Jw: {
      img: "assets/Legends_Never_Die.png",
      title: "Legends Never Die",
      text: "Album • 0 songs",
    },
    firstPlaylist: {
      img: "assets/images.jpeg",
      title: "The First Playlist",
      text: "Playlist • 0 songs",
    },
    newPlaylist: {
      title: "New playlist",
    },
  };

  return (
    <>
      <div className="container-library">
        <div className="library">
          <img src={book} alt="book" width={20} />
          <p>{bookItem.library.title}</p>
        </div>
        <div className="search-library">
          <img src={searchLibrary} alt="search-library" width={30} />
        </div>
        <div className="playlist">
          <button onClick={handleClick}>{bookItem.playlist.title}</button>
        </div>
        <div className="albums">
          <button onClick={handleClick}>{bookItem.album.title}</button>
        </div>
        <div className="podcast">
          <button onClick={handleClick}>{bookItem.podcast.title}</button>
        </div>
        <div className="like-song">
          <img src={bookItem.likeSong.img} alt="likeSong" width={60} />
          <p>{bookItem.likeSong.title}</p>
          <span>{bookItem.likeSong.text}</span>
          <img
            src={pins}
            alt="pins"
            width={20}
            style={{ position: "relative", top: "-23px", left: "-112px" }}
          />
        </div>
        <div className="TopSongs">
          <img
            src={top}
            alt="pins"
            width={60}
            style={{
              position: "relative",
              top: "-5px",
              left: "17px",
            }}
          />
          <p>{bookItem.topSongs.title}</p>
          <span style={{ position: "relative", top: "-5px" }}>
            {bookItem.topSongs.text}
          </span>
          <img
            src={pins2}
            alt="pins2"
            width={20}
            style={{ position: "relative", top: "2px", left: "-97px" }}
          />
        </div>
        <div className="JW">
          <img
            src={juiceW}
            alt="JuiceW"
            width={60}
            style={{ position: "relative", top: "20px", left: "17px" }}
          />
          <p>{bookItem.Jw.title}</p>
          <span>{bookItem.Jw.text}</span>
        </div>
        <div className="firstPlaylist">
          <img
            src={fp}
            alt="fp"
            width={60}
            style={{ position: "relative", top: "20px", left: "15px" }}
          />
          <p>{bookItem.firstPlaylist.title}</p>
          <span>{bookItem.firstPlaylist.text}</span>
        </div>
        <div className="newplaylist">
          <button style={{ width: "200px", height: "40px", padding: "5px" }}>
            {bookItem.newPlaylist.title}
          </button>
        </div>
      </div>
    </>
  );
}
