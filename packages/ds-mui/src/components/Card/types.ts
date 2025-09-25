import { CardProps } from '@mui/material/Card';

export interface ICardProps extends CardProps {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  onBtnClick: (id: string) => void;
}
