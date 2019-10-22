import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { updateLanguage, apiGetRequest } from '../store/actions';
import { API_BASE_URL } from '../const';
import Error from './Error';
import { Helmet } from "react-helmet";
import { Col } from 'react-bootstrap';


class Content extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.renderHelmet = this.renderHelmet.bind(this);


  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.fetchData();
    }

  }

  render() {
    if (this.props.error) {
      return <Error />
    }
    return (
      <Fragment>
        {this.renderHelmet()}
        {this.props.children()}
      </Fragment>
    )

  }

  fetchData() {
    let params = {
      content_type: this.props.contentType,
      include: 3,
      'fields.slug[in]': this.props.slug
    };

    let payload = {
      url: API_BASE_URL,
      params: params
    }
    if (this.props.content[this.props.language] === null || typeof (this.props.content[this.props.language]) === 'undefined') {
      this.props.apiGetRequest(payload);
    }
  }

  renderHelmet() {

    let data = this.props.content[this.props.language];

    if (data === null || typeof (data) === 'undefined') return <Col />;

    let seoData = getSEO(data);

    if (typeof (seoData) === 'undefined' || Object.entries(seoData).length === 0) return <Col />;


    let seo = seoData.fields;

    let { fields } = data.items[0];
    if (seo !== null) {
      return (

        <Helmet>
          <html lang={this.props.language} />
          <title>{fields.siteName}</title>
          <meta name="description" content={seo.metaDescription} />
          <meta name="keywords" content={seo.metaKeywords} />
        </Helmet>
      )
    }
  }



}

let mapStateToProps = (state) => {
  return {
    language: state.appState.currentLanguage,
    content: state.appState.contents,
    error: state.appState.error

  }
}

let getSEO = (data) => {
  if (data === null || data.items.length === 0) return {};
  let { fields } = data.items[0];
  let { includes } = data;

  if (typeof (includes) === 'undefined') return {};
  if (fields['seo'] == null) return {};

  let { sys } = fields.seo;
  let seo = includes.Entry.filter(x => x.sys.id === sys.id);

  return seo[0];

}

export default connect(mapStateToProps, { updateLanguage, apiGetRequest })(Content);
