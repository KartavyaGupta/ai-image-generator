// TextInput.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0 4px;
  text-transform: uppercase;
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary + 70};
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};

  &:focus {
    outline: none;
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handleChange, // <- the prop you pass in
  textArea = false,
  rows = 4,
  cols = 30, // HTML expects "cols" if you decide to use it
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={textArea ? rows : undefined} // only set rows/cols for textarea
          cols={textArea ? cols : undefined}
          placeholder={placeholder}
          value={value}
          onChange={handleChange} // <- typo fixed
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
