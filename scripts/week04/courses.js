// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
  };

const courses = [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
]
  
const sections = document.querySelector("#sections")
courses.forEach(course => {
    let row = document.createElement("tr")
    let num_td = document.createElement("td")
    num_td.innerText = course.sectionNum

    let room_td = document.createElement("td")
    room_td.innerText = course.roomNum

    let enrolled_td = document.createElement("td")
    enrolled_td.innerText = course.enrolled

    let days_td = document.createElement("td")
    days_td.innerText = course.days

    let instructor_td = document.createElement("td")
    instructor_td.innerText = course.instructor

    row.appendChild(num_td)
    row.appendChild(room_td)
    row.appendChild(enrolled_td)
    row.appendChild(days_td)
    row.appendChild(instructor_td)
    sections.appendChild(row)
})