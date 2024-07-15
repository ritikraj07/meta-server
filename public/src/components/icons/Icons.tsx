import { IconButton, IconButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface iconProps extends Omit<IconButtonProps, "onClick"> {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  onClick: () => void;
}

function Icons({ Icon, onClick, ...props }: iconProps) {
  return (
    <IconButton onClick={onClick} {...props}>
      <Icon
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.5)",
          },
        }}
      />
    </IconButton>
  );
}

export default Icons;
