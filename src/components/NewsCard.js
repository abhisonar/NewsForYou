import React from 'react'
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { getByTitle } from '@testing-library/dom';
import "./NewsCard.css"
function NewsCard({
  title,
  urlImg,
  src_url,
  desc,
  author,
  content,
  src_name,
  publishDate,
  url
}) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={urlImg} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div>{desc.slice(0,100)+"..."}</div>
            <a href={url}>More..</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published At: {publishDate}</small><br/>
          <small className="text-muted">
            source:<a href={src_url}>{src_name}</a>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default NewsCard
