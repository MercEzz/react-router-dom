import { Route, Switch, BrowserRouter } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/quotes" exact>
          {" "}
          <AllQuotes />
        </Route>
        <Route path="/quotes/:queoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          {" "}
          <NewQuote />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
