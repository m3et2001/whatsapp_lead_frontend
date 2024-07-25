import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
const Home = () => {
  const useToggle = () => {
    const [state, setState] = useState(true);
    const toggle = () => {
      setState(!state);
    };
    return [state, toggle];
  };

  const [isToggled, setIsToggle] = useState();
  const toggle = () => {
    setIsToggle(!isToggled);
  };
  console.log(isToggled);
  return (
    <div id="app-content">
      {/* Container fluid */}
      <div className="app-content-area">
        <div className="bg-primary pt-10 pb-21 mt-n6 mx-n4" />
        <div className="container-fluid mt-n22 ">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              {/* Page header */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="mb-2 mb-lg-0">
                  <h3 className="mb-0  ">Dashboard</h3>
                </div>
                {/* <div>
                  <a href="#!" className="btn btn-white">
                    Create New Project
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
              {/* card */}
              <div className="card h-100 card-lift">
                {/* card body */}
                <div className="card-body">
                  {/* heading */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h4 className="mb-0">Projects</h4>
                    </div>
                    <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                      <AiOutlineFundProjectionScreen size={20} />
                    </div>
                  </div>
                  {/* project number */}
                  <div className="lh-1">
                    <h1 className=" mb-1 fw-bold">18</h1>
                    <p className="mb-0">
                      <span className="text-dark me-2">2</span>Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
              {/* card */}
              <div className="card h-100 card-lift">
                {/* card body */}
                <div className="card-body">
                  {/* heading */}
                  <div
                    className="d-flex justify-content-between align-items-center
              mb-3"
                  >
                    <div>
                      <h4 className="mb-0">Active Task</h4>
                    </div>
                    <div
                      className="icon-shape icon-md bg-primary-soft text-primary
                rounded-2"
                    >
                      <BsListTask size={20} />
                    </div>
                  </div>
                  {/* project number */}
                  <div className="lh-1">
                    <h1 className="  mb-1 fw-bold">132</h1>
                    <p className="mb-0">
                      <span className="text-dark me-2">28</span>Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
              {/* card */}
              <div className="card h-100 card-lift">
                {/* card body */}
                <div className="card-body">
                  {/* heading */}
                  <div
                    className="d-flex justify-content-between align-items-center
              mb-3"
                  >
                    <div>
                      <h4 className="mb-0">Teams</h4>
                    </div>
                    <div
                      className="icon-shape icon-md bg-primary-soft text-primary
                rounded-2"
                    >
                      <AiOutlineTeam size={20} />
                    </div>
                  </div>
                  {/* project number */}
                  <div className="lh-1">
                    <h1 className="  mb-1 fw-bold">12</h1>
                    <p className="mb-0">
                      <span className="text-dark me-2">1</span>Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          {/* row  */}
          <div className="row ">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
              {/* card  */}
              <div className="card">
                {/* card header  */}
                <div className="card-header ">
                  <h4 className="mb-0">Active Projects</h4>
                </div>
                {/* table  */}
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <table className="table text-nowrap mb-0 table-centered table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Project name</th>
                          <th>Hours</th>
                          <th>Priority</th>
                          {/* <th>Members</th> */}
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              className="d-flex
                      align-items-center"
                            >
                              <div>
                                <div>
                                  <img
                                    src="assets/images/svg/brand-logo-1.svg"
                                    alt="dash ui - bootstrap 5 admin dashboard template"
                                  />
                                </div>
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className=" mb-1">
                                  {" "}
                                  <a href="#!" className="text-inherit">
                                    Dropbox Design System
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>34</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              Medium
                            </span>
                          </td>
                          
                          <td className=" text-dark">
                            <div className="float-start me-3">15%</div>
                            <div className="mt-2">
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow={15}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* card footer  */}
                <div className="card-footer text-center">
                  <a href="#!" className="btn btn-primary">
                    View All Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
              <div className="card h-100">
                {/* card header  */}
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">My Task </h4>
                  
                </div>
                {/* table  */}
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <table className="table text-nowrap mb-0 table-centered table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Deadline</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckOne"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckOne"
                              >
                                Design a FreshCart Home page
                              </label>
                            </div>
                          </td>
                          <td>Today</td>
                          <td>
                            <span className="badge badge-success-soft">
                              Approved
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckTwo"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckTwo"
                              >
                                Dash UI Dark Version Design
                              </label>
                            </div>
                          </td>
                          <td>Yesterday</td>
                          <td>
                            <span className="badge badge-danger-soft">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckThree"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckThree"
                              >
                                Dash UI landing page design
                              </label>
                            </div>
                          </td>
                          <td>16 Sept, 2023</td>
                          <td>
                            <span className="badge badge-warning-soft">
                              In Progress
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckFour"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckFour"
                              >
                                Next.js Dash UI version
                              </label>
                            </div>
                          </td>
                          <td>23 Sept, 2023</td>
                          <td>
                            <span className="badge badge-success-soft">
                              Approved
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckFive"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckFive"
                              >
                                Develop a Dash UI Laravel
                              </label>
                            </div>
                          </td>
                          <td>20 Sept, 2023</td>
                          <td>
                            <span className="badge badge-danger-soft">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckSix"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckSix"
                              >
                                Coach home page design
                              </label>
                            </div>
                          </td>
                          <td>12 Sept, 2023</td>
                          <td>
                            <span className="badge badge-success-soft">
                              Approved
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckSeven"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckSeven"
                              >
                                Develop a Dash UI Laravel
                              </label>
                            </div>
                          </td>
                          <td>11 Sept, 2023</td>
                          <td>
                            <span className="badge badge-danger-soft">
                              Pending
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row  */}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
