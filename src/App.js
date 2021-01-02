import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CollectionPage from './container/CollectionPage/CollectionPage';
import CollectionRestaurantsPage from './container/CollectionRestaurantsPage/CollectionRestaurantsPage';
import HomePage from './container/HomePage/HomePage';
import RestaurantPage from './container/RestaurantPage/RestaurantPage';

function App() {
  const locationDetails = useSelector(state => state.locationDetails.location.city_name);
  const history = useHistory();
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/collections" component={CollectionPage}/>
      <Route path="/collections/restarant/:id" component={RestaurantPage}/>
      <Route path="/collections/:id" component={CollectionRestaurantsPage}/>
    </Switch>
    </div>
  );
}

export default App;
