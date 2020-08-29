import React, { useState, useEffect} from 'react';
import data from '../../data/data.json';
import './Course.css';
import Subjects from '../Subjects/Subjects';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() =>{
        setCourses(data);
    })
    const [cart, setCart] = useState([]);
    const handleAddCourse = (subjects) => {
        const newCart = [...cart, subjects];
        setCart(newCart);
    }
    return (
        <div className = "container">
            <div className="course-container">
                {
                    courses.map(course => <Subjects 
                        handleAddCourse = {handleAddCourse}
                        subjects= {course}
                        ></Subjects>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Course;