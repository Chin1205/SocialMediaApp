import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/cover.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/galadriel.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sample Profile</h4>
                <span className="profileInfoDesc">Stalker much, are ya?</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}