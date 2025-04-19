import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function AppHome() {
  return (
    <div className="w-full h-[100vh] pt-[70px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
