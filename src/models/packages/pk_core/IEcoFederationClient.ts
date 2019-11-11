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



import { AxiosResponse } from "axios";
import { MsFederation } from "../../services";

/**
 *  validateIncomingFederationRequest(checksum: string, body: object): Promise<AxiosResponse>;
 *  loadRemoteUserPublicKeys(email: string): Promise<AxiosResponse>;
 *  getUserKeys(email: string, domain: string): Promise<AxiosResponse>;
 *  initFederation(domain: string): Promise<AxiosResponse>;
 *  ARE MOVED TO FEDERATION KEY SERVICE -
 */
export interface IEcoFederationClient {
  validateIncomingFederationRequest(checksum: string, body: object): Promise<AxiosResponse>;
  loadRemoteUserPublicKeys(email: string): Promise<AxiosResponse>;
  getUserKeys(email: string, domain: string): Promise<AxiosResponse>;
  initFederation(domain: string): Promise<AxiosResponse>;
  postRemoteContent(content: MsFederation.IFederationPostObject): Promise<AxiosResponse>;
  postRemoteContentAsCommunity(content: MsFederation.IFederationPostObject): Promise<AxiosResponse>;
  receiveRemoteContent(content: MsFederation.IFederationPostObject): Promise<AxiosResponse>;
  getRemoteContent(checksum: string, domain: string): Promise<AxiosResponse>;
  deliverRemoteContent(checksum: string, domain: string): Promise<AxiosResponse>;
}
