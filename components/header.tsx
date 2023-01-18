import React from "react";
import { Grid, Typography } from "@mui/material";
import { HeadingProps } from "@/utils/interface";

import styles from "@/styles/Home.module.css";

const Heading: React.FC<HeadingProps> = (props) => {
  const { title } = props;
  return (
    <Grid>
      <Typography variant="h5" className={styles.chatHeading}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Heading;
