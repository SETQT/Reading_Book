import React, { useState } from "react";
import Header from "../components/header/Header";
import Content from "../components/content/Content";
// require('./App.css');
import DescribeContent from "../components/content/DescribeContent";
import Footer from "../components/footer/Footer";
import { CardBook } from "../components/cartBook/CartBook";
import { Route, Routes } from "react-router-dom";
import { useStore } from "../components/store/hook";
import BookDetails from "../components/content/BookDetails";

// const MyContext = React.createContext();
// import GlobalStyle from '../style/GlobalStyle'
function Home() {
  // const [state, update] = useStore()

  function test() {
    alert("sd");
  }
  return (
    <>
      <Routes>
        {/* <Route path='/'> */}

        <Route path="/" element={<AllBook />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* </Route> */}
      </Routes>
    </>
  );
}

function AllBook() {
  const [book, setBook] = useState(10);

  return (
    <div>
      {/* <MyContext.Provider value={"test"}> */}
      {/* {/* <CardBook /> */}
      {/* <MyContext.Consumer>



          {value => <CardBook />}
        </MyContext.Consumer> */}

      <Header />
      <div className="bodyHome">
        <Content style={{ flex: 3 }} setBook={setBook} />
        <DescribeContent style={{ flex: 1 }} book={book} />
        
      </div>
      
      {/* </MyContext.Provider> */}
      {/* <Footer /> */}
    </div>
  );
}

// bodyHome
// }
export default Home;
