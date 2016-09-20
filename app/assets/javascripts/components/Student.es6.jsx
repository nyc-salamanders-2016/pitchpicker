class Student extends React.Component{
  constructor(){
    super()
    this.state = {title: null, description: null, user: null, projects: []}
    this.handleCreate = this.handleCreate.bind(this)
    this.onCreate = this.onCreate.bind(this)
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
    debugger
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


  render(){
    return(
        // while admit sets up

        <div>
          {/* <h2>Admit is setting up</h2> */}
          <StudentPitch onCreate={this.handleCreate} />

          <h4 id ="currentPitches" ref= "currentPitches"> Current Pitches: </h4>
          {
            this.state.projects.map( (project, idx ) => {
              return (
                <p key={idx}> {project.title} </p>) })
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
