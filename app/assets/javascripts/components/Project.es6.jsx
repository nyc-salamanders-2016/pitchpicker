class Project extends React.Component {
  constructor(){
    super();
    this.state = {details: null, toggleDetails: false}
    this.toggleDetails = this.toggleDetails.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  toggleDetails(){
    let shouldToggleDetails = !this.state.toggleDetails;
    this.setState({toggleDetails: shouldToggleDetails})
    if(shouldToggleDetails)
      this.fetchDetails();
  }

  fetchDetails(){
    let projectInfo = this.props.data;
    this.setState({details: projectInfo.description})
  }

  showDetails() {
  let { toggleDetails, details } = this.state;

  if(toggleDetails) {
    return (
      <div>
    <h4>Description:</h4>
    <p>{details}</p>
    </div>
  )

  }
  return null;
}

handleVote(){
  this.props.votes = this.props.votes + 1
 this.props.onIncrement(this.props.votes)
}

handleSubmit(event){
  var selected_project = this.props.data
  event.preventDefault();
  var newVotedata = this.refs.newVote;
  $.ajax({
    url: "/votes",
    method: "POST",
    data: { selected_project }
  }).done((response)=>{
    this.props.updateVote(response)
  })
}


  render(){

      let project = this.props.data
      return(
      <div>

        <section>
          <h3 onClick={this.toggleDetails} >

            {project.title}
            {this.showDetails()}

          </h3>
           <form ref="newVote" onSubmit={this.handleSubmit}>
           <input type="submit" value="Vote"/>
           </form>
        </section>
      </div>
        )
  }
}
