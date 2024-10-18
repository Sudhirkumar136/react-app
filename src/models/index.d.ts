import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCarDataModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CarDataModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Rent: number;
  readonly Description?: string | null;
  readonly imageURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarDataModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CarDataModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Rent: number;
  readonly Description?: string | null;
  readonly imageURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CarDataModel = LazyLoading extends LazyLoadingDisabled ? EagerCarDataModel : LazyCarDataModel

export declare const CarDataModel: (new (init: ModelInit<CarDataModel>) => CarDataModel) & {
  copyOf(source: CarDataModel, mutator: (draft: MutableModel<CarDataModel>) => MutableModel<CarDataModel> | void): CarDataModel;
}