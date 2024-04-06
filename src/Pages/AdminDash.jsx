import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminHcard from '../Components/AdminHcard'
import {   Row, } from 'react-bootstrap';
import { allHostelAPI, allHostelnewAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import {  isrefreshContext } from '../context/ContextShare';

function AdminDash({ sethostelid }) {
    const { isRefreshToken,setisRefreshToken } = useContext(isrefreshContext);
  const navigate = useNavigate();
  const [allHostel, setAllHostel] = useState([]);
  
 


  const getAllHostel = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const result = await allHostelnewAPI( reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllHostel(result.data);
      }
    }
  };

  useEffect(() => {
    getAllHostel();
  }, [isRefreshToken]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('existingOwner');
    // setIsHomeToken(false);
    navigate('/');
  };
  return (
    <div><Container> 
                <Button
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          onClick={handleLogout}
          style={{ marginLeft: '95%' }}
          variant="danger"
        >
          <i class="fa-solid fa-share-from-square"></i> <b>Logout</b>{' '}
        </Button>{' '}
        
        <Row className="container">
          {allHostel.length > 0 ? (
            allHostel.map((item) => (
              <Col md={3} key={item.id}>
        <AdminHcard hostel={item} sethostelid={sethostelid} />

        </Col>
            ))
          ) : (
            <center>
              <p className="mt-5 text-danger" style={{ fontSize: '40px', fontWeight: '600' }}>
                Oops!... No Hostel Found
              </p>
              <img
                className="mt-5"
                style={{ width: '40%' }}
                src="http://www.areaeurotrak.cat/img/error-404.png"
                alt=""
              />
            </center>
          )}
                </Row>
                {/* Pagination
        {allHostel.length > hostelsPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {[...Array(Math.ceil(allHostel.length / hostelsPerPage)).keys()].map((number) => (
                <Pagination.Item
                  key={number + 1}
                  active={number + 1 === currentPage}
                  onClick={() => handlePageChange(number + 1)}
                >
                  {number + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        )} */}
        </Container></div>
  )
}

export default AdminDash