import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
            <div class="container footer">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">WAKANDA</a></p>
                        <p><a href="/">Birnin Zana</a></p>
                        <p><a href="/">Wakanda Heights, 7 Street</a></p>
                        <p><a href="/">10th Floor, Birnin Drive</a></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">SPACE</a></p>
                        <p><a href="/">Ego</a></p>
                        <p><a href="/">Stratosphere Drive</a></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">TIBET</a></p>
                        <p><a href="/">Kamar-Taj</a></p>
                        <p><a href="/">Sorceress Sanctum</a></p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
