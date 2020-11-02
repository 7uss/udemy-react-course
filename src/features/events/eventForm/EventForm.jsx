import React from 'react';
import { Button, Form, Header, Input, Item, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}){

    return (
        <Segment clearing>
            <Item>
                <Header content='Create new Event'/>
                <Form>
                    <Form.Field>
                        <Input type='text' placeholder='Event Title' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='text' placeholder='Category' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='text' placeholder='Description' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='text' placeholder='City' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='text' placeholder='Venue' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='date' />
                    </Form.Field>
                    <Button type='submit' content='Submit' floated='right' positive />
                    <Button onClick={() => setFormOpen(false)} type='submit' content='Cancel' floated='right'/>
                </Form>
            </Item>
        </Segment>
    );
}