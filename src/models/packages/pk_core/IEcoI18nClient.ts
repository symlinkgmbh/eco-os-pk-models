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

export interface IEcoI18nClient {
  getLocaleEntryByKey(locale: string, key: string, delimeter: string | undefined): Promise<AxiosResponse>;
  getLocale(locale: string, delimeter: string | undefined): Promise<AxiosResponse>;
  addLocale(locale: string, key: string, value: string): Promise<AxiosResponse>;
  updateLocaleById(id: string, locale: string, key: string, value: string): Promise<AxiosResponse>;
  getLocaleById(id: string): Promise<AxiosResponse>;
  deleteLocaleById(id: string): Promise<AxiosResponse>;
}
