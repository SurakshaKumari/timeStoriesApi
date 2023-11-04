// src/components/DataComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function DataComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL where your Express server is running
    const apiUrl = 'http://localhost:5000/server';
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    

  }, []);


  return (
    <div>
      <Card>
        
          <h1>Data Information</h1>
          <Card.Text>Status: {data.status}</Card.Text>
          <Card.Text>Copyright: {data.copyright}</Card.Text>
          <Card.Text>Section: {data.section}</Card.Text>
          <Card.Text>Last Updated: {data.last_updated}</Card.Text>
          <Card.Text>Number of Results: {data.num_results}</Card.Text>
          <Card.Body>
          {data.results && Array.isArray(data.results) ? (
            <ul>
              {data.results.map((article, index) => (
                <li style={{border: '1px solid gray',
                            padding: '20px',
                            margin: '5px',
                            width: '20%',
                            borderRadius: '5px',
                            listStyle: 'none'
                }} key={index} >
                  <Card.Title><strong>Title:</strong></Card.Title><Card.Text> {article.title}</Card.Text>
                  <hr></hr>
                  <Card.Title> <strong>Abstract:</strong></Card.Title><Card.Text> {article.abstract}</Card.Text>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading.....</p>
          )}
        </Card.Body>
      </Card>
  </div>
            );
            }

export default DataComponent;
