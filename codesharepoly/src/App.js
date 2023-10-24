import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {

  return (
    <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              // Neu layout ben file route undefined => DefaultLayout
              const Layout = route.layout === null ? Fragment : DefaultLayout;
  
              const Page = route.component;
  
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
  
          </Routes>
        </div>
    </Router>
  );
}

export default App;
