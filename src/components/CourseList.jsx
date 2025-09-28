import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CourseList({ data }) {
  return (
    <div>
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
            <th>Slug</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Link
                  className="link-table"
                  to={`/course/${item.slug}`}
                  state={item}
                >
                  {item.title}
                </Link>
              </td>
              <td> {item.authorId} </td>
              <td> {item.category} </td>
              <td> {item.slug} </td>
              <td>
                {" "}
                <Button className="buttons">Delete</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
