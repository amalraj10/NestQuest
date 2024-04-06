import React, { useContext, useEffect, useState } from 'react';
import HostelsUcards from '../Components/HostelsUcards';
import { Button, Col, Container, Row, Pagination } from 'react-bootstrap';
import { allHostelAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { isHomeContext } from '../context/ContextShare';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination as SwiperPagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

function Home({ sethostelid }) {
  const { isHomeToken, setIsHomeToken } = useContext(isHomeContext);
  const navigate = useNavigate();
  const [allHostel, setAllHostel] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hostelsPerPage] = useState(12); // Number of hostels per page

  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = allHostel.slice(indexOfFirstHostel, indexOfLastHostel);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getAllHostel = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const result = await allHostelAPI(searchKey, reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllHostel(result.data);
      }
    }
  };

  useEffect(() => {
    getAllHostel();
  }, [searchKey]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('existingUser');
    setIsHomeToken(false);
    navigate('/');
  };

  return (
    <div>
      <Container>
        <center>
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            style={{ color: '#1e1e38', fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {' '}
            <span style={{ color: '#218b7a' }}>D</span>iscover <span style={{ color: '#218b7a' }}>Y</span>our{' '}
            <span style={{ color: '#218b7a' }}>P</span>erfect <span style={{ color: '#218b7a' }}>H</span>aven
          </h1>{' '}
        </center>{' '}
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
        <center>
          {' '}
          <input
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            value={searchKey}
            style={{ boxShadow: '2 5px 4px rgba(0, 0, 0, 0.1)' }}
            className='form-control w-25 border dark '
            placeholder='Search Your District'
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
          />
        </center>
        <Swiper
          data-aos="fade-up-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, SwiperPagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/sibBu9H0TGGPnbbI5zu2gQ/zostel-mussoorie-mall-road-20231127111124.jpg" />
         
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/t1WMsgJMSNeyRxS2kKmdkA/zostel-mussoorie-mall-road-20231127111514.jpg" />
          
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/UGzxYDf1RRaaJT94iVBFUQ/zostel-mussoorie-mall-road-20231127111510.jpg" />
        
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/s23Vee3wT4ueGPDWWgL7aw/zostel-mussoorie-mall-road-20231127111137.jpg" />
           
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/N43ZDKg2RQ6B1ZFL85tTtg/zostel-mussoorie-mall-road-20231127111216.jpg" />
           
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/7eydmIdFQtuMNz1_KYF1Pg/zostel-mussoorie-mall-road-20231127111130.jpg" />
         
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/96jvOJYwSbyY-3imtj5Abw/zostel-mussoorie-mall-road-20231127111520.jpg" />
         
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/fWM-TRlrQ8uPmzTLntLilQ/zostel-mussoorie-mall-road-20231127111139.jpg" />
          
          </SwiperSlide>
          <SwiperSlide>
            <img style={{borderRadius:"10px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/tQ7C8ToKSViazmju59tk0g/zostel-mussoorie-mall-road-20231127111316.jpg" />
          
          </SwiperSlide>
        </Swiper>
        <Row className="container">
          {currentHostels.length > 0 ? (
            currentHostels.map((item) => (
              <Col md={3} key={item.id}>
                <HostelsUcards hostel={item} sethostelid={sethostelid} />
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
        {/* Pagination */}
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
        )}
      </Container>
    </div>
  );
}

export default Home;
