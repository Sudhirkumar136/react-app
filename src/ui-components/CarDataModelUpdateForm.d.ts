/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarDataModelUpdateFormInputValues = {
    Name?: string;
    Rent?: number;
    Description?: string;
    imageURL?: string;
};
export declare type CarDataModelUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Rent?: ValidationFunction<number>;
    Description?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarDataModelUpdateFormOverridesProps = {
    CarDataModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Rent?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarDataModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarDataModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carDataModel?: any;
    onSubmit?: (fields: CarDataModelUpdateFormInputValues) => CarDataModelUpdateFormInputValues;
    onSuccess?: (fields: CarDataModelUpdateFormInputValues) => void;
    onError?: (fields: CarDataModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarDataModelUpdateFormInputValues) => CarDataModelUpdateFormInputValues;
    onValidate?: CarDataModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarDataModelUpdateForm(props: CarDataModelUpdateFormProps): React.ReactElement;
