import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Marketing } from './components/Marketing';
import { Faq } from './components/Faq';
import { Convince } from './components/Convince';
import { Trend } from './components/Trending';
import Footer from './Footer';
import ScrollAnimationComponent from './ScrollAnimationComponent';

export default function App() {
  return (
    <div className='main'>
        <div className='black-box'></div>
        <div className="hello">
        <ScrollAnimationComponent><Navbar/></ScrollAnimationComponent>
        <ScrollAnimationComponent><Marketing/></ScrollAnimationComponent>
        <ScrollAnimationComponent><Trend/></ScrollAnimationComponent>
        <ScrollAnimationComponent><Convince/></ScrollAnimationComponent>
        <ScrollAnimationComponent><Faq/></ScrollAnimationComponent>
        <ScrollAnimationComponent><Footer/></ScrollAnimationComponent>
        
        </div>
        
    </div>
  );
}


