
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const NewsLetter = () => {
  const [fetchResult, setFetchResult] = useState([]);
  const bearerToken = useSelector(
    (state) => state.register.user[0].bearerToken
  );


  
     const requestOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: "Bearer " + bearerToken
    }),
    redirect: 'follow'
  };

  const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/newsletter",requestOptions );
    if (response.ok) {
      const result = await response.json();
      setFetchResult(result);
      console.log(result);
    } else {
      console.log("c'è stato un problema");
    }
  } catch (error) {
    console.log('error', error);
  }
};

 useEffect(() => {
    fetchData();
  }, []);


 
  return (<div>
<h1>LISTA CONSENSO PRIVACY</h1>
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>nome</th>
          <th>cognome</th>
          <th>email</th>
          <th>consenso privacy</th>
        </tr>
</thead>
<tbody>
{fetchResult && fetchResult.map((e) =>
 <tr>
  <td>{e.nome}</td>
  <td>{e.cognome}</td>
  <td>{e.email}</td>
  <td>{e.consensoPrivacy ? <span>si</span> : <span>no</span>}</td>
  </tr>
)}
</tbody>
</Table>
  </div>)
};

export default NewsLetter;
