class AdminConfig extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const cohortSize = this.refs.cohortSize.value
    const pitchNumber = this.refs.pitchNumber.value
    $.ajax({
      url: '/projects',
      method: 'post',
      data: {
        user: {
          cohort_size: cohortSize,
          pitch_number: pitchNumber ,
        }
      }
    })
    .done((response) => {
      console.log("response received! see here:")
      console.log(response)
      })
  }



  render() {
    return (
      <div>
        <h3>Set up</h3>
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <input ref="cohortSize" type="number" min="0" max="100" className="form-control" id="inputcohortSize3"  />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input ref="pitchNumber" type="number" min = "0" max ="10" className="form-control" id="inputpitchNumber3"  />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Configure</button>
            </div>
          </div>
        </form>


      </div>
    );
  }
}
