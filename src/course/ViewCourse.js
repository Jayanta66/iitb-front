import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCourse() {
  const [course, setTask] = useState({
    course_title: "",
    course_code: "",
    description: "",
    year: "",
    semester: "",
  });

  const { course_id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8082/api/courses/${course_id}`);
    setTask(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Course Details</h2>

          <div className="card">
            <div className="card-header">
            Course id : {course.course_id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>course_title : </b>
                  {course.course_title}
                </li>
                <li className="list-group-item">
                  <b>course_code : </b>
                  {course.course_code}
                </li>
                <li className="list-group-item">
                  <b>description : </b>
                  {course.description}
                </li>
                <li className="list-group-item">
                  <b>year : </b>
                  {course.year}
                </li>
                <li className="list-group-item">
                  <b>semester : </b>
                  {course.semester}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
