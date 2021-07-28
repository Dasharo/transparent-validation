import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  TopBar,
  SettingsPanel,
  Wrapper,
  Dashboard,
  Charts,
  Rtr,
} from "components";
import GlobalStyle from "index.css";
import theme from "utils/theme";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "data/fetch/clients.fetch";
import { getPlatforms } from "data/fetch/platforms.fetch";
import { getResults } from "data/fetch/results.fetch";
import { getTests } from "data/fetch/tests.fetch";

function App() {
  const clients = useSelector((state) => state.clientsReducer.clients);
  const apiKey = useSelector((state) => state.apiKeyReducer.apiKey);
  const platforms = useSelector((state) => state.platformsReducer.platforms);
  const results = useSelector((state) => state.resultsReducer.results);
  const tests = useSelector((state) => state.testsReducer.tests);
  const displaySettings = useSelector(
    (state) => state.displaySettingsReducer.displaySettings
  );
  const dispatch = useDispatch();
  const [client, setClient] = useState("");

  const checkApiKey = () => {
    if (clients.some((item) => item.apiKey === apiKey)) {
      const clientChange = [...clients].filter((item) =>
        item.apiKey === apiKey && item !== client ? item : null
      );
      setClient(clientChange);
    } else {
      setClient("");
    }
  };

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  useEffect(() => {
    checkApiKey();
  }, [apiKey]);

  return (
    <ThemeProvider theme={theme}>
      <Router
        basename={process.env.NODE_ENV === "development" ? "/" : "/rtr-system"}
      >
        <GlobalStyle />
        <TopBar />
        <SettingsPanel
          clients={clients}
          client={client}
          platforms={platforms}
          tests={tests}
          results={results}
        />
        <Wrapper>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Dashboard
                  client={client}
                  displaySettings={displaySettings}
                  tests={tests}
                  results={results}
                />
              )}
            />
            <Route
              exact
              path="/rtr"
              component={() => (
                <Rtr client={client} displaySettings={displaySettings} />
              )}
            />
            <Route
              exact
              path="/charts"
              component={() => (
                <Charts client={client} displaySettings={displaySettings} />
              )}
            />
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
