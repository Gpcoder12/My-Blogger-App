import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';
import Post from './pages/Post';
import 'animate.css/animate.min.css';

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">My BlogSpace</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">MainPage</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createpost">CreatePost</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">SignIn</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">SignUp</Link> {/* Corrected case of SignUp */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section with Bootstrap Styling and Animation */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to my blogSpace</h1>
              <p className="lead">Welcome to MyBlogSpace, where words come alive and ideas flourish! Dive into a world of captivating content curated just for you. Whether you're seeking inspiration, knowledge, or simply a delightful read, our blog is your ultimate destination. Join us on a journey through insightful articles, engaging stories, and thought-provoking discussions. Explore the realms of creativity, intellect, and imagination, all in one place. Let your curiosity roam free and embark on a fulfilling experience with us at [myBlogSpace].</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Readmore</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/post/:postId" component={Post} />
          </Switch>
        </div>
      
        {/* Footer Section */}
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg> {/* Corrected xlinkHref */}
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Blogspot, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
};

export default App;
