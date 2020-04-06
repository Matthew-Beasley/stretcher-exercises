import { Route, Link, useHistory } from 'react-router-dom';

//simplest form, exact path needed for "/" to keep from matching on "/updatechef"
<Route exact path="/">
  <Home />
</Route>
//or
<Route path="/someplace" <SomeComponent /> />
//or
<Route path="/someplace" render={<SomeComponent />} />

//this allows props to be passed (setChefs)
<Route path="/updatechef" render={() => <UpdateChef setChefs={setChefs} />} />
  
//here the {...props} object contains props.match.params, address params can be retrieved /setChefs:id
//like 'const { id } = props.match.params;'
<Route path="/updatechef/:id" render={(props) => <UpdateChef {...props} />} />
  
//here is the full meal deal in case you need both props and params
<Route path="/updatechef/:id" render={(props) => <UpdateChef setChefs={setChefs} {...props} />} />

  
//Then to navigate to the Routes
//Links are like anchor tags
<Link to="/updatechef">Update Chef</Link>

//history can programatically navigate routes
const history = useHistory();

const goToJail = () => {
  history.push("/jail");
}

//or

const onButtonClick = (event) => {
  let address = event.target.value;
  history.push(address);
}




