import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import HomePage from "./pages/Homepage";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Agents from "./pages/Agents";
import Properties from "./pages/Properties";
import Reviews from "./pages/Reviews";
import Messages from "./pages/Messages";
import CreateProperties from "./pages/CreateProperties";
import Property from "./pages/properties/Property";
import PropertyCreateForm from "./pages/properties/PropertyCreateForm";

import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostPage from "./pages/posts/PostPage";

function App() {
  

  return (
    
        <div className={styles.App}>
          <NavBar />
          <SideBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/messages" render={() => <Messages />} />
              <Route exact path="/properties" render={() => <Properties />} />
              <Route exact path="/property" render={() => <Property />} />
              <Route exact path="/property/create" render={() => <PropertyCreateForm />} />
              <Route exact path="/properties/create" render={() => <CreateProperties />} />
              <Route exact path="/reviews" render={() => <Reviews />} />
              <Route exact path="/agents" render={() => <Agents />} />

              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
                


              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      
  );
}

export default App;