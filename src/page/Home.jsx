import '../assets/css/home_module.css';
import React, { useState, useContext } from 'react';
import { useTheme } from '../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TaskManager from '../components/TaskManager';
import Draggable from 'react-draggable';
export default function Home() {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="home-header">
        <div className='theme-icon d-flex align-items-center gap-3' aria-label="Toggle Dark Mode">
          <button className='theme-toggle-btn' onClick={toggleTheme}>
            {theme === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </button>

          {theme === 'dark' ? <h3> Dark&nbsp;Mode </h3> : <h3> Light&nbsp;Mode </h3>}
        </div>
        <div>
          <h1 >Welcome to Smart Task Dashboard</h1>
          <MyComponent />
          <p>Manage your tasks efficiently and stay organized with our intuitive dashboard.</p>
        </div>
      </div>
      <main>
        {/* Main content goes here */}
        <TaskManager />
      </main>
    </>
  )
}

function MyComponent() {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <h2 ref={nodeRef} style={{
        backgroundBlendMode: 'multiply',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(2px)',
        // WebkitBackdropFilter: 'blur(2px)',
        borderRadius: '5px',
        color: 'palegreen',
        border: '1px solid #ccc',
        padding: '10px',
        display: 'inline-block',
        cursor: 'move',
      }} >Drag Me</h2>
    </Draggable>
  );
}