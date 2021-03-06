import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
import Footer from './Footer';

injectTapEventPlugin();

const mapStateToProps = state => ({
  app: state.app,
});

class Layout extends React.Component {
  render() {
    const theme = getMuiTheme(lightBaseTheme);

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Header />
          <h1> Welcome to react-redux-skeleton by team @Preeminence</h1>
          <ConnectedRouter history={this.props.history}>
            { this.props.children }
          </ConnectedRouter>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Layout);
