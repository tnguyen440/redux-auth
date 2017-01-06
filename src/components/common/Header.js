import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from 'material-ui/svg-icons/action/home';

const styles = {
  color: 'white',
};

const Header = () => (
    <AppBar
        title="Demo App"
        iconElementLeft={<IconButton><Link to="/"><HomeIcon style={styles}/></Link></IconButton>}
        iconElementRight={
            <div className="header-buttons">
                <Link to="posts"><FlatButton label="Posts" style={styles}></FlatButton></Link>
                <Link to="login"><FlatButton label="Login" style={styles}></FlatButton></Link>
                <Link to="signup"><FlatButton label="Sign Up" style={styles}></FlatButton></Link>
            </div>}
    />
);

export default Header;
