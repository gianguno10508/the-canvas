import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from "moment";
import '../../styles/tech.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
function Tech() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLiaWrX4zmrTl06dABoXI1jRSYXnGeXYUV&key=AIzaSyCppdqprCrC2hyXSC7D8_SOjIOoswCTCo0')
            .then(data => {
                setdata(data.data.items)


            })
    }, [])
    // console.log(data);
    const result = data.map((item) => {
        return { title: item.snippet.resourceId.videoId }
    })



    const [courses, setCourses] = useState([])
    // const [vid, uid] = useState('')
    // const [title, utit] = useState('')
    // useEffect(() => {
    //     setCourses(result)
    //     // uid(result.video)
    //     // utit(result.title)
    // }, [])
    // console.log(courses);
    // const render = () => {
    //     return (
    //         <>
    //             {result.map((item, i) => (
    //                 <iframe key={i} className="embed-responsive-item" src={`https://www.youtube.com/embed/${item.title}`} />
    //             ))}

    //         </>
    //     )
    // }
    return (
        <div className='tech-list '>

            <div className='container'>
                <h2>Tech List</h2>
                <div className='row col-mb-50'>
                    {data.map((ite, i) => (
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
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Tech;