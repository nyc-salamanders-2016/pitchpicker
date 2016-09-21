class App extends React.Component {
  constructor(){
    super()
    this.userObj = JSON.parse($('div').data().reactProps.user)
    this.state = {}

  }

  render() {
    return (
      <div className="App">

        <header>
          <NavbarInstance data={this.userObj} />
        </header>

        <div className="jumbotron">
          <h2>Welcome to PitchPicker</h2>
          <p>The DBC final project picking process joins the 21st century</p>

          <p>FORM:
          how many pitches per student
          how many votes per student, round 1
          how many preferential votes
          pitch time
          </p>
        </div>

        <div>
          <Student />
        </div>

      </div>
    );
  }
}
