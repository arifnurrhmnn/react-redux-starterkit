import React, { Suspense } from "react";
import AllRoutes from "./routes";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {AllRoutes.map((val, key) => {
        let Components = val.component;
        return (
          <Route
            key={key}
            path={val.path}
            element={
              <>
                <Helmet>
                  <title>{val.name} - Your App</title>
                </Helmet>
                <Suspense fallback={<h1>Memuat...</h1>}>
                  <Components />
                </Suspense>
              </>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
