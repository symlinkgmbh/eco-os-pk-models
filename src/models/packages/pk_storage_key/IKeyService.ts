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
export interface IKeyService {
  getPubKeys(email: string): Promise<Array<MsKey.IKey> | null>;
  revokePubKeyByDeviceId(deviceId: string): Promise<boolean>;
  revokePubKeyByKey(pubKey: string): Promise<boolean>;
  revokePubKeys(email: string): Promise<boolean>;
  revokeAllPubKeys(): Promise<boolean>;
  addPubKey(email: string, pubKey: string, deviceId: string): Promise<MsKey.IKey | null>;
  checkForKeyAndDeviceId(key: string, deviceId: string): Promise<boolean>;
  revokeDevice(deviceId: string): Promise<boolean>;
}
