import {
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
} from '@mui/material';
import { COLOR_PRIMARY } from '@luispmoraisc/ds-tokens';
import type { ICardProps } from './types';
import * as S from './Card.styled';

export default function Card(props: ICardProps) {
  const { id, title, subTitle, description, onBtnClick, ...rest } = props;

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onBtnClick(id);
  };

  return (
    <S.Card {...rest} key={id}>
      <CardHeader
        title={props.title}
        subheader={props.subTitle}
        sx={{ color: COLOR_PRIMARY }}
      />
      <CardContent>{props.description}</CardContent>
      <CardActions>
        <Tooltip title="Favorite">
          <IconButton onClick={handleClick}>
            <span aria-label="Favorite" role="img">
              ❤️
            </span>
          </IconButton>
        </Tooltip>
      </CardActions>
    </S.Card>
  );
}
