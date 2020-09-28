import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import FormSubmit from '@components/FormSubmit';
import Form from "../Form";
import Grid from "@material-ui/core/Grid";
import FormField from "../FormField";


export default {
    component: FormSubmit,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/FormSubmit',
};


export const General = (): React.ReactElement => {

    const validation = {
        required: {
            value: true,
            message: 'This field is required.',
        },
        minLength: {
            value: 10,
            message: 'A length of 10 or more is required.'
        }
    };

    return (
        <Form style={{ display: 'grid', gridGap: '1rem' }} onSubmit={(values: any) => console.log(values)} >
            <FormField label="text1" name="text1" type="text" placeholder="text" autoComplete="new" validation={validation} />
            <FormField label="text2" name="text2" type="password" placeholder="text" autoComplete="new" validation={validation} />
            <FormField label="text1" name="text3" type="text" placeholder="text" autoComplete="new" validation={validation} />
            <FormField label="Radio" name="radio" type="radio" value="checked" validation={validation} />
            <FormField label="Switch" name="switch" type="switch" validation={validation} />
            <FormField label="Checkbox" name="checkbox" type="checkbox" validation={validation} />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );

}