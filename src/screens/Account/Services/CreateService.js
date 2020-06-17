import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';
import { Container, Section } from '../../Container';
import { Form } from '../../../components/index';
import { useFormInput } from '../../../helpers/formValidation';

const { FormInput } = Form;
const CreateService = () => {
    const { input: name, handleUserInput: setName, error: nameErr, isValid: nameIsValid } = useFormInput("Service name");
    const { input: desc, handleUserInput: setDesc, error: descErr, isValid: descIsValid,  } = useFormInput("Description");
    const { input: price, handleUserInput: setPrice, error: priceErr, isValid: priceIsValid } = useFormInput("Price");
    const { input: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid,  } = useFormInput("password");
    const validateAllField = nameIsValid && descIsValid && priceIsValid && passIsValid
    return (
        <Container>
            <Section>
                <FormInput label="Service name" placeholder="Enter service name" value={name} onChange={setName} err={nameErr} />
            </Section>
        </Container>
    );
}

export default CreateService;
