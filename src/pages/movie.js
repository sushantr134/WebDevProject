import * as React from "react"
import RenderMoviePage from "../components/Wrapper/RenderMoviePage"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      movieId: null,
    }
  }
  componentDidMount() {
    if (this.props.location.state != null) {
      this.setState({ movieId: this.props.location.state.movieId })
    }
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Movie Details"
          keywords={[`gatsby`, `application`, `react`]}
        />
        {this.state.movieId != null && (
          <RenderMoviePage movieId={this.state.movieId} />
        )}
      </Layout>
    )
  }
}
