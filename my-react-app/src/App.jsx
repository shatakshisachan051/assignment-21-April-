import { Provider } from "react-redux";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Router>
            <div className="app">
              <Navbar/>
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<BookList/>}/>
                  <Route path="/book/:id" element={<BookDetails/>}/>
                </Routes>

              </main>
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
