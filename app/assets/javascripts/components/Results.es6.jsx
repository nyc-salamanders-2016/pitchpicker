class Results extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
      $.ajax({
        url:'/votes',
        method: 'GET',
        dataType: 'json'
    }).done((response) => {
      this.setState({
        projects: response
      })
    })
  }


  render(){
    return(
        // while admit sets up
        <div>

        </div>
    )
  }
}
