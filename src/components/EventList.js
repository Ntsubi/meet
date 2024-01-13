import Event from './Event';

const EventList = ({ events }) => {  //the events prop comes from the mock data populated in line 12 of EventList.test.js
  return (
    <ul id="event-list">
      {events ? events.map(event => <Event event={event} key={event.id} />) : null}
    </ul>
  );
}

export default EventList;