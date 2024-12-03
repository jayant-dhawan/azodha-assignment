import MuiContainer, { ContainerProps } from "@mui/material/Container";

export function Container({ children, sx, ...restProps }: ContainerProps) {
  return (
    <MuiContainer
      {...restProps}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        ...sx,
      }}
    >
      {children}
    </MuiContainer>
  );
}
