import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Records = () => {
	const [recordsArray, setRecordsArray] = 
	useState([]);

	useEffect(() => {
		const getRecords = "http://localhost:9000/records/";
		fetch(getRecords)
		.then((res) => res.json())
		.then((recordsJSON) => {
		  console.log(recordsJSON);
		  setRecordsArray(recordsJSON);
		  console.log(recordsArray[0]);
		})
		.catch((err) => {
		  console.log(err);
		});
	  }, []);

	const records = [];

	recordsArray.forEach(record => {
		records.push(
			<tr>
			<td>{record.name}</td>
			<td>{record.weight_lifted}</td>
			</tr>
		);
	});

return (
	<div>
		
	<h1>Records Page</h1>
	<Table striped bordered hover size="sm">
	<thead>
        <tr>
          <th>Name and Variation</th>
          <th>Personal Record</th>
        </tr>
      </thead>
	  <tbody>
	  {records}
	  </tbody>
	</Table>
	</div>
);
};

export default Records;

