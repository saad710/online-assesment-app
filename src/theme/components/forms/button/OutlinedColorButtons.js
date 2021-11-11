import { Box, Button } from "@mui/material";
import React from "react";
import BaseCard from "../../base-card/BaseCard";

const OutlinedColorButtons = () => {
  return (
    <BaseCard
      title="Outlined Color Buttons"
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "inline",
            sm: "flex",
            lg: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Primary
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Secondary
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Error
        </Button>
        <Button
          variant="outlined"
          color="warning"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Warning
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Success
        </Button>
      </Box>
    </BaseCard>
  );
};

export { OutlinedColorButtons };
