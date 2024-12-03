import CardContent from "@mui/material/CardContent";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import { CardProps as MuiCardProps } from "@mui/material/Card";

type CardProps = MuiCardProps & {
  title: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  cardAction?: React.ReactNode;
  children: React.ReactNode;
};

export function Card({
  title,
  subtitle,
  headerAction,
  cardAction,
  children,
  ...restProps
}: CardProps) {
  return (
    <MuiCard {...restProps}>
      <CardHeader
        title={title}
        subheader={subtitle}
        action={headerAction}
      ></CardHeader>
      <CardContent>{children}</CardContent>
      {cardAction && <CardActions>{cardAction}</CardActions>}
    </MuiCard>
  );
}
