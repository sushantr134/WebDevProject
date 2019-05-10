import * as React from "react"

class RenderMoviePage extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section>
        <h1>title</h1>
        <div>
          <div />
          <div />
        </div>
      </section>
    )
  }
}

export default class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.location.state)
  }
  render() {
    return <RenderMoviePage data={null} />
  }
}
