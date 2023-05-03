import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ReactCurvedText from "react-curved-text";
function List() {
  return (
    <>
    <div className="text-center" style={{fontSize:"24px"}}>

    <ReactCurvedText
      width={370}
      height={100}
      cx={180}
      cy={160}
      rx={100}
      ry={135}
      startOffset={100}
      reversed={true}
      text="What We Can Do"
    />
    </div>
    <Accordion className='mx-auto' style={{width:"50%"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Barbering</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Colour</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Extensions</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Haircuts & Styling</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Miscellaneous</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Hypnotherapy</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className='text-center'>
    <Button  variant="secondary">Book an Appointment</Button>{' '} 

    </div>
    </>
  );
}

export default List;