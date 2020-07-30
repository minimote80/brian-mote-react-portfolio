import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list'
import PortfolioForm from '../portfolio/portfolio-form'


export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }

        this.handleNewFormSubmit=this.handleNewFormSubmit.bind(this);
        this.handleEditFormSubmit=this.handleEditFormSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }

    clearPortfolioToEdit() {
      this.setState({
        portfolioToEdit: {}
      });
    }

    getPortfolioItems() {
        axios
            .get("https://brianmote.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
              withCredentials: true
            })
            .then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                });
            }).catch(error => {
                console.log("error in getPortfolioItems", error);
            })
    }

    handleEditClick(portfolioItem) {
      this.setState({
        portfolioToEdit: portfolioItem
      });
    }

    handleDeleteClick(portfolioItem) {
      axios
        .delete(
          `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
          { withCredentials: true }
        )
        .then(response => {
          this.setState({
            portfolioItems: this.state.portfolioItems.filter(item => {
              return item.id !== portfolioItem.id;
            })
          });
          return response.data;
        })
        .catch(error => {
          console.log("error with handleDeleteClick", error);
        });
    }

    handleEditFormSubmit() {
      this.getPortfolioItems();
    }
    
    handleNewFormSubmit(portfolioItem) {
      this.setState({
        portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
      });
    }

    handleSubmissionError(error) {
      console.log("handleSubmissionError error", error)
    }

  componentDidMount() {
      this.getPortfolioItems();
  }
    

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm 
            handleNewFormSubmit={this.handleNewFormSubmit}
            handleEditFormSubmit={this.handleEditFormSubmit}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>
        <div className="right-column">
            <PortfolioSidebarList 
            handleDeleteClick={this.handleDeleteClick}
            handleEditClick={this.handleEditClick}
            data={this.state.portfolioItems}
          
            />
        </div>
      </div>
    );
  }
}