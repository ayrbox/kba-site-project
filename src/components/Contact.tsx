import * as React from 'react';

import styled from '@emotion/styled';
import Container from '@components/Container';
import { Formik } from 'formik';
import { object, string } from 'yup';

export const SectionWrapper = styled.section`
  background: #486295;
  padding: 70px 0;
  color: #000;
`;

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const ContactForm = styled.div`
  flex: 50%;
  color: #fff;
  padding: 50px;
`;

export const Content = styled.div`
  line-height: 1.5;
  color: #fff;
  & p {
    color: #fff;
  }
  flex: 50%;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  & .error {
    color: orange;
    font-weight: bold;
  }
`;

export const InputField = styled.input`
  padding: 8px 16px;
  font-size: 1em;
  type: ${(props) => props.type};
`;

export const MessageField = styled.textarea`
  padding: 8px 16px;
  font-size: 1em;
  width: 100%;
  name: ${({ name }) => name};
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    padding: 8px 16px;
    border: none;
    background-color: #b1eee9;
    font-size: 1em;
  }
`;

const formInitialValue = {
  name: '',
  email: '',
  message: '',
};

const formSchema = object().shape({
  name: string().min(3).required('Name is required.'),
  email: string().email().required('Email is required to contact you.'),
  message: string().required('Message is required.'),
});

const Contact = () => {
  const handleFormSubmit = () => {
    alert('Prototype: This site is just a prorotype');
  };

  return (
    <SectionWrapper>
      <Container>
        <FormWrapper>
          <Content>
            <p>
              <strong>
                Your feedback is extremely valuable to us and we at KBA
                Cardiology would love to hear from you.
              </strong>
            </p>
            <p>
              Please use the “contact us” form below if you have any questions
              or feedback concerning our services. We will try to respond to
              your message within 24 hours. Alternatively, you can also email
              directly at contact@kba-cardiology.com
            </p>
          </Content>
          <ContactForm>
            <Formik
              initialValues={formInitialValue}
              onSubmit={handleFormSubmit}
              validationSchema={formSchema}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <FormField>
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>
                    <InputField
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </FormField>

                  <FormField>
                    <label htmlFor="email">
                      Your Email Address <span>*</span>
                    </label>
                    <InputField
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                    />

                    {errors.email && <p className="error">{errors.email}</p>}
                  </FormField>

                  <FormField>
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>
                    <MessageField
                      name="message"
                      rows={8}
                      id="message"
                      value={values.message}
                      onChange={handleChange}
                    ></MessageField>

                    {errors.message && (
                      <p className="error">{errors.message}</p>
                    )}
                  </FormField>
                  <FormField>
                    <SubmitButton>
                      <button type="submit">Send</button>
                    </SubmitButton>
                  </FormField>
                </form>
              )}
            </Formik>
          </ContactForm>
        </FormWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;
