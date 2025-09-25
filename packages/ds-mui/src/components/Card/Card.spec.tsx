import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { getByText } = render(
      <Card
        id="card-1"
        title="Card Title"
        subTitle="Card SubTitle"
        description="Card Description"
        onBtnClick={(id) => console.log(id)}
      />
    );

    expect(getByText('Card Title')).toBeInTheDocument();
    expect(getByText('Card SubTitle')).toBeInTheDocument();
    expect(getByText('Card Description')).toBeInTheDocument();
  });

  it('should call onBtnClick when the button is clicked', () => {
    const mockOnBtnClick = vi.fn();
    const { getByRole } = render(
      <Card
        id="card-1"
        title="Card Title"
        subTitle="Card SubTitle"
        description="Card Description"
        onBtnClick={mockOnBtnClick}
      />
    );

    const button = getByRole('button', { name: /favorite/i });
    button.click();
    expect(mockOnBtnClick).toHaveBeenCalledWith('card-1');
  });
});
