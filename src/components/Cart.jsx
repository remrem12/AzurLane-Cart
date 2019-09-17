import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th />
                                <th>Shipgirl</th>
                                <th>Cost</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.children }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
