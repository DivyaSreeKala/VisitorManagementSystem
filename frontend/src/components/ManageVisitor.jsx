import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';


function ManageVisitor() {
  const [visitors, setVisitors] = useState([]);
  const[selectedUser, setSelectedUser] = useState({});
  const [formData, setFormData] = useState({
    status:'',
    timeIn:'',
    timeOut:''
  });
  useEffect(()=> {
    const token = localStorage.getItem('token');
      axios.get('http://localhost:3002/visitor',{
        headers: {
          Authorization: `Bearer ${token}`
      }
      }).then((res) => {
        setVisitors(res.data)
      }).catch((err) => {
        console.log(err)
      })
  },[])
  const handleFilterSort = () => {
    // Implement filter and sort functionality
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedVisitors = [...visitors];
    updatedVisitors[index].status = newStatus;
    setVisitors(updatedVisitors);
  };

  const handleDelete = (id) => {
    // const updatedVisitors = visitors.filter((_, i) => i !== index);
    // setVisitors(updatedVisitors);
    const token = localStorage.getItem('token');
    axios.delete('http://localhost:3002/visitor/delete/'+id,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      alert("visitor deleted successfully");
      window.location.reload()
    }).catch((err) => {
      alert("error in deltetion");
      console.log(err);
    })
  };

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewClick = (visitor) => {
        setSelectedUser(visitor);
        setIsViewModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsViewModalOpen(false);
        setSelectedUser(null);
    };

    // Close modal when clicking outside of it
    const handleOutsideClick = (e) => {
        if (e.target.className.includes('modal')) {
            handleCloseModal();
        }
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditClick = (visitor) => {
        setSelectedUser(visitor);
        // if (selectedUser) {
          setFormData({
              status: visitor.status,
              timeIn: visitor.timeIn,
              timeOut: visitor.timeOut
          });
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
      setIsEditModalOpen(false);
        setSelectedUser(null);
    };

    // Close modal when clicking outside of it
    const handleOutsideEditClick = (e) => {
        if (e.target.className.includes('modal')) {
          handleCloseEditModal();
        }
    };

    


    const handleChange = (e) => {
      console.log(formData)
      setEdit({...formData ,[e.target.name]: e.target.value}); // Update state with selected value
  };
  const onEdit = () => {
    console.log(formData)
  }


  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <div className="w-full max-w-[1391px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <section className="flex flex-col px-11 pt-9 pb-36 mx-auto mt-20 w-full font-bold bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-start self-end max-w-full text-center w-[932px]">
                <h2 className="text-2xl tracking-wide text-black">Visitor Details</h2>
                <button
                  onClick={handleFilterSort}
                  className="flex gap-2.5 justify-center items-center px-2.5 py-5 mt-1.5 text-sm tracking-normal text-blue-900 rounded-xl bg-neutral-100 min-h-[59px]"
                >
                  <span className="self-stretch my-auto">Filter & Sort</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c5bb4b9b1d526023b9e2da708c8b219c5ddeac2d6a71e7bd04d6cbc505803c?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                </button>
              </div>
              <div className="flex flex-wrap gap-5 justify-between ml-16 max-w-full text-sm tracking-normal text-center text-black w-[560px]">
                <button className="px-8 py-3.5 bg-neutral-100 max-md:pl-5">Department V</button>
                <button className="px-11 pt-3 pb-4 bg-neutral-100 max-md:px-5">Status V</button>
                <button className="px-8 py-3.5 bg-neutral-100 max-md:pl-5">Department V</button>
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <table className="w-full text-sm tracking-normal text-black">
                  <thead>
                    <tr className="text-neutral-400">
                      <th className="text-left">Visitors Name</th>
                      <th className="text-left">Department</th>
                      <th className="text-left">Purpose</th>
                      {/* <th className="text-left">ID Proof</th> */}
                      <th className="text-left">Status</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitors.map((visitor, index) => (
                      <tr key={index} className="border-t border-zinc-100">
                        <td className="py-4">{visitor.fullName}</td>
                        <td>{visitor.department}</td>
                        <td>{visitor.purposeOfVisit}</td>
                        {/* <td>{visitor.purpose}</td>
                        <td>{visitor.purpose}</td>
                        <td>{visitor.purpose}</td> */}

                        {/* <td>{visitor.idProof}</td> */}
                        <td>
                          <span
                            className={`inline-block px-2 py-1 text-center rounded ${
                              visitor.status === "checked-in" || visitor.status === "approved" ? "bg-teal-500 bg-opacity-20" : "bg-zinc-400 bg-opacity-20"
                            }`}
                          >
                            {visitor.status}
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-1.5">
                            <button className="px-4 py-1 rounded bg-teal-500 bg-opacity-20" onClick={() => handleViewClick(visitor)}>View</button>
                            <button
                              onClick={() => handleEditClick(visitor)}// visitor.status === "Checked In" ? "Approved" : "Checked In")
                              className="px-4 py-1 rounded bg-teal-500 bg-opacity-20"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(visitor._id)}
                              className="px-4 py-1 rounded bg-teal-500 bg-opacity-20"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
 {/* Modal for displaying visitor details */}
        {isViewModalOpen && (
                <div 
                    className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" 
                    onClick={handleOutsideClick}
                >
                    <div className="modal-content bg-white p-6 rounded shadow-lg w-100">
                        <span 
                            className="close cursor-pointer text-gray-500 hover:text-gray-700 float-right" 
                            onClick={handleCloseModal}
                        >
                            &times;
                        </span>
                        {selectedUser && (
                            <>
                                <h2 className="text-lg font-bold mb-2">User Details</h2>
                                <p><strong>Name:</strong> {selectedUser.fullName}</p>
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                                <p><strong>Department:</strong> {selectedUser.department}</p>
                                <p><strong>Purpose:</strong> {selectedUser.purposeOfVisit}</p>
                                <p><strong>Status:</strong> {selectedUser.status}</p>
                                <p><strong>ID Proof Type:</strong> {selectedUser.idType}</p>
                                <p><strong>ID:</strong> <a href={selectedUser.idProof} target="_blank" >{selectedUser.idProof}</a></p>
                            </>
                        )}
                    </div>
                </div>
            )}
 {/* Modal for editing visitor details */}
{isEditModalOpen && (
                <div 
                    className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" 
                    onClick={handleOutsideEditClick}
                >
                    <div className="modal-content bg-white p-6 rounded shadow-lg w-96">
                        <span 
                            className="close cursor-pointer text-gray-500 hover:text-gray-700 float-right" 
                            onClick={handleCloseEditModal}
                        >
                            &times;
                        </span>
                        {selectedUser && (
                            <>
                                <h2 className="text-lg font-bold mb-2">Edit Visitor</h2>
                                <strong>Name:</strong><input type="text" name="fullName" id="fullName" disabled value ={selectedUser.fullName} /><br/>
                                <strong>Email:</strong><input type="text" name="fullName" id="fullName" disabled value ={selectedUser.email} /><br/>
                                <strong>Department:</strong><input type="text" name="fullName" id="fullName" disabled value ={selectedUser.department} /><br/>
                                <strong>Purpose:</strong><input type="text" name="fullName" id="fullName" disabled value ={selectedUser.purposeOfVisit} /><br/>
                                <strong>Status:</strong>
                                {/* <input type="text" name="fullName" id="fullName" value ={selectedUser.status} /><br/> */}
                                <select name="status" id="status" value={selectedUser.status} onChange={handleChange} required>
                                <option value="" disabled>Select Status</option>
                                <option value="Approve">Approve</option>
                                <option value="Reject">Reject</option>
                            </select>
                                <strong>Time In:</strong><input type="datetime-local" name="fullName" id="fullName" value ={selectedUser.timeIn} onChange={handleChange} /><br/>
                                <strong>Time Out:</strong><input type="datetime-local" name="fullName" id="fullName" value ={selectedUser.timeOut} onChange={handleChange} /><br/>

                                <button type="button"
                              className="px-4 py-1 rounded bg-teal-500 bg-opacity-20"
                              // onClick={}
                            >
                              Edit
                            </button>

                                {/* <p><strong>ID Proof Type:</strong> {selectedUser.idType}</p>
                                <p><strong>ID:</strong> <a href={selectedUser.idProof} target="_blank" >{selectedUser.idProof}</a></p> */}
                            </>
                        )}
                    </div>
                </div>
            )}

      </div>
    </div>
  );
}

export default ManageVisitor;