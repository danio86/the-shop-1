import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./api/axiosDefaults"
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
            <Route exact path="/" render={() => <h1>Home page</h1>} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/signin" render={() => <SignInForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;