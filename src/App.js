import './App.css';
import "antd/dist/antd.css";
import {Layout} from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Add from './compo/Add';
import NavBar from './compo/NavBar';
import Body from './compo/Body';
import Views from './compo/View';
import Edit from './compo/Edit';
import Delete from './compo/Delete';
//import Body from './compo/Body';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router >
      <Layout className="App">
        <Header>
          <NavBar />
        </Header>
        <Content style={{ padding: "0 500px" }}>
            <Switch>
              <Route exact path="/" component={Body}/>
              <Route exact path="/Add" component={Add}/>
              <Route exact path="/view" component={Views}/>
              <Route exact path="/edit" component={Edit}/>
              <Route exact path="/delete" component={Delete}/>
            </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>This is Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
