import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }
  
 componentDidMount() {
    this.getPortfolioItem();
  }

  handleClick(event) {
    console.log('%c You clicked meh!', 'color: yellow;', event)
  }

  getPortfolioItem() {
    axios
    .get(
      `https://brianmote.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug
    }`, 
    { withCredentials: true }
    )
    .then(response => {
      console.log('%c response for portfolio detail: ', 'color: green; font-weight: bold; ', response)
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    })
    .catch(error => {
      console.log('%c error in getPortfolioItem', 'color: red;', error)
    })
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }

    const url = (`https://${this.state.portfolioItem.url}`)

      return(
        <div className="portfolio-detail-wrapper">
          <div className="banner" style={bannerStyles}>
              <img src={logo_url} />
          </div>
          
          <div className="portfolio-detail-description-wrapper">
            <div className="description">{description}</div>
          </div>

          <div className="bottom-content-wrapper">
            <a href={url} className="site-link" target="_blank">
              Visit {name}
            </a>
          </div>
            
          
        </div>
 
      );
    }
  }
  