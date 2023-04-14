import React, { Component } from 'react'

export default class PriceCards extends Component {
  render() {
    return (
      <div>
        <div class="card shadow-lg" style={{width: '18rem;'}}>
            <img src={this.props.imgSrc} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.text}</p>
                <a href="/" class="btn btn-primary my-3">{this.props.price}</a>
            </div>
        </div>
      </div>
    )
  }
}
