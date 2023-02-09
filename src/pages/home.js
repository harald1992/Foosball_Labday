import './home.css';
import React, { useState } from 'react';

const getDates = (offset, week) => {
    offset = parseInt(offset) + (7 * parseInt(week));
    let d = new Date();
    let day = d.getDay();
    let diff = d.getDate() - day + (day === 0 ? -6 : 1);
    let date = new Date(new Date(d.setDate(diff)).getTime() + 60 * 60 * 24 * 1000 * offset);
  return [date.toLocaleDateString("en-US", {weekday: "short"}), (date.toLocaleDateString("nl-NL") === new Date().toLocaleDateString("nl-NL")) ? 'today' : '', `${date.getDate()}-${date.getMonth() + 1}`];
}

function Day(props) {
  let dates = getDates(props.offset, props.week)

    return (
      <div>
        <input type="radio" name="date" id={dates[2]} value={dates[2]}/>
        <label for={dates[2]}>
          <p className={dates[1]}>{dates[0]}<span>{dates[2]}</span></p>
        </label>
      </div>
    )
}

function Home() {
  const [week, setWeek] = useState(0);
  const days = [0,1,2,3,4];
  return (
    <div className="home">
      <div className="home-header">
        
        <button onClick={() => setWeek(week - 1)}>{'<'}</button>
        {days.map((day) => <Day offset={day} week={week} /> )}
        <button onClick={() => setWeek(week + 1)}>{'>'}</button>

      </div>
    </div>
  );
}

export default Home;