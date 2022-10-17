import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from "moment";
import '../../styles/tech.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
function Tech(props) {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=12&playlistId=PLiaWrX4zmrTl06dABoXI1jRSYXnGeXYUV&key=AIzaSyCppdqprCrC2hyXSC7D8_SOjIOoswCTCo0')
            .then(data => {
                setdata(data.data.items)


            })
    }, [])
    // +++
    const [bgDarkTech, setbgDarkTech] = useState(null);

    useEffect(() => {

        if (props.darkmode == 'active dark mode') {
            setbgDarkTech('bg-dark-mode-tech');
        } else {
            setbgDarkTech(null)
        }
    }, [props.darkmode]);

    // +++
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 9;
    const pagesVisited = pageNumber * usersperPage;

    const pageCount = Math.ceil(data.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    const displayUsers = data.slice(pagesVisited, pagesVisited + usersperPage)
        .map((ite, i) => (
            <div className='col-md-4 tech-item' key={i}>
                {/* <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${ite.snippet.resourceId.videoId}`} /> */}
                <Iframe url={`https://www.youtube.com/embed/${ite.snippet.resourceId.videoId}`}
                    // width="640px"
                    // height="320px"
                    id=""
                    className="embed-responsive-item"
                    display="block"
                    position="relative" />
                <p className='tech-item-date' >{moment(ite.snippet.publishedAt).format("MMMM Do YYYY")}{" "}</p>
                <h3 className='tech-item-title'>{ite.snippet.title}</h3>
            </div>

        ))
    return (
        <div className={`${bgDarkTech} tech-list`}>
            <div className='container'>
                <div className='tech-top'>
                    <h2>Tech List</h2>
                    <div className='tech-paginate'>
                        <ReactPaginate
                            previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                            nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                            pageCount={pageCount}
                            onPageChange={onPageChange}
                            containerClassName={'paginationBttns'}
                            previousLinkClassName={'previousBttn'}
                            nextLinkClassName={'nextBttn'}
                            disabledClassName={'paginationDisabled'}
                            activeClassName={'paginationActive'}
                        />
                    </div>
                </div>

                <div className='row col-mb-50'>
                    {displayUsers}

                </div>

            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        darkmode: state.darkmode,

    };
}
export default connect(mapStateToProps)(Tech);