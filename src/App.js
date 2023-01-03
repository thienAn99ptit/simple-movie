import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { privaryRoute } from "./routes/Routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Suspense fallback={<></>}>
          <Routes>
            {privaryRoute.map((route, index) => {
              let Layout = DefaultLayout;
              const Page = route.element;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
