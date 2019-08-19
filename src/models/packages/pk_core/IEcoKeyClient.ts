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



import { MsKey } from "../../services";
import { AxiosResponse } from "axios";

export interface IEcoKeyClient {
  loadUsersKeyByEmail(req: MsKey.IKeyRequestByEmail): Promise<AxiosResponse>;
  revokeKeysFromUserByKey(req: MsKey.IKeyRequestRevokeByKey): Promise<AxiosResponse>;
  revokeKeyFromUserByDeviceId(req: MsKey.IKeyRequestRevokeByDeviceId): Promise<AxiosResponse>;
  revokeAllKeys(): Promise<AxiosResponse>;
  addKeyToUserByEmail(req: MsKey.IKey): Promise<AxiosResponse>;
}
