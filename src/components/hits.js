import { React } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

// const Hits = ({ hits }) => {
//   const { classes } = hits;

//   return (
//     <List className={classes.root}>
//       {
//         hits.map(hit => (
//           <ListItem key={hit.objectID}>
//             <Avatar>
//               <ImageIcon />
//             </Avatar>
//             <ListItemText primary={hit.frontmatter.title} secondary="Jan 7, 2014" />
//           </ListItem>
//         ))
//       }
//     </List>
//   )

// };


const Hits = connectHits(({ hits }) => (
  // const { classes } = hits;

  // return (
    <List className={hits.root}>
      {
        hits.map(hit => (
          <ListItem key={hit.objectID}>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary={hit.frontmatter.title} secondary="Jan 7, 2014" />
          </ListItem>
        ))
      }
    </List>
  // )

));
export default Hits;