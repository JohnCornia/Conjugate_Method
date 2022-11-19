import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

function BasicExample () {
  var completeWorkoutApi = 'http://localhost:9000/home/complete-workout';
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();
  
const onSubmit = (data) => {
  console.log(data)
  fetch(completeWorkoutApi, {
    method: 'POST',
    body: data/*,
    Header: {
      'Content-Type': 'application/json'
    }*/
  });
};
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Main Lift Max Effort</Form.Label>
        <Form.Control name="max-lift" placeholder="Enter max" {...register("max-lift")}/>
        <Button variant="primary" type="submit">
        Complete Workout
      </Button>
      </Form.Group>
    </Form>
  );
}

export default BasicExample;