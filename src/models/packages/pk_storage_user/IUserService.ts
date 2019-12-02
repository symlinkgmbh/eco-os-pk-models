/**
 * Copyright 2018-2019 Symlink GmbH
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */



import { MsUser } from "../../services";
import { IApiKey } from "../../services/ms_user/IApiKey";

export interface IUserService {
  createUser(user: MsUser.IUser): Promise<MsUser.IUser>;
  loadUserById(id: string): Promise<MsUser.IUser | null>;
  loadAllUsers(): Promise<Array<MsUser.IUser> | null>;
  deleteUserById(id: string): Promise<boolean>;
  updateUserById<T>(id: string, item: T): Promise<boolean>;
  loadUserByEmail(email: string): Promise<Array<MsUser.IUser> | null>;
  loadUserByForgotPasswordId(id: string): Promise<MsUser.IUser | null>;
  loadUserByActivationId(id: string): Promise<MsUser.IUser | null>;
  loadUserByDeleteId(deleteId: string): Promise<MsUser.IUser | null>;
  searchUsers(query: string): Promise<Array<MsUser.IUser> | null>;
  getCountFromActivatedUsers(): Promise<number>;
  loadUserByApiKey(key: string): Promise<MsUser.IUser | null>;
  addApiKeyToUser(id: string, key: IApiKey): Promise<MsUser.IUser | null>;
  removeApiKeyFromUser(id: string, key: string): Promise<MsUser.IUser | null>;
  removeAllApiKeysFromUser(id: string): Promise<boolean>;
  addAliasToUser(id: string, alias: string): Promise<MsUser.IUser | null>;
  removeAliasFromUser(id: string, alias: string): Promise<MsUser.IUser | null>;
  loadUserByAlias(alias: string): Promise<MsUser.IUser | null>;
}
