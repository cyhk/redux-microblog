import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import FormInput from '../../components/FormInput'


describe("FormInput component", () => {
  test('renders a form', () => {
    const { getByText } = render(<FormInput name="testNumberInput" type="number"/>);
    expect(getByText('TestNumberInput')).toBeInTheDocument();
  });

  
});
