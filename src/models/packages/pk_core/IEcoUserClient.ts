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
import { AxiosResponse } from "axios";

export interface IEcoUserClient {
  loadUserById(id: string): Promise<AxiosResponse>;
  loadUserByEmail(email: string): Promise<AxiosResponse>;
  createUser(obj: MsUser.ICreateUserModel): Promise<AxiosResponse>;
  updateUserById(id: string, obj: MsUser.IUpdateUserModel): Promise<AxiosResponse>;
  deleteUserById(id: string): Promise<AxiosResponse>;
  loadAllUsers(): Promise<AxiosResponse>;
  sendForgotPasswordRequest(obj: MsUser.IForgotPasswordRequest): Promise<AxiosResponse>;
  sendAndUpdatePassword(obj: MsUser.IForgotPasswordUpdateRequest): Promise<AxiosResponse>;
  searchUsers(query: string): Promise<AxiosResponse>;
  importUsers(users: MsUser.IImportRequest): Promise<AxiosResponse>;
  activeUser(obj: MsUser.ICreateUserModel): Promise<AxiosResponse>;
  deactivateUser(activationId: string): Promise<AxiosResponse>;
  loadUserByActivationId(activationId: string): Promise<AxiosResponse>;
  prepareUserForDelete(id: string): Promise<AxiosResponse>;
  deleteUserByDeleteId(id: string): Promise<AxiosResponse>;
  getCountFromActivatedUsers(): Promise<AxiosResponse>;
  verifyForgotPasswordId(id: string): Promise<AxiosResponse>;
  verifyActivationId(id: string): Promise<AxiosResponse>;
  verifyDeleteId(id: string): Promise<AxiosResponse>;
  addKeyToUser(id: string, apiKey: MsUser.IApiKey): Promise<AxiosResponse>;
  loadUserByApiKey(key: string): Promise<AxiosResponse>;
  removeKeyFromUser(id: string, apiKey: string): Promise<AxiosResponse>;
  removeAllKeysFromUser(id: string): Promise<AxiosResponse>;
  // JSC: COMES WITH A LATER UPDATE
  // addAliasToUser(id: string, alias: string): Promise<AxiosResponse>;
  // removeAliasFromUser(id: string, alias: string): Promise<AxiosResponse>;
  // loadUserByAlias(alias: string): Promise<AxiosResponse>;
  addKey(key: MsUser.IApikeyGroup): Promise<AxiosResponse>;
  addMembers(id: string, members: Array<string>): Promise<AxiosResponse>;
  addDomains(id: string, domains: Array<string>): Promise<AxiosResponse>;
  getGroupById(id: string): Promise<AxiosResponse>;
  getAllGroups(): Promise<AxiosResponse>;
  loadGroupByApikey(key: string): Promise<AxiosResponse>;
  deleteMember(id: string, member: string): Promise<AxiosResponse>;
  deleteDomain(id: string, domain: string): Promise<AxiosResponse>;
  deleteKey(id: string): Promise<AxiosResponse>;
}
