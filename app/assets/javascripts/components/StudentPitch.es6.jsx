class StudentPitch extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.refs.title.value, this.refs.description.value);
    // this.props.onCreate(this.refs.description.value);
  }


  render() {
    return (
      <div className="App">
        <h2>Make your pitch!</h2>
          <form onSubmit={this.handleSubmit}>
            <input ref="title" type="text" placeholder="Title"/>
            <input ref="description" type="text" placeholder="Description"/>
            <button type="submit">Submit</button>
          </form>


          {/* <h2 className="step">Student make pitches MATT and MOIN </h2>
          <h3>Student Form</h3>
          <h3>Add new pitch</h3>

          <h2 className="step">Students votes on pitches</h2>
          <h2 className="step">Admin decides how many pitches go to round 2</h2>
          <h2 className="step">Students rank the pitches</h2>
          <h2 className="step">Admin decides which projects</h2>
          <h2 className="step">Admin puts together teams</h2> */}

      </div>
    );
  }
}
