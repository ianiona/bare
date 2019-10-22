import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './ServiceItem.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



export default (props) => {


  let { sys } = props.service.fields.image;
  let content = documentToReactComponents(props.service.fields.details);

  //find from the asset the image of service based on its sys id

  let image = props.assets.filter(x => {
    return x.sys.id === sys.id;
  });

  let itemBackground, file;

  if (image.length > 0) {
    file = image[0].fields.file;
    let url = file.url.replace('downloads.ctfassets.net', 'images.ctfassets.net')
    itemBackground = {
      backgroundImage: `url(https:${url}?w=1920)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    };

  }

  return (
    <Col key={props.service.fields.id} md={3} sm={2} className="ServiceItem" style={itemBackground}>
      <div className="item">
        <h4>{props.service.fields.name}</h4>
      </div>
      <div>
        {content}
        <Button className="btn-yellow">LUE LISÄÄ → </Button>
      </div>
    </Col>
  )
}
