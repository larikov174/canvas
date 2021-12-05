import React from 'react';
import CanvasDraw from 'react-canvas-draw';

function Container() {
  return (
    <div className='container'>
      <h1 className='header'>Нарисуйте часы </h1>
      <CanvasDraw
        className='canv'
        canvasWidth={768}
        canvasHeight={768}
        hideGrid={true}
        useBgImage={true}
        imgSrc= 'https://i.ibb.co/YW7yDZW/clock.png'
        brushColor='rgba(155,12,60,0.3)'
      />
      <button className='saveButton'>Сохранить</button>
      <ul className='savedItemsList'>
        <span className='listHeader'>Сохраненные записи</span>
        <li key={1} className='listItem'>
          date
        </li>
      </ul>
    </div>
  );
}

export default Container;
