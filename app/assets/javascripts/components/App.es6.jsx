class App extends React.Component {
  constructor(){
    super()
    this.userObj = JSON.parse($('div').data().reactProps.user)
    this.maxPitches = JSON.parse($('div').data().reactProps.max_pitches)
    this.maxVotes = JSON.parse($('div').data().reactProps.max_votes)
    this.state = {}

  }

  render() {

    let afterVoting
    const isAdmin = this.userObj.admin
    if (isAdmin) {
      afterVoting = <h2>Admin: Please organise the teams</h2>
    } else {
      afterVoting = <h2>Student: Please wait</h2>
    }

    return (
      <div className="App">

        <header>
          <NavbarInstance userObj={ this.userObj } maxPitches={ this.maxPitches } maxVotes={ this.maxVotes }/>
        </header>

        <div className="jumbotron">
          <h2>Welcome to PitchPicker</h2>
          <p>The DBC final project picking process joins the 21st century</p>
        </div>

        <div>
          <Student user={this.userObj} maxVotes={ this.maxVotes }/>
        </div>
          <Results votes={this.votes} />
        {afterVoting}
      </div>
    );
  }
}
