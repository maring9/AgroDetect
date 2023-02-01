import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AccountType {
  BASIC = "BASIC",
  PREMIUM = "PREMIUM"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly account_type: AccountType | keyof typeof AccountType;
  readonly inference_requests?: (Inference | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly account_type: AccountType | keyof typeof AccountType;
  readonly inference_requests: AsyncCollection<Inference>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerInference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly s3_image_path: string;
  readonly run_by_user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInference_requestsId?: string | null;
}

type LazyInference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly s3_image_path: string;
  readonly run_by_user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInference_requestsId?: string | null;
}

export declare type Inference = LazyLoading extends LazyLoadingDisabled ? EagerInference : LazyInference

export declare const Inference: (new (init: ModelInit<Inference>) => Inference) & {
  copyOf(source: Inference, mutator: (draft: MutableModel<Inference>) => MutableModel<Inference> | void): Inference;
}