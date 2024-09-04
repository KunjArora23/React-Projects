/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from '../components/Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Testimonial = (props) => {
    // Retrieve reviews from props
    let reviews = props.reviews;
    console.log(reviews);
    
    // State to keep track of the current review index
    const [index, setIndex] = useState(0);

    // Function to handle left button click
    function leftHandler() {
        if (index <= 0) {
            setIndex(reviews.length - 1); // Loop to the last review
        } else {
            setIndex(index - 1); // Go to the previous review
        }
    }

    // Function to handle right button click
    function rightHandler() {
        if (index >= reviews.length - 1) {
            setIndex(0); // Loop to the first review
        } else {
            setIndex(index + 1); // Go to the next review
        }
    }

    // Function to handle "Surprise Me" button click
    function surpriseHandler() {
        let randIndex = Math.floor(Math.random() * (reviews.length)); // Generate a random index
        setIndex(randIndex); // Set the index to the random index
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-700 flex flex-col justify-center items-center p-10'>
            <Card review={reviews[index]} /> {/* Render the Card component with the current review */}
            <div className='flex text-3xl mt-5 gap-3 text-violet-400  font-bold'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftHandler}>
                    <FaChevronLeft /> {/* Left button */}
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightHandler}>
                    <FaChevronRight /> {/* Right button */}
                </button>
            </div>
            <div>
                <button className='mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={surpriseHandler}>
                    Surprise Me {/* "Surprise Me" button */}
                </button>
            </div>
        </div>
    )
}
export default Testimonial
