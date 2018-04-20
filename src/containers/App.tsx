import AppBar from "material-ui/AppBar";
import * as React from "react";

class App extends React.Component {
  public render() {
    return (
      <AppBar
        title="My App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default App;
