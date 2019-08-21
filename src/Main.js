import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const action = msg => () => console.log(msg);

const styles = theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '30%', // 16:9
  },
});

const MaterialComponent = ({ classes, variant }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image="https://source.unsplash.com/800x400?cities,nature"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        H2 Typography
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant={variant} onClick={action('Default')}>
        Default
      </Button>
      <Button
        size="small"
        color="primary"
        variant={variant}
        onClick={action('primary')}
      >
        primary
      </Button>
      <Button
        size="small"
        color="secondary"
        variant={variant}
        onClick={action('secondary')}
      >
        secondary
      </Button>
      <Button
        size="small"
        disabled
        variant={variant}
        onClick={action('disabled')}
      >
        disabled
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles, { withTheme: true })(MaterialComponent);
