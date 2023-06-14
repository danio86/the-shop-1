import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./api/axiosDefaults"
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext;
export const SetCurrentUserContext = createContext;
//Every time we call the createContext function,  
// a new Context Object is created


function App() {
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
          const { data } = await axios.get("dj-rest-auth/user/");
          setCurrentUser(data);} 
        catch (e) {
          console.log(e);}
      };
      // git die aktuellen user data in currentUser

      useEffect(() => {
        handleMount();
      }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {/* alles was innerhalb der profider ist (chlidcomponent)
        hat Zugang zu den currentUser data und kann sie ändern */}
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
       </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;