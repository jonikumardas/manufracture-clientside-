import React from 'react';
import Bloges from './Bloges';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Optimizing performance in a React application",
            description: "In React applications is single page apliction we can set route And route never do reload and it just change state its fast UI by default. Keeping component state local where necessary Memoizing React components to prevent unnecessary re-rendersCode-splitting in React using dynamic importWindowing or list virtualization in ReactLazy loading images in React ",
        },
        {
            id: 2,
            title: "Different ways to manage a state",
            description: "There are four main types of state you need to properly manage in your React apps Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state, Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error stateURL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL",
        },
        {
            id: 3,
            title: "Prototypical inheritance work",
            description: "Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming",
        },
        {
            id: 4,
            title: "Implement a search to find products by name",
            description: "Use filter if you want to find all items in an array that meet a specific condition. Use find if you want to check if that at least one item meets a specific condition. Use includes if you want to check if an array contains a particular value. Use indexOf if you want to find the index of a particular item in an array.",
        },
        {
            id: 5,
            title: "What is a unit test? Why should write unit tests",
            description: "A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. This is a function, a subroutine, a procedure, or a property in most programming languages and Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently"


        }, {
            id: 6,
            title: "Why we do not set the state directly in React",
            description: "We do not set the state directly in React beceouse When i directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.",
        },
    ]
    return (
        <div className='bg-slate-700'>
            <h1 className='text-4xl text-amber-600 text-center py-5'> Blogs about react </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    blogs.map(blog => <Bloges key={blog.id}
                        blog={blog}
                    ></Bloges>)

                }
            </div>

        </div>
    );
};

export default Blog;