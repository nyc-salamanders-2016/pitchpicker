class Project extends React.Component {
  constructor(){
    super();
    this.state = {details: null, toggleDetails: false}
    this.toggleDetails = this.toggleDetails.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this)
    this.showDetails = this.showDetails.bind(this)
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
    return <p>{details}</p>
  }
  return null;
}

  render(){

      let project = this.props.data
      return(
        <li onClick={this.toggleDetails} >
          {project.title}
          {this.showDetails()}
        </li>
        )
  }
}
