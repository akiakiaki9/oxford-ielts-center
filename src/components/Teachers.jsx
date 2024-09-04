import React from 'react';
import { TEACHERS } from '../utils/teachers';
import { Link } from 'react-router-dom';

export default function Teachers() {
  return (
    <div className='teachers'>
      <div className="subtitle-sar">
        <p>Experience Team Member</p>
        <div className='subtitle-sar__div'></div>
        <h1>Meet our professionals</h1>
      </div>

      <div className="teachers-blok">
        {TEACHERS.map(teacher => (
          <div key={teacher.id} className='teacher'>
            <Link to={`/teachers/${teacher.id}`}>
              <img className='teachers__img' src={teacher.image} alt="" />
            </Link>
            <b className='teachers__b'>{teacher.title}</b>
            <p className='teachers__p'>{teacher.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};