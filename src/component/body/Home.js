import React, { useEffect, useRef, useState } from 'react';
import PostDetail from '../body/in_detail/detail_posts';
import pD1 from '../../acsset/image/postD1.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../styles/home.css'
import HighLightHome from './in-home/highliight-home';
import NewLetter from './in-home/newLetter';
import LatesVideo from './in-home/lates_video';
import { connect } from 'react-redux';
import PostEndHome from './in-home/postEndHome';
import OutsandingHome from './in-home/outsanding_home';
import SpotLight from './in-home/spotlight';
import BasedOn from './in-home/basedOn/basedOn';
import data from './datalifestyle';
import BannerHome from './in-home/bannerHome';
import { actLifeStyle } from '../../actions';
function Home(props) {
    const [bgDarkHome, setbgDarkHome] = useState(null);
    useEffect(() => {
        props.dispatchLifeStyle(data);
        if (props.darkmode == 'active dark mode') {
            setbgDarkHome('bg-dark-mode-home');
        } else {
            setbgDarkHome(null);
        }
    }, [props.darkmode]);

    // +++show-mess++
    const [showMess, setShowMess] = useState('disnone-mess');
    const handleClickMess = (event) => {
        if (showMess == 'show-mess') {
            setShowMess('disnone-mess');
        } else {
            setShowMess('show-mess');
            event.stopPropagation();
        }
    }

    const useOutsideClickMess = (callback) => {
        const refdrmess = useRef();

        useEffect(() => {
            const handleItemClickMess = (event) => {
                if (refdrmess.current && !refdrmess.current.contains(event.target)) {
                    callback();
                }
            };
            document.addEventListener('click', handleItemClickMess);

            return () => {
                document.removeEventListener('click', handleItemClickMess);
            };
        }, [refdrmess]);

        return refdrmess;
    };
    const handleClickOutsideMess = () => {
        setShowMess('disnone-mess');
    };
    const refmess = useOutsideClickMess(handleClickOutsideMess);


    return (
        <div className={` ${bgDarkHome} home `}>

            <div className='container'>
                {/* <div className='tab-mess'>
                    <div ref={refmess} className={`mess-show ${showMess}`}>
                        <a href='#'> <button className='btn-messenger-icon'>
                            <i className="fa-brands fa-facebook-messenger"></i>
                        </button>
                        </a>
                        <a href='#'>
                            <button className='btn-facebook-icon'>
                                <i className="fa-brands fa-facebook"></i>
                            </button>
                        </a>
                    </div>
                    <button className='btn-mess-icon' onClick={(event) => handleClickMess(event)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </div> */}
                <div className='row'>
                    <OutsandingHome />
                    <HighLightHome />
                </div>
                <NewLetter />
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <LatesVideo />
                </AnimationOnScroll>
            </div>
            <SpotLight bgDarkHome={bgDarkHome} />
            <BasedOn bgDarkHome={bgDarkHome} />
            <BannerHome bgDarkHome={bgDarkHome} />
            <PostEndHome bgDarkHome={bgDarkHome} />
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLifeStyle: (data) => {
            dispatch(actLifeStyle(data))
        }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        darkmode: state.darkmode
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);