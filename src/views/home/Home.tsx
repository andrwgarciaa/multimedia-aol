import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoContainer from "../../components/VideoContainer";
import MembersContainer from "../../components/MembersContainer";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Header />
      <div className="h-1/2 mt-[10vh]">
        <h1 className="text-3xl">Something here</h1>
      </div>
      <VideoContainer />
      <MembersContainer />
      <Footer />
    </div>
  );
}
