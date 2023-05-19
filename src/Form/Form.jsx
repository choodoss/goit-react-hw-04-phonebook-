import PropTypes from 'prop-types';
import { FormSection, Label, Input, SubmitBt } from './Form.styled'
import generateId from '../tools/idRandomize'
import { Component } from 'react';

const inputIdName = generateId()
const inputIdNTel = generateId()

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    hendleInput = ({ currentTarget: { value, name } }) => {
        this.setState({ [name]: value });
    };

    hendleSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        this.props.onSubmit(formData);
        this.setState({ name: '', number: '' });
    };

    render() {
        const hendleInput = this.hendleInput;
        const { name, number } = this.state;

        const form =
            <FormSection onSubmit={this.hendleSubmitForm}>
                <Label htmlFor={inputIdName}>Name</Label>
                <Input id={inputIdName}
                    onChange={hendleInput}
                    type="text"
                    name="name"
                    pattern="[\p{L} '-]+"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    required
                />
                <Label htmlFor={inputIdNTel}>Phone</Label>
                <Input
                    id={inputIdNTel}
                    onChange={hendleInput}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <SubmitBt type='submit'>add contact</SubmitBt>
            </FormSection>
        return form;
    }

};

export default Form;

Form.propTypes = {
    hendleSubmitForm: PropTypes.func,

}