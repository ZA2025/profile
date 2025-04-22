import styles from './Timeline.module.scss';

const Timeline = () => {
    return (
        <div className='timelineContainer'>
            <div className="timeline">
                <h2 className="timelineTitle">Experience + Education</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">Freelancer - Front end developer</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2024</h2>
                <div className="timeline__item">
                    <h3 className="timeline__title">Netcel - Front end developer</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2021 - 2023</h2>
                <div className="timeline__item">
                    <h3 className="timeline__title">Dotmatics - Front end developer</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2016 – 2021</h2>
                
                <div className="timeline__item">
                    <h3 className="timeline__title">BHN Network - Front end developer</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2013- 2016</h2>

                <div className="timeline__item">
                    <h3 className="timeline__title">Freelancer Web Developer</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2012 - 2013</h2>
                
                <div className="timeline__item">
                    <h3 className="timeline__title">University of Bedfordshire - Master’s in Business Information Systems</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2011 - 2012</h2>
                
                <div className="timeline__item">
                    <h3 className="timeline__title">University of Bedfordshire - BSc in Internet Computing (First Class)</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">2009 - 2011</h2>
                
                <div className="timeline__item">
                    <h3 className="timeline__title">University of Bedfordshire - Foundation degree in Software Development</h3>
                </div>
                <h2 className="timeline__item timeline__item--year">Start - 2009</h2>
            </div>
        </div>
    );
}

export default Timeline;