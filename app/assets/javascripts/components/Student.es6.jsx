class Student extends React.Component{
  constructor(){
    super()
    this.state = {title: null, description: null, user: null, projects: null}
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate(title, description){
    var content = {title: title, description: description}
    $.ajax({
      url: "/projects",
      method: "POST",
      data: content
    })
    .done((response) =>{
      this.setState({projects: response})
    }.bind(this))

  }


  render(){
    return(
        // while admit sets up

        <div>
          {/* <h2>Admit is setting up</h2> */}
          <StudentPitch onCreate={this.handleCreate} />
          <StudentVoting projects={}/>
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
