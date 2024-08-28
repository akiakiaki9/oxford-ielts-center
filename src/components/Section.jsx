import React, { useState, useEffect } from 'react';
import stats1 from '../images/stats1.svg'
import stats2 from '../images/stats2.svg'
import stats3 from '../images/stats3.svg'

export default function Section() {
    const [lessonsCount, setLessonsCount] = useState(0);
    const [studentsCount, setStudentsCount] = useState(0);
    const [workshopsCount, setWorkshopsCount] = useState(0);

    useEffect(() => {
        animateNumber(2891, setLessonsCount);
        animateNumber(251, setStudentsCount);
        animateNumber(46, setWorkshopsCount);
    }, []);

    const animateNumber = (endValue, setValue) => {
        const duration = 4000;
        const stepTime = 10;
        const totalSteps = duration / stepTime;
        let step = 0;

        const timer = setInterval(() => {
            step += 1;
            const progress = step / totalSteps;
            const increment = endValue * (1 - Math.exp(-5 * progress)) + 1;
            setValue(Math.min(Math.round(increment), endValue));

            if (step >= totalSteps) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    return (
        <div className='section'>
            <div className="section-blok">
                <div className="section-blok__container">
                    <img src={stats1} alt="" />
                    <div>
                        <div className='section__number'>{lessonsCount}</div>
                        <p className='section__title'>Пройденных занятий</p>
                    </div>
                </div>
                <div className="section-blok__container">
                    <img src={stats2} alt="" />
                    <div>
                        <div className='section__number'>{studentsCount}</div>
                        <p className='section__title'>Cтудентов на данный момент</p>
                    </div>
                </div>
                <div className="section-blok__container">
                    <img src={stats3} alt="" />
                    <div>
                        <div className='section__number'>{workshopsCount}</div>
                        <p className='section__title'>Пройденных мастер классов</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
