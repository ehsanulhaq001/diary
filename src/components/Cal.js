import React, {
  Component,
  //  createRef
} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import Page from "../containers/page";

class Cal extends Component {
  // constructor() {
  //   super();
  //   this.pageRef = createRef();
  //   this.state = {
  //     diary: [
  //       {
  //         date: new Date(),
  //         page: <Page ref={this.pageRef} />,
  //       },
  //     ],
  //   };
  // }

  // updatePage = (page, date, newDate) => {
  //   let newDiary = this.state.diary;
  //   let i = newDiary.findIndex((ele) => ele.date === date);
  //   if (i === -1) {
  //     newDiary.push({
  //       date: newDate,
  //       page: page,
  //     });
  //   } else newDiary[i].page = page;
  //   this.setState({
  //     diary: newDiary,
  //   });
  // };

  // formatDate = (date) => {
  //   return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  // };

  // onChange = (value) => {
  //   let today;
  //   if (this.state.diary.length === 1) {
  //     today = new Date();
  //   }
  //   value = this.formatDate(value);
  //   today = this.formatDate(today);
  //   console.log(value, today);
  //   // let page = this.pageRef.current;
  //   // this.updatePage(page, minDate, value);
  //   // console.log(this.state.diary);
  // };

  // renderPage = () => {
  //   return <Page ref={this.pageRef} />;
  // };

  render() {
    return (
      <div>
        <Calendar
        // onChange={this.onChange}
        //  date={this.date}
        />
        {/* {this.state.diary.map((page) => this.renderPage(page))} */}
      </div>
    );
  }
}
export default Cal;
