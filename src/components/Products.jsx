import React, { Component } from 'react'

class Products extends Component {

    render() {
        return (
            <section className="section">
                <h1 className="section-heading">AzurLane Ship</h1>
                <div className="row">
                    {/* Product */}
                    { this.props.children }
                </div>
            </section>
        )
    }
}

export default Products