import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Icon, ListItem, Typography } from '@material-ui/core/';
import { CssGridContainer, CssGridItem, NoteDescription } from '../../shared/components';
import { showEnharmonicNotes } from '../utils';

const ListItemDescription = (props) => {
  const {
    type,
    notation,
    notes,
    subNotation,
    subDescription,
    onSelectItem,
    active,
    enharmonicNotes,
  } = props;
  const classes = useStyles(active)();
  const { itemContainer } = classes;
  const showSubDescription = Boolean(subDescription.length);
  const shouldRenderEnharmonicNotes = showEnharmonicNotes(notes, enharmonicNotes);
  const isTypeChord = type === 'chord';

  const renderNote = (note, idx) => {
    return (
      <NoteDescription
        key={`${note.note}-${idx}`}
        note={`${note.note}${idx === notes.length - 1 ? '' : ', '}`}
        activeNote={false}
        showNote
        showOnlyDescription
        noteColor={note.noteColor}
      />
    );
  };

  const renderEnharmonicNotes = () => {
    if (shouldRenderEnharmonicNotes) {
      return enharmonicNotes.map((note, idx) => renderNote(note, idx));
    }
  };

  return (
    <ListItem button className={itemContainer} onClick={onSelectItem}>
      <CssGridContainer templateCol="1f" repeatCol={false}>
        <CssGridItem>
          <Typography align="left" color="textPrimary" component="span">
            {`${notation}: `}
          </Typography>
          {renderEnharmonicNotes()}
          {shouldRenderEnharmonicNotes && isTypeChord && '= '}
          {notes.map((note, idx) => renderNote(note, idx))}
        </CssGridItem>
        <CssGridItem justify="start">
          {showSubDescription && (
            <div>
              <Typography variant="body2" color="textPrimary" align="left" component="span">
                {`${subNotation}: `}
              </Typography>
              <Typography variant="body2" color="primary" align="left" component="span">
                {subDescription}
              </Typography>
            </div>
          )}
        </CssGridItem>
      </CssGridContainer>
    </ListItem>
  );
};

const useStyles = (active = false) =>
  makeStyles((theme) =>
    createStyles({
      itemContainer: {
        width: '100%',
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
  type: PropTypes.oneOf(['chord', 'scale']),
  enharmonicNotes: PropTypes.arrayOf(PropTypes.string),
};

export default ListItemDescription;
