import Card from 'react-bootstrap/Card';
import '../App.css'; // Import your custom CSS file

function BasicExample({ title, description, posterURL, rating }) {
  return (
    <Card border="primary" className="movie-card">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="rating">Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
