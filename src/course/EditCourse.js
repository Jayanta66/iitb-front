import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCourse() {
  let navigate = useNavigate();

  const { course_id } = useParams();

  const [course, setCourse] = useState({
    course_title: "",
    course_code: "",
    description: "",
    year: "",
    semester: "",
  });

  const { course_title, course_code, description, year, semester } = course;

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCourse();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8082/api/courses/${course_id}`, course);
    navigate("/");
  };

  const loadCourse = async () => {
    const result = await axios.get(`http://localhost:8082/api/courses/${course_id}`);
    setCourse(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Course</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              COURSE TITLE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter  COURSE TITLE"
                name="course_title"
                value={course_title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course_code" className="form-label">
              course_code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter course_code"
                name="course_code"
                value={course_code}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
              description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
              year
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter year"
                name="year"
                value={year}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="semester" className="form-label">
              semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter semester"
                name="semester"
                value={semester}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
