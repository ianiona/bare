import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Error from '../Error';
import ServiceItem from '../ServiceItem';
import './ServiceContent.scss'

export default (props) => {

  const { data } = props;

  if (data === null) return (<Error />)

  let { fields } = data.items[0];

  let content = documentToReactComponents(fields.content)


  return (

    <Container className="ServiceContent">
      <Row>
        <Col className="text-center">
          <h1>{fields.title}</h1>
          <div className="px-4">

          {content}
          </div>

          <Row>
            {renderServices(data)}
          </Row>
        </Col>
      </Row>
    </Container>

  )


}
const renderServices = (data) => {
  let { fields } = data.items[0];
  if (typeof (fields.services) === 'undefined' || fields.services.length === 0) return null;

  return data.includes.Entry.map((service) => {
    return (
      <ServiceItem key={service.sys.id} service={service} assets={data.includes.Asset} />
    )
  })
}
