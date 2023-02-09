import './home.css';

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const daysInMonth = (month, year) => {
    return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  }
  
const generateMonths = () => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const months = []

    for (let i = 0; i < 12; i++) {
        const date = new Date(currentYear, currentMonth + i, 1)
        const year = date.getFullYear()
        const month = date.getMonth()
        const monthName = date.toLocaleString('default', { month: 'long' })
        const days = daysInMonth(month, year)

        months.push({
            heading: `${monthName} ${year}`,
            index: i,
            days,
            month,
            year,
        })
    }
    return months
}

function Home() {
    const data = generateMonths()



  return (
    <div className="Home">
          <header className="Home-header">
              
            <p>{data[0].heading}</p>
      </header>
    </div>
  );
}

export default Home;
