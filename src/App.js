import React, { Component } from 'react';
import { ThemeProvider }  from 'styled-components';

import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher/index';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

class App extends Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState({ 
      theme: this.state.theme == themes.light ? themes.dark : themes.light 
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            { theme => (
              <ThemeProvider theme={theme}>
                <TodoList />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
