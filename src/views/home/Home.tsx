import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoContainer from "../../components/VideoContainer";
import MembersContainer from "../../components/MembersContainer";
import "./styles.css";
import AppIntroduction from "../../components/AppIntroduction";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto scroll-smooth">
      <Header />
      <AppIntroduction />
      <VideoContainer />
      <MembersContainer />
      <Footer />
    </div>
  );
}
