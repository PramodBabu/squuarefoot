const Home = () => {

    return(
        <div className='home'>
            <a className="img-effect" href="/developers">
                <img src="https://www.projectmanager.com/wp-content/uploads/2020/02/200210_Blog_Feature_Construction_Schedule.jpg"/>
                <div class="overlay">
                    <p>Developers</p>
                </div>
            </a>
            <a className="img-effect" href="/promoters">
                <img src="https://media.timeout.com/images/105885485/image.jpg" />
                <div class="overlay">
                    <p>Promoters</p>
                </div>
            </a>
            <a className="img-effect" href="/interior">
                <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg" />
                <div class="overlay">
                    <p>Interiors</p>
                </div>
            </a>
        </div>
    )
}

export default Home;