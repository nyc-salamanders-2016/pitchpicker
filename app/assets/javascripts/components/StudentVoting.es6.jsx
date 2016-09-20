class StudentVoting extends React.Component {
  constructor(){
    super()
    this.state = {
      votes: []
    }
  }

  handleSubmit(event){
    event.preventDefault();

    //this.props.onCreate(this.refs.description.value);
  }

  onVote(){
    $.ajax({
      url: "/votes",
      method: "post"
    }).done((response) => {
      this.setState(votes.push(response))
    }.bind())
  }


  render() {
    //let data = this.props.projects
    return (
      <div className="App">
      {/* <ul>
  				{
  					[1,2,3,4,5].map((project, idx) => {
  						return (
                <li>yo</li>
                <li>something</li>
                <form onSubmit={onVote}>
                <input type="submit" value="vote"/>
                </form>
              )
  					})
  				}
  			</ul> */}
        <h2>HI!!</h2>
        </div>
    );
  }
}
