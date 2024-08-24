import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [course, setTasks] = useState([]);


  useEffect(() => {
    loadTasks();
  }, []);
//docker push jayantahalder/iitb-front:tagname
  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8082/api/courses");
    setTasks(result.data);
  };

  const deleteUser = async (course_id) => {
    await axios.delete(`http://localhost:8082/api/courses/${course_id}`);
    loadTasks();
  };



  return (
    <div className="container-primary">

      
    
      <div className="py-4">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Course_title</th>
              <th scope="col">Course_code</th>
              <th scope="col">Description</th>
              <th scope="col">Year</th>
              <th scope="col">Semester</th>
            </tr>
          </thead>
          <tbody>
            {course.map((course, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{course.course_title}</td>
                <td>{course.course_code}</td>
                <td>{course.description}</td>
                <td>{course.year}</td>
                <td>{course.semester}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/viewCourse/${course.course_id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editCourse/${course.course_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(course.course_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
