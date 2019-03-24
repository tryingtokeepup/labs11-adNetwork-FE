import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createAd } from '../../../store/actions/adAction.js';
import { getUserOffers } from '../../../store/actions/offersAction.js';
import AdForm from '../../../components/ad-generator/forms/AdForm.js';
import AdHoc from '../../../components/ad-generator/AdHoc.js';

const AdGeneratorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class AdGenerator extends Component {
  state = {
    productData: {
      offer_id: "",
      headline: "",
      tagline: "",
      message: "",
      cta_button: "",
      destination_url: "",
      back_img: "",
      text_color: "",
      btn_color: "",
      btn_text_color: "",
      size: "square_banner"
    }
  }

  componentDidMount(){
    this.props.getUserOffers();
  }

  createAd = e => {
    e.preventDefault();

    this.props.createAd(this.state.productData, this.props)
    
    this.setState({
      productData: {
        offer_id: "",
        headline: "",
        tagline: "",
        message: "",
        cta_button: "",
        destination_url: "",
        back_img: "",
        text_color: "",
        btn_color: "",
        btn_text_color: "",
        size: "horizontal_banner"
      }
    })
  }

  handleChange = e => {
    this.setState({
      productData:{
        ...this.state.productData,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleFileChange = e => {
    this.setState({
      productData:{
        ...this.state.productData,
      back_img: e.target.files[0]
      }
    })
  }

  render() {
    return (
      this.props.userOffers.length ?
      <AdGeneratorContainer>
        <AdForm
          createAd={this.createAd}
          handleFileChange={this.handleFileChange}
          handleChange={this.handleChange}
          productData={this.state.productData}
          offers={this.props.userOffers}
        />
        <AdHoc ad={this.state.productData}/>
      </AdGeneratorContainer> :
      <h1>Create an offer before you create an ad.</h1>
    )
  }
}

const mapStateToProps = state => {
  return{
    userOffers: state.offersReducer.userOffers
  }
}

export default connect(
  mapStateToProps,
  {
    createAd,
    getUserOffers
  }
)(AdGenerator)
