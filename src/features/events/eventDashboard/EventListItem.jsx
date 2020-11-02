import React from "react";
import {
  Button,
  Icon,
  Item,
  List,
  Segment
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event}) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={event.hostPhotoURL}
            ></Item.Image>
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description content={event.hostedBy} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <Icon name="clock" /> {event.date}
        <Icon name="marker" style={{ marginLeft: 10 }} /> {event.venue}
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map( attendee => 
              <EventListAttendee attendee={ attendee } key={attendee.id} />
          )}
        </List>
      </Segment>

      <Segment clearing>
          <span>{event.description}</span>
        <Button color="teal" content="View" floated="right" />
      </Segment>

    </Segment.Group>
  );
}
