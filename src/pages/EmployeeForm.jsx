import { useState } from "react";

const initialState = { name: "", designation: "", location: "", salary: "" };

export default function EmployeeForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee data:", form); // no POST needed
    setSubmitted(true);
    
    setForm(initialState);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="mb-3">Employee Form</h2>
        {submitted && (
          <div className="alert alert-success">Employee details submitted.</div>
        )}
        <form onSubmit={handleSubmit} className="card card-body shadow-sm">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input className="form-control" name="designation" value={form.designation} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input className="form-control" name="location" value={form.location} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input type="number" min="0" className="form-control" name="salary" value={form.salary} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}