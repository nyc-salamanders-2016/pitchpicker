class LogInForm extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const userUsername = this.refs.username.value
    const userPassword = this.refs.password.value
    $.ajax({
      url: '/login',
      method: 'post',
      data: {
        user: {
          username: userUsername,
          password: userPassword,
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
        <h3>Log in</h3>
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <input ref="username" type="text" className="form-control" id="inputUsername3" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input ref="password" type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Log in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
