import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeacherExperience() {
  return (
    <div>
        <Card className="text-center mx-auto" style={{width:"50%", marginTop:"20vh"}}>
      <Card.Header>Me & Teaching</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="text-center mx-auto" style={{width:"50%", marginTop:"20vh"}}>
      <Card.Header>Work Experience</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="text-center mx-auto" style={{width:"50%", marginTop:"20vh"}}>
      <Card.Header>Education</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TeacherExperience;