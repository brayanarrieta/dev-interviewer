import React from 'react';
import {
  TextField,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CustomDialog from '../components/CustomDialog';

const QUESTION_FIELD_DEFAULT_VALUE = '';
const ANSWER_FIELD_DEFAULT_VALUE = '';
const QUESTION_FIELD_MIN_LENGTH = 20;
const ANSWER_FIELD_MIN_LENGTH = 50;

const useStyles = makeStyles((theme: Theme) => createStyles({
  formField: {
    marginBottom: theme.spacing(2),
  },
}));

interface AddQuestionDialogProps {
    isOpen: boolean;
    handleClose: any;
    handleAddQuestion: any;
}

const AddQuestionDialog = (props: AddQuestionDialogProps) => {
  const { isOpen, handleClose } = props;
  const { handleSubmit, control, reset } = useForm();
  const { t } = useTranslation();
  const classes = useStyles();

  const onClose = () => {
    handleClose();
    reset({ question: QUESTION_FIELD_DEFAULT_VALUE, answer: ANSWER_FIELD_DEFAULT_VALUE });
  };

  const onSubmit = (data: {question: string, answer: string}) => {
    props.handleAddQuestion(data);
    onClose();
  };

  const answerRequiredMessage = t('FIELD_IS_REQUIRED', { fieldName: t('ANSWER_FIELD') });
  const questionRequiredMessage = t('FIELD_IS_REQUIRED', { fieldName: t('QUESTION_FIELD') });
  const answerMinLengthMessage = t('FIELD_MIN_LENGTH', {
    fieldName: t('ANSWER_FIELD'),
    min: ANSWER_FIELD_MIN_LENGTH,
  });
  const questionMinLengthMessage = t('FIELD_MIN_LENGTH', {
    fieldName: t('QUESTION_FIELD'),
    min: QUESTION_FIELD_MIN_LENGTH,
  });

  return (
    <CustomDialog
      dialogTitle={t('ADD_A_NEW_QUESTION_TITLE')}
      isOpen={isOpen}
      handleClose={onClose}
      ariaLabelledby="add-question-dialog"
      dialogActionButtons={[
        {
          color: 'primary',
          buttonText: t('SAVE_QUESTION'),
          onClick: handleSubmit(onSubmit),
          variant: 'outlined',
        },
        {
          color: 'secondary',
          buttonText: t('CANCEL'),
          onClick: onClose,
          variant: 'outlined',
        },
      ]}
      dialogDescription={t('ADD_A_NEW_QUESTION_DESCRIPTION')}

    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="question"
          control={control}
          defaultValue={QUESTION_FIELD_DEFAULT_VALUE}
          rules={{
            required: questionRequiredMessage,
            minLength: {
              value: QUESTION_FIELD_MIN_LENGTH,
              message: questionMinLengthMessage,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={t('QUESTION_FIELD')}
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              className={classes.formField}
            />
          )}
        />
        <Controller
          name="answer"
          control={control}
          defaultValue={ANSWER_FIELD_DEFAULT_VALUE}
          rules={{
            required: answerRequiredMessage,
            minLength: {
              value: ANSWER_FIELD_MIN_LENGTH,
              message: answerMinLengthMessage,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={t('ANSWER_FIELD')}
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </form>

    </CustomDialog>
  );
};

export default AddQuestionDialog;
