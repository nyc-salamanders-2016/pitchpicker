class Student extends React.Component{
  constructor(props){
    super(props)

    this.state = {title: null, description: null, user: null, projects: [], toggleDetails: false, votes: this.props.user.votes.length}
    this.handleCreate = this.handleCreate.bind(this)
    this.onCreate = this.onCreate.bind(this)
    this.handleUpdateVote = this.handleUpdateVote.bind(this)

  }

  componentDidMount(){
      $.ajax({
        url:'/projects',
        method: 'GET',
      dataType: 'json'
    }).done((response) => {
      this.setState({
        projects: response
      })
    })


  }


  onCreate(pitch){
    this.setState({
      projects: [pitch].concat(this.state.projects)
    })
  }
  handleCreate(title, description){
    var content = {title: title, description: description}
    $.ajax({
      url: "/projects",
      method: "POST",
      data: content
    })
    .done((response) =>{
        onCreate(response)
    })

  }

  handleUpdateVote(){

    this.setState({votes: this.props.user.votes.length ++})
  }


  render(){
    return(
        // while admit sets up

        <div>
          {/* <h2>Admit is setting up</h2> */}
          <StudentPitch onCreate={this.handleCreate} />
          <br/>
          <h2>Vote!</h2>
          <h3>Number of votes left:{this.props.maxVotes - this.props.user.votes.length}</h3>
          <h4 id ="currentPitches" ref= "currentPitches"> Current Pitches: </h4>
          {
            this.state.projects.map( (project, idx ) => {
              return ( <Project key={idx} data={project} votes={this.state.votes} updateVote={this.handleUpdateVote} />) })
                // <p onClick={this.toggleDetails} key={idx}> {project.title} </p>) })
          }


          <StudentVoting />
          {/*
          when it's time to pitch
          <StudentPitch />
          when it's round 1 voting time
          <StudentPitch />
          {/* <StudentVoting />
          */}

          {/* when it's round 2 voting time */}
          {/*  <StudentRanking /> */}
          {/* //   drop down menus */}
          {/* // once admit has set teams */}
          {/* //   <ProjectTeams /> */}

        </div>
    )
  }
}
