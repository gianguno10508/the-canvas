import React, { useEffect, useState } from 'react';
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


    return (
        <div className={` ${bgDarkHome} home `}>
            <div className='container'>
                <div className='row'>
                    <OutsandingHome />
                    <HighLightHome />
                </div>
                <AnimationOnScroll initiallyVisible={true} duration={2} animateIn="animate__swing">
                    <NewLetter />
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <LatesVideo />
                </AnimationOnScroll>
            </div>
            <SpotLight bgDarkHome={bgDarkHome} />
            <AnimationOnScroll animateIn="animate__tada">
                <BasedOn bgDarkHome={bgDarkHome} />
            </AnimationOnScroll>
            <BannerHome bgDarkHome={bgDarkHome} />
            <PostEndHome bgDarkHome={bgDarkHome} />
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLifeStyle:(data)=>{
            dispatch(actLifeStyle(data))
        }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        darkmode: state.darkmode
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);