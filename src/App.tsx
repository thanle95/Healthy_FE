import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BackToTopButton from "./commons/BackToTopButton";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import Column from "./pages/Column";
import MyRecord from "./pages/MyRecord";
import TopMyPage from "./pages/TopMyPage";
import ScrollToTop from "./utils/ScrollToTop";

export const AppRouter = {
  TopMyPage: "/",
  MyRecord: "/my-record",
  Column: "/column",
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ScrollToTop />
        <Routes >
          <Route path={AppRouter.TopMyPage} element={<TopMyPage/>}/>
          <Route path={AppRouter.MyRecord} element={<MyRecord/>}/>
          <Route path={AppRouter.Column} element={<Column/>}/>
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>

    </BrowserRouter>
  );
}

export default App;
