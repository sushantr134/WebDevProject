import * as React from "react"

export default class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.location.state.movieId}</div>
  }
}
