import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createStyles, makeStyles, Theme, useTheme,
} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fullScreenContainer: {
    padding: '1.25rem',
  },
  fullMarginBottom: {
    marginBottom: theme.spacing(1),
  },
  fullActionButtonsContainer: {
    marginTop: theme.spacing(3),
  },
}));

interface DialogActionButton {
  onClick:any;
  color: 'primary' | 'secondary';
  buttonText: string;
  variant: 'contained' | 'outlined'
}

interface CustomDialogProps {
    isOpen: boolean;
    handleClose: any;
    dialogTitle: string;
    children: React.ReactElement;
    ariaLabelledby: string;
    dialogActionButtons?: DialogActionButton[];
    dialogDescription?: string;
}

const CustomDialog = (props: CustomDialogProps) => {
  const {
    isOpen, handleClose, dialogTitle, ariaLabelledby, dialogActionButtons,
  } = props;

  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const renderActionButtons = (isFull?: boolean) => dialogActionButtons?.map(
    (dialogActionButton: DialogActionButton) => (
      <Button
        key={`${ariaLabelledby}-${dialogActionButton.buttonText}`}
        onClick={dialogActionButton.onClick}
        color={dialogActionButton.color}
        fullWidth={isFull}
        className={isFull ? classes.fullMarginBottom : ''}
        variant={dialogActionButton.variant}
        disableElevation
      >
        {dialogActionButton.buttonText}
      </Button>
    ),
  );

  const renderFullScreen = () => {
    const {
      children,
    } = props;
    return (
      <>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {dialogTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.fullScreenContainer}>
          {children}
          <Box className={classes.fullActionButtonsContainer}>
            {renderActionButtons(true)}
          </Box>
        </Box>

      </>
    );
  };

  const renderNormal = () => {
    const {
      children, dialogDescription,
    } = props;

    return (
      <>
        <DialogTitle id={ariaLabelledby}>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogDescription && (
          <DialogContentText>
            {dialogDescription}
          </DialogContentText>
          )}
          {children}
        </DialogContent>
        <DialogActions>
          {renderActionButtons()}
        </DialogActions>
      </>
    );
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby={ariaLabelledby}
      fullScreen={fullScreen}
    >
      {fullScreen ? renderFullScreen() : renderNormal()}

    </Dialog>
  );
};

CustomDialog.defaultProps = {
  dialogDescription: '',
  dialogActionButtons: [],
};

export default CustomDialog;
