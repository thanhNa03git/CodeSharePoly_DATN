import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { getDatabase, ref, child, get, database } from "firebase/database";

function App() {
  // const dbRef = ref(database);
  // get(child(dbRef, `users`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log("snapshot: ",snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
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
