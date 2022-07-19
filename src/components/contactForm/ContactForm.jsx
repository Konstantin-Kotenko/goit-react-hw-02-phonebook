import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: ${({ theme }) => theme.space.ml};
`;

const Lable = styled.label`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Input = styled.input`
  margin-top: ${({ theme }) => theme.space.ml};
`;

const Button = styled.button`
  margin-top: ${({ theme }) => theme.space.ml};
  width: 130px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export class ContactForm extends Component {
  state = { name: '', number: '' };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Lable htmlFor={this.nameId}>
          Name
          <Input
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Lable>
        <Lable htmlFor={this.numberId}>
          Number
          <Input
            id={this.numberId}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Lable>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
