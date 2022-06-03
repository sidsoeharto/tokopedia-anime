import { createRoot } from 'react-dom/client';
import renderer from "react-test-renderer";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createSerializer } from '@emotion/jest'

import AppButton from '../AppButton';

expect.addSnapshotSerializer(createSerializer())

afterEach(cleanup)

describe('AppButton Test', () => {
  it('renders button correctly', () => {
    const {getByTestId} = render(<AppButton title={'Test Button'}/>)
    expect(screen.getByTestId('app-button')).toHaveTextContent('Test Button');
  })
  it('should matches snapshot', () => {
    const tree = renderer.create(
      <AppButton 
        title={'test'}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})