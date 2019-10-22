import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Content from '../../components/Content'
import ServiceContent from '../../components/ServiceContent';
import { updateContent, updateLanguage } from '../../store/actions'
import Loading from '../../components/Loading'

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'fi'
    }
  }


  render() {
      let lang = window.location.pathname.indexOf('en') > 0 ? 'en' : 'fi'

    const slug = "service-" + lang;
    const contentType = this.getContentType();
    let data = this.props.content[this.state.language];

    return (
      <Content language={this.state.language} slug={slug} contentType={contentType}>
        {() => {
          if (this.props.loading) {
            return <Loading />;
          }

          return (
            this.props.loading ?
              <Container  >
                <Row>
                  <Col className="float-left">
                    <Loading />
                  </Col>
                </Row>
              </Container>
              :
              <div>
                <ServiceContent data={data} />
              </div>
              );

        }}
      </Content>
    )
  }

  getContentType() {
    let lang = window.location.pathname.indexOf('en') > 0 ? 'en' : 'fi'

    switch (lang) {
      case 'en':
        return 'servicePageEn'
      default:
        return 'servicePageFi'
    }
  }

}
function mapStateToProps(state) {
  return {
    content: state.appState.contents,
    loading: state.appState.loading,
  }
}

export default connect(mapStateToProps, { updateContent, updateLanguage })(ServicesPage);
