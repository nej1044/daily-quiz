import styled from "@emotion/styled";
import { Calendar } from "antd";

const MyCalendar = styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

const CalendarPage = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  return (
    <MyCalendar>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </MyCalendar>
  );
};

export default CalendarPage;
