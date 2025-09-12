import { render } from '@testing-library/react';

import SiulCoreDs from './ds';

describe('SiulCoreDs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiulCoreDs />);
    expect(baseElement).toBeTruthy();
  });
});
