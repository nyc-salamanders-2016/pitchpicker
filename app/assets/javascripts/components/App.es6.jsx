class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">

        <header>
          <NavbarInstance />
        </header>

        <div className="jumbotron">
          <h2>Welcome to PitchPicker</h2>
          <p>FINALLY: the DBC final project picking process joins the 21st century</p>

          <p>FORM:
          how many pitches per student
          how many votes per student, round 1
          how many preferential votes
          pitch time
          </p>

          <div>
            <Student />
          </div>

          <AdminConfig />

        </div>

      </div>
    );
  }
}
