import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



 const tileData = [
     {
         img: "https://www.vfairs.com/wp-content/uploads/2018/09/3.1.png",
         title: "teste"
     },
     {
        img: "https://www.vfairs.com/wp-content/uploads/2018/09/1a.png",
        title: "teste"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPsQOBHxieC-SYYo8NfyTRqu7xjV7NhaR8hA&usqp=CAU",
        title: "teste"
    },
 ]

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop: 30}}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}