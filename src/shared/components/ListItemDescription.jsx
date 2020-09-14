import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core/';
import { CssGridContainer, CssGridItem, NoteDescription } from '../../shared/components';

const ListItemDescription = (props) => {
  const { notation, notes, enharmonicNotes, onSelectItem, active } = props;
  const classes = useStyles(active)();
  const { itemContainer } = classes;
  const showEharmonic = Boolean(enharmonicNotes.length);

  return (
    <ListItem button className={itemContainer} onClick={onSelectItem}>
      <CssGridContainer templateCol="minmax(40% 1fr)">
        <CssGridItem justify="start">
          <Typography align="left" color="primary" component="span">
            {`${notation}: `}
          </Typography>
          {/* <Typography align="left" component="span" variant="body2"> */}
          {notes.map((note, idx) => (
            <NoteDescription
              key={`${note}-${idx}`}
              note={note}
              activeNote={false}
              showNote
              showOnlyDescription
              noteColor={'black'} // TODO
            />
          ))}
          {/* </Typography> */}
        </CssGridItem>
        {showEharmonic && (
          <Typography variant="body2" color="primary">
            {`Enharmonic: ${enharmonicNotes.join(', ')}`}
          </Typography>
        )}
      </CssGridContainer>
    </ListItem>
  );
};

const useStyles = (active = false) =>
  makeStyles((theme) =>
    createStyles({
      itemContainer: {
        minHeight: 62,
        borderRadius: 4,
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderWidth: active ? 3 : 1,
        borderColor: active ? theme.palette.primary.main : theme.palette.grey['300'],
        '&:hover': {
          borderStyle: 'solid',
          borderColor: theme.palette.primary.main,
        },
        '& *': {
          fontWeight: active ? 'bold' : 'normal',
        },
      },
    })
  );

ListItemDescription.propTypes = {
  notation: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  enharmonicNotes: PropTypes.arrayOf(PropTypes.string),
  onSelectItem: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default ListItemDescription;
