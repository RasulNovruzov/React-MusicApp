import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import './Main.css';
import * as apis from '../../api/api';
import { Link } from 'react-router-dom';
import Search from './Search/Search';

function MainPage() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    })

    useEffect(() => {
        apis.getAlbums().then(item => setAlbums({ albums: item }));
    }, [])

    function renderAlbums(item) {
        return albums.albums && albums.albums.length ?
            albums.albums.map((item, index) => (
                <div key={index} className="col-md-3 mb-2 cardfor">
                    <div className="card mt-3 allplayer p-1" style={{ backgroundImage: 'url(' + item.album.cover_big + ')' }} >
                        <div className="card-body player-info">

                            <div class="d-flex bd-highlight title-info">
                                <div class="bd-highlight">{item.title}</div>
                                <div class="ml-auto bd-highlight"> {parseInt((item.duration) / 60)}:{item.duration - (parseInt(Math.ceil(item.duration) / 60) * 60)}</div>
                            </div>

                            <p className="aritst-name">{item.artist.name}</p>

                            <div className="icons">
                                <Link to={`/details/${item.album.id}`} className="link"><i class="fas fa-compact-disc text-white"></i> </Link>
                                <a onClick={() => this.addToFavorites(item)} className="link"><i className="fas fa-star text-danger"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            ))
            : <p>LOADING</p>
    }


    return (
        <div>
            <div className="landing">
                <p className="welcome_text">WELCOME TO ...</p>

                <div id="wrap">
                    
                    <Search />
                </div>
                
            </div>

            <div className="intro">
                <div className="intro_text">
                    <h1 className="hide">
                        <span className="text">Music App</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">Develop by NovDev</span>
                    </h1>
                </div>
            </div>

            <div className="slider"></div>

            <div className="container-fluid p-5">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            {renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default MainPage;