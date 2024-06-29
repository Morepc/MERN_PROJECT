import React, { useEffect, useState } from "react";
import Mainscreen from "../../components/Mainscreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button,Card, Container} from "react-bootstrap";

import '../Mynotes/Mynotes.css'
import axios from 'axios'
const Mynotes = () => {

 const[notes,setNotes]=useState([])
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // Add the delete logic here
    }
  };

  const fetchnote =async ()=>
    {
      const {data}= await axios.get("/api/notes")
      console.log(data)
      setNotes(data)
    }

    useEffect(()=>{
     fetchnote()
    })
    
  return (
    <Container>
      <Mainscreen title="Welcome back Poonam More">
        <Link to="/Createnote">
          <Button style={{ marginLeft: 8, marginBottom: 16 }} size="lg">
            Create New Notes
          </Button>
        </Link>

        <Accordion defaultActiveKey="0">
          {notes.map((note, index) => (
            <Accordion.Item eventKey={index.toString()} key={note._id}>
              <Card>
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ margin: 1 }}>{note.title}</h1>

                    <div className="button-group">
                      <Button href={`/note/${note._id}`} className="mx-1">
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-4"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Accordion.Header>

                <div>
                  <Accordion.Body>
                    <h4>
                      <Badge bg="success">Category: {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.title}</p>
                      <footer className="blockquote-footer">
                        Created on {note.createdDate || "unknown date"}{" "}
                        {/* Replace with actual date if available */}
                      </footer>
                    </blockquote>
                  </Accordion.Body>
                </div>
              </Card>
            </Accordion.Item>
          ))}
        </Accordion>
      </Mainscreen>
    </Container>
  );
};

export default Mynotes;
