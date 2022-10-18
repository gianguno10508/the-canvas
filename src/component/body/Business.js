import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'jquery';
import axios from 'axios';
import { connect } from 'react-redux';
import { actBusiness } from '../../actions';
import img1 from '../../img/1.jpg';
import '../../styles/busines.css';
function Business(props) {
    // const dataBusiness = [
    //     {
    //         id: 1,
    //         source:
    //         {
    //             name: 'abc'
    //         },
    //         urlToImage: img1,
    //         title: 'On World Art Day, try out this activity for the whole family',
    //         publishedAt: 'March 21, 2020',
    //         description: 'Today’s freebie is a set of 60 beautiful multimedia icons designed by Carlotta Govi',
    //     },
    //     {
    //         id: 2,
    //         source:
    //         {
    //             name: 'a'
    //         },
    //         urlToImage: img1,
    //         title: 'On World Art Day, try out this activity for the whole family',
    //         publishedAt: 'March 21, 2020',
    //         description: 'Today’s freebie is a set of 60 beautiful multimedia icons designed by Carlotta Govi',
    //     },

    // ]


    const [bgDarkBusiness, setbgDarkBusiness] = useState(null);
    useEffect(() => {

        if (props.darkmode == 'active dark mode') {
            setbgDarkBusiness('bg-dark-mode-business');
        } else {
            setbgDarkBusiness(null);
        }
    }, [props.darkmode]);

    //  ++++   
    const [dataBusiness, setDataBusiness] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=98e67ec21de6409482c6689c5b8a25fb')
            .then((data) => {
                setDataBusiness(data.data.articles)
            }, [])
    })
    const allCategories = ["all", ...new Set(dataBusiness.map((p) => p.source.name))];
    const [menuItems, setMenuItems] = useState(dataBusiness);
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (e, category) => {
        e.preventDefault();
        if (category === "all") {
            return setMenuItems(dataBusiness);
        }
        const newItems = dataBusiness.filter((item) => item.source.name === category);
        setMenuItems(newItems);
    };
    // +++
    const [showDropdown, setShowDropDown] = useState('disnone');
    const handleItemClickDropdown = (event) => {
        if (showDropdown == 'show') {
            setShowDropDown('disnone');
        } else {
            setShowDropDown('show');
            event.stopPropagation();
        }
    };
    const useOutsideClick = (callback) => {
        const refdr = useRef();

        useEffect(() => {
            const handleItemClickDropdown = (event) => {
                if (refdr.current && !refdr.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleItemClickDropdown);

            return () => {
                document.removeEventListener('click', handleItemClickDropdown);
            };
        }, [refdr]);

        return refdr;
    };
    const handleClickOutsideDropdown = () => {
        setShowDropDown('disnone');
    };
    const refdropdown = useOutsideClick(handleClickOutsideDropdown);

    return (
        <div className={`${bgDarkBusiness} business-post pt-5`}>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex'>
                        <div className={`flex-grow-1 `}>
                            <h3>All Business Posts</h3>
                        </div>
                        <div className="dropdown dropdown-langs category-business">
                            <button className="btn dropdown-toggle px-1" onClick={(event) => handleItemClickDropdown(event)} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Category Post
                            </button>
                            <div ref={refdropdown} className={`dropdown-menu dropdown-menu-end  ${showDropdown} `} aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                {allCategories.map((ite, ind) => (
                                    <a href="#" className={`dropdown-lifestyle-item `} key={ind}
                                        onClick={(e) => filterItems(e, ite)}
                                    >{ite}</a>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='row readPostBusiness readingHistory-row col-mb-50 mt-5'>
                        {menuItems.length > 0 ?
                            menuItems.map((v, i) => (
                                <div className='col-12 readingH_item' key={i}>
                                    <div div className='row' >
                                        <div className='col-md-6 mb-0 post_entry_img '>
                                            <a href='#'>
                                                <img src={v.urlToImage} alt="d" />
                                            </a>
                                        </div>
                                        <div className='col-md-6 post_entry_title'>
                                            <div className='post_entry_cate'>
                                                <a href='#'>{v.source.name}</a>
                                            </div>
                                            <h3>
                                                <a href="#" className='color-underline stretched-link'>{v.title}</a>
                                            </h3>
                                            <div className='post_entry_time'>
                                                <p>{v.publishedAt}</p>
                                            </div>
                                            <div className='post_readingH'>
                                                <p>{v.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) :
                            dataBusiness.map((it, i) => (
                                <div className='col-12 readingH_item' key={i}>
                                    <div className='row'>
                                        <div className='col-md-6 mb-0 post_entry_img '>
                                            <a href='#'>
                                                <img src={it.urlToImage} alt="d" />
                                            </a>
                                        </div>
                                        <div className='col-md-6 post_entry_title'>
                                            <div className='post_entry_cate'>
                                                <a href='#'>{it.source.name}</a>
                                            </div>
                                            <h3>
                                                <a href="#" className='color-underline stretched-link'>{it.title}</a>
                                            </h3>
                                            <div className='post_entry_time'>
                                                <p>{it.publishedAt}</p>
                                            </div>
                                            <div className='post_readingH'>
                                                <p>{it.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    );
}


const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return {
        darkmode: state.darkmode,

    };
}
export default connect(mapStateToProps)(Business);
