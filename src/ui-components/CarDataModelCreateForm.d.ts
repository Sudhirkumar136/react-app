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
export declare type CarDataModelCreateFormInputValues = {
    Name?: string;
    Rent?: number;
    Description?: string;
    imageURL?: string;
};
export declare type CarDataModelCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Rent?: ValidationFunction<number>;
    Description?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarDataModelCreateFormOverridesProps = {
    CarDataModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Rent?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarDataModelCreateFormProps = React.PropsWithChildren<{
    overrides?: CarDataModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarDataModelCreateFormInputValues) => CarDataModelCreateFormInputValues;
    onSuccess?: (fields: CarDataModelCreateFormInputValues) => void;
    onError?: (fields: CarDataModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarDataModelCreateFormInputValues) => CarDataModelCreateFormInputValues;
    onValidate?: CarDataModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarDataModelCreateForm(props: CarDataModelCreateFormProps): React.ReactElement;
