import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { TEACHERS } from '../utils/teachers';
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function TeachersDetail() {
    const { id } = useParams();
    const teacher = TEACHERS.find((t) => t.id === parseInt(id));
    const [studentsCount, setStudentsCount] = useState(0);

    useEffect(() => {
        if (teacher) {
            let start = 0;
            const end = teacher.students;
            if (start === end) return;

            const duration = 3000; // Общая продолжительность анимации (в миллисекундах)
            const stepTime = 10; // Интервал обновления анимации
            const totalSteps = duration / stepTime;

            let step = 0;

            const timer = setInterval(() => {
                step += 1;
                const progress = step / totalSteps;
                const increment = end * (1 - Math.exp(-5 * progress)) + 1; // Добавляем 1 для корректного отображения
                setStudentsCount(Math.min(Math.round(increment), end));

                if (step >= totalSteps) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    }, [teacher]);

    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <div className='pagename'>
                <div className="pagename-blok">
                    <h1>{teacher ? teacher.title : 'Преподаватель не найден'}</h1>
                    <p>
                        <Link to={'/'} className='pagename-parent'>Home</Link>
                        <span className='pagename-drop'>/</span>
                        <span className='pagename-child'>{teacher ? teacher.title : 'Не найдено'}</span>
                    </p>
                </div>
            </div>
            {teacher ? (
                <div className='teacherdet'>
                    <div className="teacherdet-blok">
                        <div className='teacherdet-blok__container'>
                            <div className="teacherdet-blok__container-1">
                                <img src={teacher.image} alt={`Photo of ${teacher.title}`} />
                            </div>
                            <div className='teacherdet-blok__container-2'>
                                <h1 className='teacherdet__title'>{teacher.title}</h1>
                                <br />
                                <b className='teacherdet__age'>{teacher.age} y.o, {teacher.category}</b>
                                <br />
                                <p className='teacherdet__students'>Up to <span>{studentsCount}</span> students trained</p>
                            </div>
                        </div>
                        <div className="teachersdet-blok__container">
                            <h2>Biography</h2>
                            <p>{teacher.body} {teacher.body} {teacher.body} {teacher.body} {teacher.body} {teacher.body}</p>
                            <br />
                            <div className="teacherdet-blok__container-links">
                                <h2>Social networks:</h2>
                                <div>
                                    <a href={teacher.telegramLink}><FaTelegramPlane className='teacherdet__link' /></a>
                                    <a href={teacher.instagramLink}><FaInstagram className='teacherdet__link' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Преподаватель не найден.</div>
            )}
            <Footer1 />
            <Footer2 />
        </div>
    )
}