import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  ButtonGroup,
} from 'reactstrap';

const ChildForm = ({ child, editChild, MALE, FEMALE }) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-first-name-${child._id}`}>First Name</Label>
            <Input
              id={`child-first-name-${child._id}`}
              onChange={e => editChild(child._id, 'firstName', e.target.value)}
              value={child.firstName || ''}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-last-name-${child._id}`}>Last Name</Label>
            <Input
              id={`child-last-name-${child._id}`}
              onChange={e => editChild(child._id, 'lastName', e.target.value)}
              value={child.lastName || ''}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-gender-${child._id}`}>Gender</Label>
            <ButtonGroup id={`child-gender-${child._id}`}>
              <Button
                onClick={() => editChild(child._id, 'gender', FEMALE)}
                active={child.gender === FEMALE}
              >
                Female
              </Button>
              <Button
                onClick={() => editChild(child._id, 'gender', MALE)}
                active={child.gender === MALE}
              >
                Male
              </Button>
            </ButtonGroup>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-age-${child._id}`}>Age</Label>
            <Input
              id={`child-age-${child._id}`}
              type="number"
              onChange={e => editChild(child._id, 'age', e.target.value)}
              value={child.age || ''}
              required
              min={0}
              max={100}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-condition-${child._id}`}>
              Medical Condition
            </Label>
            <Input
              id={`child-condition-${child._id}`}
              onChange={e => editChild(child._id, 'condition', e.target.value)}
              value={child.condition || ''}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-story-${child._id}`}>Story</Label>
            <Input
              id={`child-story-${child._id}`}
              type="textarea"
              onChange={e => editChild(child._id, 'story', e.target.value)}
              value={child.story || ''}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGroup>
            <Label htmlFor={`child-wish-${child._id}`}>Wish</Label>
            <Input
              id={`child-wish-${child._id}`}
              type="textarea"
              onChange={e => editChild(child._id, 'wish', e.target.value)}
              value={child.wish || ''}
              required
            />
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChildForm;
