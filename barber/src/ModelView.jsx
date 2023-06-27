import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
export default function ModelView() {
  return (
    <Modal.Dialog>
      <Modal.Body>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="beard" title="Beard">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Beard Trim $20.00 </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div>
                    A good old beard trim to accentuate the shape of your beard.
                    </div>

                  
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Razor Line-Up $20.00 </Accordion.Header>
                <Accordion.Body>
                  <div>
                    We can shape your beard to perfection or stylize it any way
                    you'd like.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Beard Shapping $20.00 </Accordion.Header>
                <Accordion.Body>
                  <div>
                    We can shape your beard to perfection or stylize it any way
                    you'd like.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Beard Colour $20.00 </Accordion.Header>
                <Accordion.Body>
                  <div>
                    We can shape your beard to perfection or stylize it any way
                    you'd like.
                  </div>
                </Accordion.Body>
                <Accordion.Item eventKey="4">
                <Accordion.Header>Full Face Shave $47.00 </Accordion.Header>
                <Accordion.Body>
                  <div>
                    We can shape your beard to perfection or stylize it any way
                    you'd like.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="cut" title="Cut">
            <Stack>
              <div>First item</div>
            </Stack>{" "}
          </Tab>
          <Tab eventKey="other" title="Other">
            <Stack>
              <div>First item</div>
            </Stack>{" "}
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal.Dialog>
  );
}
