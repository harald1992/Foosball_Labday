import './home.css';
import React, { useState } from 'react';

import faChevronRight from "../assets/chevron-right.svg";
import faChevronLeft from "../assets/chevron-left.svg";

const getDates = (offset, week) => {
    offset = parseInt(offset) + (7 * parseInt(week));
    let d = new Date();
    let day = d.getDay();
    let diff = d.getDate() - day + (day === 0 ? -6 : 1);
    let date = new Date(new Date(d.setDate(diff)).getTime() + 60 * 60 * 24 * 1000 * offset);
  return [date.toLocaleDateString("en-US", {weekday: "short"}), (date.toLocaleDateString("nl-NL") === new Date().toLocaleDateString("nl-NL")) ? 'today' : '', `${date.getDate()}-${date.getMonth() + 1}`,date.toLocaleDateString("nl-NL")];
}

function Day(props) {
  let dates = getDates(props.offset, props.week)
  const changeHandler = () => {
  console.log('changed')
    props.setDate(dates[3])
}
    return (
      <div>
        <input type="radio" name="date" id={dates[2]} value={dates[2]} onChange={ changeHandler}  />
        <label for={dates[2]} >
          <p className={dates[1]}>{dates[0]}<span>{dates[2]}</span></p>
        </label>
      </div>
    )
}

function Home() {
  const [week, setWeek] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const days = [0, 1, 2, 3, 4];
  
  const setMyDate = (date) => {
    console.log('test');
    setDate(date);
  } 

  return (
    <main className="home">
      <div className="home-header">
        <button onClick={() => setWeek(week - 1)}><img src={faChevronLeft}  alt="Previous"/></button>
        {days.map((day, index) => <Day key={index} setDate={setMyDate} offset={day} week={week} /> )}
        <button onClick={() => setWeek(week + 1)}><img src={faChevronRight} alt="Next"/></button>
      </div>
        <select onChange={(event) => setTime(event.target.value)}>
            <option value="12:00 - 12:15" selected>12:00 - 12:15</option>
            <option value="12:15 - 12:30">12:15 - 12:30</option>
            <option value="12:30 - 12:45">12:30 - 12:45</option>
            <option value="12:45 - 13:00">12:45 - 13:00</option>
            <option value="16:30 - 16:45">16:30 - 16:45</option>
            <option value="16:45 - 17:00">16:45 - 17:00</option>   
        </select>

          <div>
        <h3>Reservation details:</h3>
        <p><b>Date:</b> {date}</p>
        <p><b>Time:</b> {time}</p>
        </div>

          <button type="submit">
              Submit 
          </button>
    </main>
  );
}

export default Home;