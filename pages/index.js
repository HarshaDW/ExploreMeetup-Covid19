import React, { Component } from 'react'
import Header from '../components/Header'
import SelectCountry from '../components/SelectCountry'

export default class index extends Component {
  render() {
    return (
      <div>
        <SelectCountry />
      </div>
    )
  }
}