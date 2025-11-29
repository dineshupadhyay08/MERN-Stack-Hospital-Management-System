import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const { isAuthenticated, admin } = useContext(Context);

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  //-------------------------------
  // FETCH ALL APPOINTMENTS
  //-------------------------------
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        console.log("Error fetching appointments:", error);
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  //-------------------------------
  // FETCH ALL DOCTORS
  //-------------------------------
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.message);
        setDoctors([]);
      }
    };
    fetchDoctors();
  }, []);

  //-------------------------------
  // UPDATE APPOINTMENT STATUS
  //-------------------------------
  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );

      // Update frontend UI instantly
      setAppointments((prev) =>
        prev.map((a) => (a._id === appointmentId ? { ...a, status } : a))
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //-------------------------------
  // AUTH CHECK
  //-------------------------------
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        {/* TOP BANNER */}
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Welcome Back,</p>
                <h5>{admin && `${admin.firstName} ${admin.lastName}`}</h5>
              </div>
              <p>
                Manage appointments, track patient visits, and monitor
                registered doctors — all from your powerful PBM Care Admin
                Panel.
              </p>
            </div>
          </div>

          {/* Total Appointments */}
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{appointments.length}</h3>
          </div>

          {/* Registered Doctors */}
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctors.length}</h3>
          </div>
        </div>

        {/* APPOINTMENT TABLE */}
        <div className="banner">
          <h5>Appointments</h5>

          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>

            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>

                    <td>{appointment.appointment_date}</td>

                    <td>
                      {appointment.doctor
                        ? `${appointment.doctor.firstName} ${appointment.doctor.lastName}`
                        : "Unknown"}
                    </td>

                    <td>{appointment.department}</td>

                    <td>
                      <select
                        className={
                          appointment.status === "Pending"
                            ? "value-pending"
                            : appointment.status === "Accepted"
                            ? "value-accepted"
                            : "value-rejected"
                        }
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending" className="value-pending">
                          Pending
                        </option>
                        <option value="Accepted" className="value-accepted">
                          Accepted
                        </option>
                        <option value="Rejected" className="value-rejected">
                          Rejected
                        </option>
                      </select>
                    </td>

                    <td>
                      {appointment.hasVisited ? (
                        <GoCheckCircleFill className="green" />
                      ) : (
                        <AiFillCloseCircle className="red" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No Appointments Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
