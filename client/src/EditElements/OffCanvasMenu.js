import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import EditOptions from './EditOptions';

const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
    placement: 'end'
  }
];

function OffCanvasMenu({ list, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div style={{ height: 20 }}>
      <Button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={toggleShow} className="me-2">
        <img src='https://i.imgur.com/RRaDGiY.png' style={{ height: 18 }} ></img>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#4d564d' }}>{list.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <EditOptions list={list}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Example({ list }) {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasMenu list={list} key={idx} {...props}  />
      ))}
    </>
  );
}

export default Example;