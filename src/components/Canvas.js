import React, { useCallback, useState, useEffect } from "react";
import { useSvgDrawing } from "react-hooks-svgdrawing";
import LZString from 'lz-string';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale'

export default function Canvas() {
  const [itemsList, setItemsList] = useState(localStorage.length);
  const [renderRef, draw] = useSvgDrawing({
    penWidth: 10,
    penColor: "#e00",
    delay: 50,
  });

  const handleSave = useCallback(() => {
    const string = draw.getSvgXML();
    const compressed = LZString.compressToUTF16(string);
    const saveDate = format(new Date(), 'dd MMMM yyyy, hh:mm:ss', { locale: ru })
    localStorage.setItem(saveDate, compressed);
    setItemsList(localStorage.length);
  }, [draw])

  const renderSavedItems = Object.keys(localStorage).map((item, key) => (
    <li key={key} className='container__list-item'>{item}</li>
  ))

  useEffect(() => {
  }, [itemsList, renderSavedItems])

  return (
    <>
      <div className='container'>
        <h1 className='container__title'>Нарисуйте часы </h1>
        <div ref={renderRef} className="canvas" />
        <div className='container__actions'>
          <button className='button' onClick={handleSave}>Сохранить</button>
          <button className='button' onClick={draw.undo}>Отменить</button>
          <button className='button' onClick={draw.clear}>Очистить</button>
        </div>
        <ul className='container__list'>
          <h2 className='container__list-title'>Сохраненные записи</h2>
          {renderSavedItems}
        </ul>
      </div>
    </>
  );
}